import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import ServiceIcon from '../components/icons/ServiceIcon.jsx'
import { getErpServiceBySlug } from '../constants/erpServices.js'

export default function ErpServiceDetail() {
  const { slug } = useParams()
  const service = slug ? getErpServiceBySlug(slug) : null

  if (!service) {
    return <Navigate to="/erp-services" replace />
  }

  return (
    <div>
      <section className="section">
        <div className="container">
          <nav className="erp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/erp-services" className="erp-breadcrumb-link">
              ERP Services
            </Link>
            <span className="erp-breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <span className="muted">{service.title}</span>
          </nav>

          <div className="erp-detail-head reveal">
            <div className="erp-detail-icon-wrap" aria-hidden="true">
              <ServiceIcon name={service.icon} />
            </div>
            <h1 className="erp-detail-title">{service.title}</h1>
            <p className="erp-detail-summary">{service.summary}</p>
          </div>

          <article className="erp-detail-body glass reveal" style={{ animationDelay: '80ms' }}>
            {service.detail.map((para, i) => (
              <p key={i} className="erp-detail-para">
                {para}
              </p>
            ))}
          </article>

          <div className="erp-detail-actions reveal" style={{ animationDelay: '140ms' }}>
            <Button to="/contact" variant="primary">
              Discuss this module
            </Button>
            <Button to="/erp-services" variant="secondary">
              All ERP services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
