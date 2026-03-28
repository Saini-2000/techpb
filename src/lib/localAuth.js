const USERS_KEY = 'tech_panjab_users'
const SESSION_KEY = 'tech_panjab_session'
const RESET_KEY = 'tech_panjab_password_reset'

function normalizeEmail(email) {
  return String(email || '')
    .trim()
    .toLowerCase()
}

/** Last 10 digits for consistent IN-style numbers (+91, leading 0, etc.). */
export function normalizeMobile(raw) {
  const d = String(raw || '').replace(/\D/g, '')
  if (d.length === 0) return ''
  if (d.length >= 10) return d.slice(-10)
  return d
}

function findUserByMobile(users, normalizedMobile) {
  if (!normalizedMobile || normalizedMobile.length < 10) return null
  for (const key of Object.keys(users)) {
    const u = users[key]
    if (normalizeMobile(u.mobile || '') === normalizedMobile) return u
  }
  return null
}

function safeParse(json, fallback) {
  try {
    return json ? JSON.parse(json) : fallback
  } catch {
    return fallback
  }
}

function getUsers() {
  return safeParse(localStorage.getItem(USERS_KEY), {})
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function makeToken() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`
}

export function getSession() {
  return safeParse(localStorage.getItem(SESSION_KEY), null)
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}

export function logout() {
  clearSession()
}

export function signup({ name, email, password, mobile }) {
  const users = getUsers()
  const key = normalizeEmail(email)
  if (users[key]) {
    return { ok: false, error: 'An account with this email already exists.' }
  }
  const mobileNorm = normalizeMobile(mobile)
  if (!mobileNorm || mobileNorm.length < 10) {
    return { ok: false, error: 'A valid 10-digit mobile number is required.' }
  }
  if (findUserByMobile(users, mobileNorm)) {
    return { ok: false, error: 'An account with this mobile number already exists.' }
  }
  users[key] = {
    name: String(name || '').trim(),
    email: String(email || '').trim(),
    mobile: mobileNorm,
    password,
  }
  saveUsers(users)
  return { ok: true }
}

/** `identifier` is an email address or a mobile number (digits). */
export function login({ identifier, password }) {
  const users = getUsers()
  const raw = String(identifier || '').trim()
  let user = null

  if (raw.includes('@')) {
    user = users[normalizeEmail(raw)]
  } else {
    user = findUserByMobile(users, normalizeMobile(raw))
  }

  if (!user) {
    return { ok: false, error: 'No account found for this email or mobile number.' }
  }
  if (user.password !== password) {
    return { ok: false, error: 'Incorrect password.' }
  }
  const session = {
    email: user.email,
    name: user.name,
    mobile: user.mobile || '',
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return { ok: true, session }
}

export function requestPasswordReset({ email }) {
  const users = getUsers()
  const key = normalizeEmail(email)
  const user = users[key]
  if (!user) {
    return { ok: false, error: 'No account found for this email.' }
  }
  const token = makeToken()
  localStorage.setItem(
    RESET_KEY,
    JSON.stringify({ email: user.email, token }),
  )
  return { ok: true, token, email: user.email }
}

export function getPendingReset() {
  return safeParse(localStorage.getItem(RESET_KEY), null)
}

export function resetPassword({ token, newPassword }) {
  const pending = getPendingReset()
  if (!pending || !pending.token) {
    return {
      ok: false,
      error: 'No active password reset. Use Forgot password first.',
    }
  }
  const t = String(token || '').trim()
  if (!t || t !== pending.token) {
    return { ok: false, error: 'Invalid reset token.' }
  }
  const users = getUsers()
  const key = normalizeEmail(pending.email)
  const user = users[key]
  if (!user) {
    return { ok: false, error: 'Account not found.' }
  }
  user.password = newPassword
  saveUsers(users)
  localStorage.removeItem(RESET_KEY)
  return { ok: true }
}
