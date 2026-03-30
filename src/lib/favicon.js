/**
 * Apply site logo as favicon and Apple touch icon (Vite-resolved asset URL).
 * @param {string} href
 */
export function applyFavicon(href) {
  const ensure = (rel, attrs = {}) => {
    let el = document.querySelector(`link[rel="${rel}"]`)
    if (!el) {
      el = document.createElement('link')
      el.rel = rel
      document.head.appendChild(el)
    }
    el.href = href
    Object.entries(attrs).forEach(([k, v]) => {
      el.setAttribute(k, v)
    })
  }

  ensure('icon', { type: 'image/png' })
  ensure('apple-touch-icon')
}
