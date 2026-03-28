function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

export default function Alert({ variant = 'success', children, className }) {
  const vClass = variant === 'success' ? 'alert-success' : 'alert-error'
  return <div className={cx('alert', vClass, className)}>{children}</div>
}
