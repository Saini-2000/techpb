function SvgShell({ children, title }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className="service-icon"
    >
      {children}
    </svg>
  )
}

export function CodeIcon() {
  return (
    <SvgShell title="Code icon">
      <path
        d="M9 18l-6-6 6-6M15 6l6 6-6 6M14 4l-4 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgShell>
  )
}

export function ShieldIcon() {
  return (
    <SvgShell title="Security icon">
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l1.8 1.8L15.8 9.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgShell>
  )
}

export function CloudIcon() {
  return (
    <SvgShell title="Cloud icon">
      <path
        d="M7 18c-2.21 0-4-1.79-4-4 0-2.09 1.61-3.81 3.65-3.97C7.37 5.91 9.56 4 12.2 4c3.31 0 6 2.69 6 6 0 .33-.03.65-.08.97 1.53.53 2.63 2 2.63 3.73 0 2.21-1.79 4-4 4H7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </SvgShell>
  )
}

export function ChartIcon() {
  return (
    <SvgShell title="Analytics icon">
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M7 14l3-3 3 2 6-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgShell>
  )
}

export function LockIcon() {
  return (
    <SvgShell title="Lock icon">
      <path
        d="M17 11V7a5 5 0 10-10 0v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M19 11H5v10h14V11z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 15v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </SvgShell>
  )
}

export function RocketIcon() {
  return (
    <SvgShell title="Rocket icon">
      <path
        d="M4 20l4-1 9-9-3-3-9 9-1 4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 6l4-4 1 5-5-1z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 15l-1 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </SvgShell>
  )
}

export default function ServiceIcon({ name }) {
  const map = {
    code: CodeIcon,
    security: ShieldIcon,
    cloud: CloudIcon,
    analytics: ChartIcon,
    privacy: LockIcon,
    launch: RocketIcon,
  }
  const Icon = map[name] || CodeIcon
  return (
    <span style={{ color: 'rgba(255,255,255,0.92)' }}>
      <Icon />
    </span>
  )
}
