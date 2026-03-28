import Card from '../components/ui/Card.jsx'

function Section({ title, children }) {
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ fontWeight: 950, fontSize: 18 }}>{title}</div>
      <div className="muted" style={{ marginTop: 8, lineHeight: 1.75, fontSize: 14 }}>
        {children}
      </div>
    </div>
  )
}

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Privacy Policy</div>
              <div className="section-title">Your data, respected and protected</div>
            </div>
          </div>

          <Card className="glass" style={{ marginTop: 18, padding: 24 }}>
            <Section title="Introduction">
              This Privacy Policy explains how Tech Panjab (“we”, “us”, “our”) collects, uses, and
              protects information when you use our website and services.
            </Section>

            <Section title="Information We Collect">
              We may collect personal information you provide directly (for example, name, email, and
              message content from forms). For authentication in this demo, we also store account data
              in your browser using localStorage.
            </Section>

            <Section title="How We Use Your Information">
              We use your information to respond to requests, improve our services, provide customer
              support, and (in this demo) manage sign-in and password reset flows stored locally in your
              browser.
            </Section>

            <Section title="Security">
              We take reasonable steps to protect information. However, no method of transmission or
              storage is 100% secure.
            </Section>

            <Section title="Third-Party Services">
              Where applicable, third-party providers (such as analytics or hosting providers) may
              process data on our behalf under their own policies.
            </Section>

            <Section title="Your Rights">
              Depending on your location, you may have rights to access, correct, delete, or export your
              personal information. In this demo, you can also clear site data to remove localStorage
              entries.
            </Section>

            <Section title="Contact Us">
              If you have questions about this Privacy Policy, contact us at{' '}
              <a className="link" href="mailto:techpanjab6@gmail.com">
                techpanjab6@gmail.com
              </a>
              .
            </Section>
          </Card>
        </div>
      </section>
    </div>
  )
}
