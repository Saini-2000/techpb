import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import ServiceIcon from '../components/icons/ServiceIcon.jsx'
import { ERP_HOME_FEATURES } from '../constants/erpServices.js'
import { SERVICES_HOME_HIGHLIGHT } from '../constants/servicesCatalog.js'

/** Stock video: abstract business / office (Pexels — free to use) */
const HERO_VIDEO_SRC =
  'https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4'

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
      <section className="video-hero" aria-label="Intro">
        <video
          className="video-hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="video-hero-overlay" aria-hidden="true" />
        <div className="video-hero-inner">
          <div className="video-hero-kicker">Enterprise resource planning</div>
          <h1 className="video-hero-title">Streamline Your Business with Smart ERP Solutions</h1>
          <p className="video-hero-lead">
            Connect operations, finance, and customer workflows in one place—built for clarity, speed,
            and growth across teams.
          </p>
          <div className="video-hero-actions">
            <Button to="/contact" variant="primary">
              Talk to us
            </Button>
            <Button to="/services" variant="secondary">
              Our services
            </Button>
          </div>
        </div>
      </section>

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
                  Highlighted services—explore the full lineup on our Services page.
                </div>
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {SERVICES_HOME_HIGHLIGHT.map((s) => (
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
                <div style={{ marginTop: 14 }}>
                  <Button to="/services" variant="secondary" size="sm" className="">
                    View all services
                  </Button>
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
              <div className="section-kicker">ERP Services</div>
              <div className="section-title">Modular solutions for real-world operations</div>
            </div>
            <div className="section-lead">
              Manufacturing, CRM, inventory, and more—implemented with a consistent, scalable foundation.
            </div>
          </div>

          <div style={{ marginTop: 18 }} className="grid-3">
            {ERP_HOME_FEATURES.map((s, idx) => (
              <div key={s.slug} className="reveal" style={{ animationDelay: `${idx * 120 + 80}ms` }}>
                <Card className="erp-home-card">
                  <div style={{ color: 'rgba(168,85,247,0.95)' }}>
                    <ServiceIcon name={s.icon} />
                  </div>
                  <div style={{ marginTop: 10, fontWeight: 900, fontSize: 18 }}>{s.title}</div>
                  <div className="muted" style={{ marginTop: 8, lineHeight: 1.6, fontSize: 14 }}>
                    {s.summary}
                  </div>
                  <div style={{ marginTop: 14 }}>
                    <Button to={`/erp-services/${s.slug}`} variant="secondary">
                      View details
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <Button to="/erp-services" variant="primary">
              View All Services
            </Button>
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
