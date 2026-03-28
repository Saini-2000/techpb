import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import AuthCard from '../components/auth/AuthCard.jsx'
import PasswordInput from '../components/ui/PasswordInput.jsx'
import Button from '../components/ui/Button.jsx'
import Alert from '../components/ui/Alert.jsx'
import { getPendingReset, resetPassword } from '../lib/localAuth.js'

function validate({ token, password, confirmPassword }) {
  const errors = {}
  if (!token || token.trim().length < 4) errors.token = 'Token is required.'
  if (!password || password.length < 6) errors.password = 'Password must be at least 6 characters.'
  if (!confirmPassword || confirmPassword.length < 6) {
    errors.confirmPassword = 'Please confirm your password.'
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match.'
  }
  return errors
}

export default function ResetPassword() {
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ token: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fromNav = location.state?.token
    const pending = getPendingReset()
    const token = fromNav || pending?.token || ''
    if (token) {
      setForm((f) => (f.token ? f : { ...f, token }))
    }
  }, [location.state])

  const onSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    setStatus(null)
    if (Object.keys(nextErrors).length > 0) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 250))
    const result = resetPassword({
      token: form.token,
      newPassword: form.password,
    })
    setLoading(false)

    if (!result.ok) {
      setStatus({ variant: 'error', message: result.error })
      return
    }

    setStatus({
      variant: 'success',
      message: 'Password updated. You can log in with your new password.',
    })

    setTimeout(() => navigate('/auth'), 900)
  }

  return (
    <div>
      <AuthCard
        title="Set a new password"
        subtitle="Use the token from Forgot password (saved in this browser) and choose a new password."
      >
        <form onSubmit={onSubmit}>
          {status ? (
            <Alert variant={status.variant === 'success' ? 'success' : 'error'}>
              {status.message}
            </Alert>
          ) : null}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <PasswordInput
              label="Reset Token"
              name="token"
              value={form.token}
              placeholder="Paste or enter your reset token"
              onChange={(e) => setForm((f) => ({ ...f, token: e.target.value }))}
              error={errors.token}
              autoComplete="off"
              spellCheck="false"
              visibilityShowLabel="Show reset token"
              visibilityHideLabel="Hide reset token"
            />
            <PasswordInput
              label="New Password"
              name="password"
              value={form.password}
              placeholder="Create a new password"
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              error={errors.password}
              autoComplete="new-password"
            />
            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              placeholder="Re-enter your password"
              onChange={(e) =>
                setForm((f) => ({ ...f, confirmPassword: e.target.value }))
              }
              error={errors.confirmPassword}
              autoComplete="new-password"
            />
          </div>

          <div className="auth-row" style={{ marginTop: 16 }}>
            <Button variant="primary" disabled={loading} type="submit">
              {loading ? 'Resetting...' : 'Reset password'}
            </Button>
            <div className="auth-links">
              <Link to="/auth" className="link">
                Back to sign in
              </Link>
            </div>
          </div>
        </form>
      </AuthCard>
    </div>
  )
}
