import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import { getSession, logout } from '../../lib/localAuth.js'

function UserIcon() {
  return (
    <svg
      className="nav-user-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M4 20a8 8 0 0116 0"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function AccountMenu({ session, variant, open, onToggle, menuRef, onLogout }) {
  const label = session.name || session.email

  return (
    <div className={`nav-user nav-user--${variant}`} ref={menuRef}>
      <button
        type="button"
        className="nav-user-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Account menu"
        onClick={onToggle}
      >
        <UserIcon />
        <span className={`nav-user-chevron ${open ? 'nav-user-chevron-open' : ''}`} aria-hidden>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open ? (
        <div className="nav-user-dropdown" role="menu">
          <div className="nav-user-dropdown-head">
            <span className="nav-user-dropdown-label">Signed in as</span>
            <span className="nav-user-dropdown-name">{label}</span>
          </div>
          <button
            type="button"
            className="nav-user-dropdown-logout"
            role="menuitem"
            onClick={onLogout}
          >
            Log out
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [session, setSession] = useState(() => getSession())
  const [accountOpen, setAccountOpen] = useState(false)
  const [accountOpenMobile, setAccountOpenMobile] = useState(false)
  const accountRef = useRef(null)
  const accountMobileRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setSession(getSession())
  }, [location.pathname])

  useEffect(() => {
    setAccountOpen(false)
    setAccountOpenMobile(false)
  }, [location.pathname])

  useEffect(() => {
    if (!accountOpen) return
    const onDown = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) setAccountOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [accountOpen])

  useEffect(() => {
    if (!accountOpenMobile) return
    const onDown = (e) => {
      if (accountMobileRef.current && !accountMobileRef.current.contains(e.target)) {
        setAccountOpenMobile(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [accountOpenMobile])

  useEffect(() => {
    if (!accountOpen && !accountOpenMobile) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setAccountOpen(false)
        setAccountOpenMobile(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [accountOpen, accountOpenMobile])

  const onNavigate = () => {
    setOpen(false)
    setAccountOpen(false)
    setAccountOpenMobile(false)
  }

  const onLogout = () => {
    logout()
    setSession(null)
    setAccountOpen(false)
    setAccountOpenMobile(false)
    onNavigate()
    navigate('/')
  }

  return (
    <div className="nav-wrap">
      <div className="container">
        <div className="nav">
          <NavLink to="/" className="brand" onClick={onNavigate} aria-label="Tech Panjab Home">
            <img className="brand-logo" src={logo} alt="Tech Panjab logo" />
            <span>Tech Panjab</span>
          </NavLink>

          <div className="nav-links" aria-label="Primary navigation">
            <div className="nav-links">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                onClick={onNavigate}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                onClick={onNavigate}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                onClick={onNavigate}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                onClick={onNavigate}
              >
                Contact
              </NavLink>
              {session ? (
                <AccountMenu
                  session={session}
                  variant="desktop"
                  open={accountOpen}
                  onToggle={() => setAccountOpen((v) => !v)}
                  menuRef={accountRef}
                  onLogout={onLogout}
                />
              ) : (
                <NavLink
                  to="/auth"
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                  onClick={onNavigate}
                >
                  Sign in
                </NavLink>
              )}
            </div>
          </div>

          <button
            type="button"
            className="hamburger"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hamburger-lines" aria-hidden="true">
              <span style={{ transform: open ? 'translateY(5px) rotate(45deg)' : 'none' }} />
              <span style={{ opacity: open ? 0 : 1 }} />
              <span style={{ transform: open ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
            </span>
          </button>
        </div>

        <div className="mobile-drawer" data-open={open ? 'true' : 'false'}>
          <div className="mobile-drawer-inner">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              onClick={onNavigate}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              onClick={onNavigate}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              onClick={onNavigate}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              onClick={onNavigate}
            >
              Contact
            </NavLink>
            {session ? (
              <AccountMenu
                session={session}
                variant="mobile"
                open={accountOpenMobile}
                onToggle={() => setAccountOpenMobile((v) => !v)}
                menuRef={accountMobileRef}
                onLogout={onLogout}
              />
            ) : (
              <NavLink
                to="/auth"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                onClick={onNavigate}
              >
                Sign in
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
