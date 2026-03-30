import { useMemo, useState } from 'react'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'
import TextArea from '../components/ui/TextArea.jsx'
import Alert from '../components/ui/Alert.jsx'

function validate({ name, email, message }) {
  const errors = {}

  if (!name || name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).'

  if (!email || email.trim().length < 5) {
    errors.email = 'Please enter a valid email address.'
  } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
    errors.email = 'Email format looks incorrect.'
  }

  if (!message || message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const canSubmit = useMemo(() => {
    return Object.keys(validate(form)).length === 0
  }, [form])

  const onSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    setStatus(null)

    if (Object.keys(nextErrors).length > 0) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 700))
    setLoading(false)

    setStatus({
      variant: 'success',
      message: 'Thanks! Your message has been prepared. A team member will get back to you soon.',
    })
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-head contact-shell contact-header">
            <div>
              <div className="section-kicker">Contact</div>
              <div className="section-title">Send Your Request</div>
            </div>
            <div className="section-lead">
              Share your project details with us. Our team will get back to you with clear next steps.
            </div>
          </div>

          <div className="contact-shell">
            <div className="contact-page-grid">
              <div className="reveal" style={{ animationDelay: '70ms' }}>
                <div className="grid gap-4" style={{ display: 'grid', gap: '8px' }}>
                  <Card className="glass contact-info-card" padded={false}>
                    <div className="contact-info-icon">@</div>
                    <div>
                      <div className="contact-info-title">Email Address</div>
                      <div className="contact-info-text">techpanjab6@gmail.com</div>
                    </div>
                  </Card>

                  <Card className="glass contact-info-card" padded={false}>
                    <div className="contact-info-icon">P</div>
                    <div>
                      <div className="contact-info-title">Phone No</div>
                      <div className="contact-info-text">+91 9816455684</div>
                    </div>
                  </Card>

                  <Card className="glass contact-info-card" padded={false}>
                    <div className="contact-info-icon">L</div>
                    <div>
                      <div className="contact-info-title">Address</div>
                      <div className="contact-info-text">Una, Himachal Pradesh</div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="reveal" style={{ animationDelay: '140ms' }}>
                <Card padded={false} className="glass contact-form-panel" style={{ height: '100%' }}>
                  <div style={{ padding: 20 }}>
                    <form onSubmit={onSubmit}>
                      {status ? (
                        <Alert variant={status.variant === 'success' ? 'success' : 'error'}>
                          {status.message}
                        </Alert>
                      ) : null}

                      <div className="field">
                        <Input
                          label="Full Name"
                          name="name"
                          value={form.name}
                          placeholder="Your full name"
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          error={errors.name}
                          autoComplete="name"
                        />

                        <Input
                          label="Your Email"
                          name="email"
                          type="email"
                          value={form.email}
                          placeholder="you@example.com"
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          error={errors.email}
                          autoComplete="email"
                        />

                        <TextArea
                          label="Your Request / Inquiry"
                          name="message"
                          value={form.message}
                          placeholder="Type your message"
                          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                          error={errors.message}
                          rows={7}
                        />
                      </div>

                      <div className="contact-actions" style={{ marginTop: 14 }}>
                        <Button variant="primary" disabled={!canSubmit || loading} type="submit">
                          {loading ? 'Sending...' : 'Send message'}
                        </Button>
                        <div className="muted" style={{ fontSize: 13 }}>
                          By submitting, you agree to our basic privacy expectations.
                        </div>
                      </div>
                    </form>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
