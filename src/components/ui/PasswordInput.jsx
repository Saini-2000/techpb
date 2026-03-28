import { useState } from 'react'

function IconEye() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function IconEyeOff() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1 1l22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function PasswordInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  id,
  defaultVisible = false,
  visibleInputType = 'text',
  visibilityHideLabel = 'Hide password',
  visibilityShowLabel = 'Show password',
  ...props
}) {
  const [visible, setVisible] = useState(defaultVisible)
  const inputId = id || name

  return (
    <div className="field">
      {label ? (
        <label className="label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <div className="input-password-wrap">
        <input
          id={inputId}
          name={name}
          type={visible ? visibleInputType : 'password'}
          className="input input-password"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        <button
          type="button"
          className="input-password-toggle"
          onClick={() => setVisible((v) => !v)}
          aria-pressed={visible}
          aria-label={visible ? visibilityHideLabel : visibilityShowLabel}
          tabIndex={0}
        >
          {visible ? <IconEyeOff /> : <IconEye />}
        </button>
      </div>
      {error ? (
        <div className="field-error" id={`${inputId}-error`}>
          {error}
        </div>
      ) : null}
    </div>
  )
}
