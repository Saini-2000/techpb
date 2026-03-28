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

export default function TermsConditions() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Terms & Conditions</div>
              <div className="section-title">Clear rules. Better experiences.</div>
            </div>
          </div>

          <Card className="glass" style={{ marginTop: 18, padding: 24 }}>
            <Section title="Acceptance of Terms">
              By using this website, you agree to these Terms & Conditions. If you do not agree,
              please do not use the site.
            </Section>

            <Section title="User Responsibilities">
              You are responsible for keeping your account details secure (in this demo, stored in
              your browser). You agree not to misuse the site or attempt unauthorized access.
            </Section>

            <Section title="Intellectual Property">
              All content and branding on this site is owned by Tech Panjab and/or its licensors, and
              is protected by applicable intellectual property laws.
            </Section>

            <Section title="Limitation of Liability">
              To the maximum extent permitted by law, Tech Panjab will not be liable for damages
              arising from your use of the site.
            </Section>

            <Section title="Termination">
              We may suspend or terminate access if we believe you have violated these Terms.
            </Section>

            <Section title="Governing Law">
              These Terms are governed by the laws applicable to the location of Tech Panjab.
            </Section>

            <Section title="Contact Us">
              Questions? Email us at{' '}
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
