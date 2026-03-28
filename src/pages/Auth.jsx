import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import AuthCard from '../components/auth/AuthCard.jsx'
import Input from '../components/ui/Input.jsx'
import PasswordInput from '../components/ui/PasswordInput.jsx'
import Button from '../components/ui/Button.jsx'
import Alert from '../components/ui/Alert.jsx'
import { login, signup } from '../lib/localAuth.js'

function validateLogin({ identifier, password }) {
  const errors = {}
  const id = String(identifier || '').trim()
  if (!id) {
    errors.identifier = 'Email or mobile number is required.'
  } else if (id.includes('@')) {
    if (!/^\S+@\S+\.\S+$/.test(id)) errors.identifier = 'Email format looks incorrect.'
  } else {
    const digits = id.replace(/\D/g, '')
    if (digits.length < 10) errors.identifier = 'Enter a valid 10-digit mobile number.'
  }
  if (!password || password.length < 6) errors.password = 'Password must be at least 6 characters.'
  return errors
}

function validateSignup({ name, email, mobile, password, confirmPassword }) {
  const errors = {}
  if (!name || name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'
  if (!email || email.trim().length < 5) errors.email = 'Email is required.'
  else if (!/^\S+@\S+\.\S+$/.test(email.trim())) errors.email = 'Email format looks incorrect.'
  const digits = String(mobile || '').replace(/\D/g, '')
  if (digits.length < 10) {
    errors.mobile = String(mobile || '').trim()
      ? 'Enter a valid 10-digit mobile number.'
      : 'Mobile number is required.'
  }
  if (!password || password.length < 6) errors.password = 'Password must be at least 6 characters.'
  if (!confirmPassword || confirmPassword.length < 6) {
    errors.confirmPassword = 'Please confirm your password.'
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match.'
  }
  return errors
}

export default function Auth() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const tab = searchParams.get('mode') === 'signup' ? 'signup' : 'login'

  const setTab = (next) => {
    if (next === 'signup') setSearchParams({ mode: 'signup' })
    else setSearchParams({})
  }

  const [loginForm, setLoginForm] = useState({ identifier: '', password: '' })
  const [loginErrors, setLoginErrors] = useState({})
  const [loginStatus, setLoginStatus] = useState(null)
  const [loginLoading, setLoginLoading] = useState(false)

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  })
  const [signupErrors, setSignupErrors] = useState({})
  const [signupStatus, setSignupStatus] = useState(null)
  const [signupLoading, setSignupLoading] = useState(false)

  const switchTab = (next) => {
    setTab(next)
    setLoginErrors({})
    setSignupErrors({})
    setLoginStatus(null)
    setSignupStatus(null)
  }

  const onLoginSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validateLogin(loginForm)
    setLoginErrors(nextErrors)
    setLoginStatus(null)
    if (Object.keys(nextErrors).length > 0) return

    setLoginLoading(true)
    await new Promise((r) => setTimeout(r, 250))
    const result = login({ identifier: loginForm.identifier, password: loginForm.password })
    setLoginLoading(false)

    if (!result.ok) {
      setLoginStatus({ variant: 'error', message: result.error })
      return
    }

    setLoginStatus({
      variant: 'success',
      message: `Welcome back${result.session?.name ? `, ${result.session.name}` : ''}. Redirecting…`,
    })
    setTimeout(() => navigate('/'), 700)
  }

  const onSignupSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validateSignup(signupForm)
    setSignupErrors(nextErrors)
    setSignupStatus(null)
    if (Object.keys(nextErrors).length > 0) return

    setSignupLoading(true)
    await new Promise((r) => setTimeout(r, 300))
    const result = signup({
      name: signupForm.name,
      email: signupForm.email,
      mobile: signupForm.mobile,
      password: signupForm.password,
    })
    setSignupLoading(false)

    if (!result.ok) {
      setSignupStatus({ variant: 'error', message: result.error })
      return
    }

    setSignupForm({ name: '', email: '', mobile: '', password: '', confirmPassword: '' })
    setSignupErrors({})
    setSignupStatus(null)
    setLoginErrors({})
    setTab('login')
    setLoginStatus({
      variant: 'success',
      message: 'Account created. Sign in with your email or mobile number and password.',
    })
  }

  const tabs = (
    <div className="auth-tabs" role="tablist" aria-label="Account">
      <button
        type="button"
        role="tab"
        id="auth-tab-login"
        aria-selected={tab === 'login'}
        className={`auth-tab ${tab === 'login' ? 'auth-tab-active' : ''}`}
        onClick={() => switchTab('login')}
      >
        Log in
      </button>
      <button
        type="button"
        role="tab"
        id="auth-tab-signup"
        aria-selected={tab === 'signup'}
        className={`auth-tab ${tab === 'signup' ? 'auth-tab-active' : ''}`}
        onClick={() => switchTab('signup')}
      >
        Create account
      </button>
    </div>
  )

  return (
    <div>
      <AuthCard
        headerExtra={tabs}
        title={tab === 'login' ? 'Welcome back' : 'Create your account'}
        subtitle={
          tab === 'login'
            ? 'Sign in with email or mobile number.'
            : 'Join Tech Panjab.'
        }
      >
        {tab === 'login' ? (
          <form onSubmit={onLoginSubmit} style={{ position: 'relative' }}>
            {loginStatus ? (
              <Alert variant={loginStatus.variant === 'success' ? 'success' : 'error'}>
                {loginStatus.message}
              </Alert>
            ) : null}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Input
                label="Email or mobile number"
                name="identifier"
                type="text"
                value={loginForm.identifier}
                placeholder="you@example.com or 9876543210"
                onChange={(e) => setLoginForm((f) => ({ ...f, identifier: e.target.value }))}
                error={loginErrors.identifier}
                autoComplete="username"
              />
              <PasswordInput
                label="Password"
                name="password"
                value={loginForm.password}
                placeholder="Your password"
                onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
                error={loginErrors.password}
                autoComplete="current-password"
              />
            </div>

            <div className="auth-row" style={{ marginTop: 16 }}>
              <Button variant="primary" disabled={loginLoading} type="submit">
                {loginLoading ? 'Signing in...' : 'Log in'}
              </Button>
              <div className="auth-links">
                <Link to="/forgot-password" className="link">
                  Forgot password?
                </Link>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={onSignupSubmit}>
            {signupStatus ? (
              <Alert variant={signupStatus.variant === 'success' ? 'success' : 'error'}>
                {signupStatus.message}
              </Alert>
            ) : null}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Input
                label="Name"
                name="name"
                value={signupForm.name}
                placeholder="Your name"
                onChange={(e) => setSignupForm((f) => ({ ...f, name: e.target.value }))}
                error={signupErrors.name}
                autoComplete="name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={signupForm.email}
                placeholder="you@example.com"
                onChange={(e) => setSignupForm((f) => ({ ...f, email: e.target.value }))}
                error={signupErrors.email}
                autoComplete="email"
              />
              <Input
                label="Mobile number"
                name="mobile"
                type="tel"
                value={signupForm.mobile}
                placeholder="+91 98765 43210"
                onChange={(e) => setSignupForm((f) => ({ ...f, mobile: e.target.value }))}
                error={signupErrors.mobile}
                autoComplete="tel"
              />
              <PasswordInput
                label="Password"
                name="password"
                value={signupForm.password}
                placeholder="Create a password"
                onChange={(e) => setSignupForm((f) => ({ ...f, password: e.target.value }))}
                error={signupErrors.password}
                autoComplete="new-password"
              />
              <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                value={signupForm.confirmPassword}
                placeholder="Re-enter your password"
                onChange={(e) =>
                  setSignupForm((f) => ({ ...f, confirmPassword: e.target.value }))
                }
                error={signupErrors.confirmPassword}
                autoComplete="new-password"
              />
            </div>

            <div className="auth-row" style={{ marginTop: 16 }}>
              <Button variant="primary" disabled={signupLoading} type="submit">
                {signupLoading ? 'Creating...' : 'Sign up'}
              </Button>
            </div>
          </form>
        )}
      </AuthCard>
    </div>
  )
}
