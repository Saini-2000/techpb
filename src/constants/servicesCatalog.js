/**
 * Shared service definitions for the Services page and homepage highlight.
 * Order matches the Services page; homepage shows the first three.
 */
export const SERVICES_CATALOG = [
  {
    icon: 'code',
    title: 'Web Development',
    description: 'React UI, component systems, and clean front-end engineering.',
  },
  {
    icon: 'cloud',
    title: 'Deploy & Scale',
    description: 'Production deployments, CI/CD workflows, and environment stability.',
  },
  {
    icon: 'security',
    title: 'Security Reviews',
    description: 'Secure patterns, vulnerability mitigation, and threat-informed fixes.',
  },
  {
    icon: 'analytics',
    title: 'Performance Optimization',
    description: 'Speed audits, bundle tuning, and UX responsiveness improvements.',
  },
  {
    icon: 'privacy',
    title: 'Privacy & Compliance',
    description: 'Data-safe UI flows and best practices for handling sensitive inputs.',
  },
  {
    icon: 'launch',
    title: 'Product Launch Support',
    description: 'Polish, QA checks, and release readiness for smooth go-lives.',
  },
  {
    icon: 'code',
    title: 'Design Systems',
    description: 'Reusable components, consistent styling, and maintainable UI rules.',
  },
  {
    icon: 'analytics',
    title: 'UX Iteration',
    description: 'Feedback loops, usability improvements, and measured enhancements.',
  },
]

/** Homepage hero sidebar: Web Development, Deploy & Scale, Security Reviews */
export const SERVICES_HOME_HIGHLIGHT = SERVICES_CATALOG.slice(0, 3)
