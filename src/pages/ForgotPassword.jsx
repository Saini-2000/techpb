import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthCard from '../components/auth/AuthCard.jsx'
import PasswordInput from '../components/ui/PasswordInput.jsx'
import Button from '../components/ui/Button.jsx'
import Alert from '../components/ui/Alert.jsx'
import { requestPasswordReset } from '../lib/localAuth.js'

function validate({ email }) {
  const errors = {}
  if (!email || email.trim().length < 5) errors.email = 'Email is required.'
  else if (!/^\S+@\S+\.\S+$/.test(email.trim())) errors.email = 'Email format looks incorrect.'
  return errors
}

export default function ForgotPassword() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    setStatus(null)
    if (Object.keys(nextErrors).length > 0) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 250))
    const result = requestPasswordReset({ email: form.email })
    setLoading(false)

    if (!result.ok) {
      setStatus({ variant: 'error', message: result.error })
      return
    }

    setStatus({
      variant: 'success',
      message:
        'Reset link is ready (stored locally). Continue to set your new password. Your reset token has been saved for this browser.',
    })

    setTimeout(
      () =>
        navigate('/reset-password', {
          state: { token: result.token, email: result.email },
        }),
      600,
    )
  }

  return (
    <div>
      <AuthCard title="Reset your password" subtitle="Enter your email to receive a reset link.">
        <form onSubmit={onSubmit}>
          {status ? (
            <Alert variant={status.variant === 'success' ? 'success' : 'error'}>
              {status.message}
            </Alert>
          ) : null}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <PasswordInput
              label="Email"
              name="email"
              value={form.email}
              placeholder="you@example.com"
              onChange={(e) => setForm({ email: e.target.value })}
              error={errors.email}
              autoComplete="email"
              defaultVisible
              visibleInputType="email"
              visibilityShowLabel="Show email"
              visibilityHideLabel="Hide email"
            />
          </div>

          <div className="auth-row" style={{ marginTop: 16 }}>
            <Button variant="primary" disabled={loading} type="submit">
              {loading ? 'Sending...' : 'Send reset link'}
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
