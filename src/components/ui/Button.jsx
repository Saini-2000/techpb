import { Link } from 'react-router-dom'

function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}) {
  const base = 'btn'
  const variantClass =
    variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-ghost'

  const sizeClass = size === 'sm' ? 'btn-sm' : ''

  const classes = cx(base, variantClass, sizeClass, className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
