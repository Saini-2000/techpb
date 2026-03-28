import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img className="brand-logo" src={logo} alt="Tech Panjab logo" />
              <div className="footer-title">Tech Panjab</div>
            </div>
            <div className="muted" style={{ marginTop: 10, lineHeight: 1.6 }}>
              Building modern web products with performance, security, and design craft.
            </div>
          </div>
          <div>
            <div className="footer-title">Company</div>
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <NavLink to="/about" className="footer-link">
                About
              </NavLink>
              <NavLink to="/services" className="footer-link">
                Services
              </NavLink>
              <NavLink to="/contact" className="footer-link">
                Contact
              </NavLink>
            </div>
          </div>
          <div>
            <div className="footer-title">Get in touch</div>
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <a className="footer-link" href="mailto:techpanjab6@gmail.com">
                techpanjab6@gmail.com
              </a>
              <a className="footer-link" href="tel:+919816455684">
                +919816455684
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Tech Panjab. All rights reserved.</div>
          <div className="muted" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <NavLink to="/privacy-policy" className="footer-link" style={{ padding: 0 }}>
              Privacy
            </NavLink>
            <span>•</span>
            <NavLink to="/terms-conditions" className="footer-link" style={{ padding: 0 }}>
              Terms
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
