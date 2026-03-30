import { Link } from 'react-router-dom'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import ServiceIcon from '../components/icons/ServiceIcon.jsx'
import { ERP_SERVICES_FULL } from '../constants/erpServices.js'

export default function ErpServices() {
  return (
    <div>
      <section className="section erp-hero-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">ERP Services</div>
              <div className="section-title">Business modules that work together</div>
            </div>
            <div className="section-lead">
              Explore our ERP lineup—each module is designed for clarity, control, and scale. Select a card to
              read how it can support your operations.
            </div>
          </div>

          <div className="erp-grid">
            {ERP_SERVICES_FULL.map((s, idx) => (
              <Link
                key={s.slug}
                to={`/erp-services/${s.slug}`}
                className="erp-module-card-link reveal"
                style={{ animationDelay: `${idx * 70 + 40}ms` }}
                aria-label={`${s.title}: open module details`}
              >
                <Card className="erp-module-card card-fill">
                  <div className="erp-module-card-icon" aria-hidden="true">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <div className="erp-module-card-title">{s.title}</div>
                  <p className="erp-module-card-summary">{s.summary}</p>
                  <span className="erp-module-card-cta">View module details →</span>
                </Card>
              </Link>
            ))}
          </div>

          <div className="erp-page-cta reveal" style={{ animationDelay: '200ms' }}>
            <div className="card card-pad glass" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: '-0.02em' }}>Need a tailored rollout?</div>
                <div className="muted" style={{ marginTop: 8, lineHeight: 1.6, maxWidth: '52ch' }}>
                  Tell us about your industry, team size, and priorities—we will suggest a practical sequence and
                  integration plan.
                </div>
              </div>
              <Button to="/contact" variant="primary">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
