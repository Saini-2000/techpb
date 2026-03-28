function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

export default function Card({ children, className, padded = true, ...props }) {
  return (
    <div className={cx('card', padded ? 'card-pad' : '', className)} {...props}>
      {children}
    </div>
  )
}
