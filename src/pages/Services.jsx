import Card from '../components/ui/Card.jsx'
import ServiceIcon from '../components/icons/ServiceIcon.jsx'
import Button from '../components/ui/Button.jsx'

const services = [
  {
    icon: 'code',
    title: 'Web Development',
    description: 'React UI, component systems, and clean front-end engineering.',
  },
  {
    icon: 'cloud',
    title: 'Deploy & Scale',
    description: 'Production deployments, CI/CD workflows, and environment stability.',
  },
  {
    icon: 'security',
    title: 'Security Reviews',
    description: 'Secure patterns, vulnerability mitigation, and threat-informed fixes.',
  },
  {
    icon: 'analytics',
    title: 'Performance Optimization',
    description: 'Speed audits, bundle tuning, and UX responsiveness improvements.',
  },
  {
    icon: 'privacy',
    title: 'Privacy & Compliance',
    description: 'Data-safe UI flows and best practices for handling sensitive inputs.',
  },
  {
    icon: 'launch',
    title: 'Product Launch Support',
    description: 'Polish, QA checks, and release readiness for smooth go-lives.',
  },
  {
    icon: 'code',
    title: 'Design Systems',
    description: 'Reusable components, consistent styling, and maintainable UI rules.',
  },
  {
    icon: 'analytics',
    title: 'UX Iteration',
    description: 'Feedback loops, usability improvements, and measured enhancements.',
  },
]

export default function Services() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Services</div>
              <div className="section-title">Everything you need to launch with confidence</div>
            </div>
            <div className="section-lead">
              Choose a starting point—then we tailor the scope to your team, timeline, and goals.
            </div>
          </div>

          <div style={{ marginTop: 18 }} className="grid-4">
            {services.map((s, idx) => (
              <div key={s.title} className="reveal" style={{ animationDelay: `${idx * 90 + 60}ms` }}>
                <Card>
                  <div style={{ color: 'rgba(168,85,247,0.95)' }}>
                    <ServiceIcon name={s.icon} />
                  </div>
                  <div style={{ marginTop: 12, fontWeight: 950, fontSize: 18 }}>{s.title}</div>
                  <div className="muted" style={{ marginTop: 8, lineHeight: 1.7, fontSize: 14 }}>
                    {s.description}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 26 }} className="card card-pad glass reveal" aria-label="Call to action">
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontWeight: 950, fontSize: 18, letterSpacing: '-0.02em' }}>
                  Have a project in mind?
                </div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  Tell us what you’re building and we’ll propose a clear plan.
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <Button to="/contact" variant="primary">
                  Contact Us
                </Button>
                <Button to="/about" variant="secondary">
                  Our Approach
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
