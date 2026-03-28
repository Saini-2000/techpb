import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import ServiceIcon from '../components/icons/ServiceIcon.jsx'

const servicesPreview = [
  {
    icon: 'code',
    title: 'Web Development',
    description: 'Fast, accessible React builds with clean UX and performance budgets.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & Deploy',
    description: 'Scalable deployments with reliable CI/CD and environment hardening.',
  },
  {
    icon: 'security',
    title: 'Security by Design',
    description: 'Threat modeling, secure patterns, and defense-in-depth for production.',
  },
]

const testimonials = [
  {
    name: 'Amanpreet Singh',
    role: 'Product Lead',
    quote:
      'Tech Panjab delivered a modern UI that feels premium. The team was responsive and detail-oriented.',
  },
  {
    name: 'Niharika Sharma',
    role: 'Founder',
    quote:
      'From the first sprint to launch, everything was smooth—clear communication, great design, and solid engineering.',
  },
  {
    name: 'Rahul Verma',
    role: 'Engineering Manager',
    quote:
      'Their focus on performance and maintainability showed in the final build. Highly recommended.',
  },
]

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-card glass reveal" style={{ animationDelay: '0ms' }}>
              <div className="hero-blob one" aria-hidden="true" />
              <div className="hero-blob two" aria-hidden="true" />

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                <span className="chip">Design • Engineering • Delivery</span>
                <span className="chip" style={{ borderColor: 'rgba(99,102,241,0.35)' }}>
                  Built for modern teams
                </span>
              </div>

              <h1 className="hero-title">Ship stunning web experiences</h1>
              <p className="hero-subtitle">
                A professional engineering partner for websites, dashboards, and production-ready product
                UI—crafted with performance and security.
              </p>

              <div className="hero-actions">
                <Button to="/services" variant="primary">
                  Explore Services
                </Button>
                <Button to="/contact" variant="secondary">
                  Talk to Us
                </Button>
              </div>

              <div className="hero-stats" aria-label="Quick highlights">
                <div className="stat">
                  <div className="stat-number">Fast</div>
                  <div className="stat-label">Performance-focused builds</div>
                </div>
                <div className="stat">
                  <div className="stat-number">Secure</div>
                  <div className="stat-label">Safe patterns & reviews</div>
                </div>
              </div>
            </div>

            <div>
              <div className="glass hero-card reveal" style={{ padding: 20, animationDelay: '120ms' }}>
                <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: '-0.02em' }}>
                  What we do best
                </div>
                <div className="muted" style={{ marginTop: 8, lineHeight: 1.6, fontSize: 14 }}>
                  Three core capabilities to launch quickly and scale confidently.
                </div>
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {servicesPreview.map((s) => (
                    <div
                      key={s.title}
                      className="card"
                      style={{ padding: 14, background: 'rgba(255,255,255,0.03)' }}
                    >
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div style={{ color: 'rgba(168,85,247,0.95)' }}>
                          <ServiceIcon name={s.icon} />
                        </div>
                        <div style={{ fontWeight: 850 }}>{s.title}</div>
                      </div>
                      <div className="muted" style={{ marginTop: 8, fontSize: 14, lineHeight: 1.55 }}>
                        {s.description}
                      </div>
                      <div style={{ marginTop: 10 }}>
                        <Button to="/services" variant="ghost" className="">
                          Learn more
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ height: 14 }} />
              <div
                className="card card-pad reveal"
                style={{ animationDelay: '220ms', background: 'rgba(255,255,255,0.03)' }}
              >
                <div style={{ fontWeight: 900 }}>Need a fast start?</div>
                <div className="muted" style={{ marginTop: 8, lineHeight: 1.6 }}>
                  Get a free UI/UX discovery call—then we map your roadmap to a clean build plan.
                </div>
                <div style={{ marginTop: 12 }}>
                  <Button to="/contact" variant="primary" className="">
                    Book a call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Services Preview</div>
              <div className="section-title">Designed to look great and perform fast</div>
            </div>
            <div className="section-lead">
              From landing pages to full product dashboards—we build with maintainability in mind.
            </div>
          </div>

          <div style={{ marginTop: 18 }} className="grid-3">
            {servicesPreview.map((s, idx) => (
              <div key={s.title} className="reveal" style={{ animationDelay: `${idx * 120 + 80}ms` }}>
                <Card>
                  <div style={{ color: 'rgba(168,85,247,0.95)' }}>
                    <ServiceIcon name={s.icon} />
                  </div>
                  <div style={{ marginTop: 10, fontWeight: 900, fontSize: 18 }}>{s.title}</div>
                  <div className="muted" style={{ marginTop: 8, lineHeight: 1.6, fontSize: 14 }}>
                    {s.description}
                  </div>
                  <div style={{ marginTop: 14 }}>
                    <Button to="/services" variant="secondary">
                      View details
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Testimonials</div>
              <div className="section-title">Loved by teams who ship</div>
            </div>
            <div className="section-lead">
              Short feedback from clients—focused on quality, communication, and outcomes.
            </div>
          </div>

          <div style={{ marginTop: 18 }} className="grid-3">
            {testimonials.map((t, idx) => (
              <div key={t.name} className="reveal" style={{ animationDelay: `${idx * 120 + 90}ms` }}>
                <Card className="card-fill">
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div
                      aria-hidden="true"
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 18,
                        background: 'linear-gradient(135deg, rgba(99,102,241,0.95), rgba(168,85,247,0.95))',
                        border: '1px solid rgba(255,255,255,0.12)',
                        boxShadow: '0 18px 60px rgba(168,85,247,0.25)',
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 900 }}>{t.name}</div>
                      <div className="muted" style={{ fontSize: 13 }}>{t.role}</div>
                    </div>
                  </div>
                  <div style={{ marginTop: 12, lineHeight: 1.75, color: 'rgba(255,255,255,0.86)', flex: 1 }}>
                    “{t.quote}”
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
