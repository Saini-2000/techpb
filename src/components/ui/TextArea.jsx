export default function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  rows = 6,
  ...props
}) {
  return (
    <div className="field">
      {label ? (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        name={name}
        className="textarea"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        rows={rows}
        {...props}
      />
      {error ? <div className="field-error">{error}</div> : null}
    </div>
  )
}
