export default function AuthCard({ title, subtitle, children, headerExtra = null }) {
  return (
    <div className="auth-outer">
      <div className="auth-card glass">
        {headerExtra}
        <h2 className="auth-title">{title}</h2>
        {subtitle ? <div className="auth-subtitle">{subtitle}</div> : null}
        {children}
      </div>
    </div>
  )
}
