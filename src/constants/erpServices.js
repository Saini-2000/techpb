/**
 * ERP module catalog: listing, homepage highlights, and detail pages use this source of truth.
 */

export const ERP_SERVICES_FULL = [
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    icon: 'code',
    summary:
      'Plan production with clear bills of material, routings, and work orders. Track shop-floor progress against schedules and keep material usage aligned with inventory.',
    detail: [
      'Manufacturing ERP ties engineering, planning, and execution into one workflow. You define products, BOMs, and operations once—then release work to the floor with confidence that quantities and revisions stay consistent.',
      'Supervisors see what is running, what is delayed, and what is waiting for material. Variance against standards becomes visible early, so you can correct routes, suppliers, or capacity before costs spiral.',
      'When integrated with inventory and sales, manufacturing plans reflect real demand and supply. That reduces overproduction, shortens lead times, and helps you promise realistic delivery dates to customers.',
    ],
  },
  {
    slug: 'crm',
    title: 'CRM',
    icon: 'cloud',
    summary:
      'Capture leads and opportunities in a shared pipeline. Give sales and support a full customer history—calls, emails, orders, and tickets—so every conversation starts with context.',
    detail: [
      'Customer relationship management is about visibility and follow-through. Teams work from one record per account and contact, with stages, owners, and next steps that do not get lost in inboxes.',
      'Forecasting improves when pipeline hygiene is enforced with simple rules: required fields, stage criteria, and reminders. Leaders see where deals stall and which activities correlate with wins.',
      'Connecting CRM to order management avoids duplicate entry and disputes. Quotes become orders; service cases link to shipments—so customers experience one coherent business, not disconnected departments.',
    ],
  },
  {
    slug: 'stock-inventory',
    title: 'Stock Inventory',
    icon: 'analytics',
    summary:
      'See stock by location, batch, and SKU in near real time. Control inward and outward movements with approvals, and use reorder logic so you neither stock out nor tie up cash unnecessarily.',
    detail: [
      'Inventory modules work best when every movement is recorded with a reason and a document. Transfers, adjustments, and cycle counts stay audit-friendly and explain variances clearly.',
      'Multi-location businesses need allocation rules: which warehouse fulfills which channel, and how safety stock is distributed. Good configuration prevents partial shipments and emergency transfers.',
      'Alerts for low stock, slow movers, and expiry (where relevant) turn data into action. Buyers and planners spend less time in spreadsheets and more time on supplier negotiations and assortment decisions.',
    ],
  },
  {
    slug: 'buying',
    title: 'Buying',
    icon: 'security',
    summary:
      'Run purchase requests, approvals, and purchase orders in one place. Compare vendor quotes, track deliveries, and match receipts to invoices so procurement stays controlled and transparent.',
    detail: [
      'Buying starts with need: a requisition tied to a project, production plan, or minimum stock rule. Approvals route by amount or category so policy is applied consistently without slowing routine purchases.',
      'Purchase orders lock price, quantity, and terms. Goods receipt updates inventory and supports three-way matching with accounts payable—reducing duplicate payments and invoice exceptions.',
      'Vendor scorecards built from on-time delivery, quality holds, and price variance help you consolidate spend with reliable partners and negotiate from facts, not anecdotes.',
    ],
  },
  {
    slug: 'selling',
    title: 'Selling',
    icon: 'launch',
    summary:
      'Manage quotations, sales orders, and dispatch from a single sales desk. Pricing rules and credit limits protect margin while your team focuses on closing and fulfilling on time.',
    detail: [
      'Selling connects front office promises to back office execution. Quotes can reserve stock or trigger procurement; order status is visible to sales without chasing operations.',
      'Flexible price lists, discounts, and taxes let you serve different channels and regions without manual overrides. Exceptions are logged so finance can review patterns, not fight fires daily.',
      'Delivery planning and invoicing close the loop. Customers receive accurate documents; revenue recognition and GST or VAT reporting stay aligned with shipments and returns.',
    ],
  },
  {
    slug: 'retail-pos',
    title: 'Retail POS',
    icon: 'analytics',
    summary:
      'Fast point-of-sale billing with barcode support, returns, and store-level stock. Managers get day-end summaries and cash control without reconciling multiple spreadsheets.',
    detail: [
      'Retail POS must be quick at the counter and disciplined in the back office. Screens emphasize speed, shortcuts, and error checks—while every sale updates inventory and payment types in real time.',
      'Returns and exchanges follow policies you define: time windows, restocking fees, and exchange rules. That protects revenue while keeping customer-facing staff empowered within guardrails.',
      'Store analytics highlight bestsellers, basket size, and staff performance. Head office compares locations and rolls out promotions with measurable impact.',
    ],
  },
  {
    slug: 'hrms',
    title: 'HRMS',
    icon: 'privacy',
    summary:
      'Centralize employee records, attendance, leave, and approvals. Give HR and managers self-service tools so routine requests do not bounce across email threads.',
    detail: [
      'Human resource management starts with clean master data: roles, reporting lines, locations, and documents. When changes are workflow-driven, audits and headcount reporting stay trustworthy.',
      'Attendance and leave integrated with payroll reduce disputes. Policies—weekends, holidays, late marks—apply uniformly; exceptions are visible to approvers with comments.',
      'Performance cycles, onboarding checklists, and asset assignments can live beside core HR so employees experience one portal instead of many disconnected tools.',
    ],
  },
  {
    slug: 'payroll',
    title: 'Payroll',
    icon: 'security',
    summary:
      'Process pay runs with structured earnings and deductions. Stay aligned with statutory rules for PF, ESI, TDS, and filings—while employees receive clear payslips every month.',
    detail: [
      'Payroll depends on accurate attendance, approved reimbursements, and locked salary structures. A controlled month-end process—with previews and sign-offs—cuts correction runs and employee anxiety.',
      'Statutory compliance changes over time; configuration-driven rules help you adapt without rewriting spreadsheets. Reports for challans and returns save finance teams hours each month.',
      'Employee self-service for tax declarations, proofs, and reimbursements reduces HR workload and improves data quality before the final pay run.',
    ],
  },
  {
    slug: 'education',
    title: 'Education',
    icon: 'cloud',
    summary:
      'Support admissions, fee collection, timetables, and academic records for schools and institutes. Parents and staff access the right information through role-based portals.',
    detail: [
      'Education ERP reduces administrative load so institutions focus on teaching. Online admissions, document verification, and fee plans replace long queues and manual registers.',
      'Fee dues, receipts, and transport billing integrate with accounting. Scholarships and sibling discounts apply automatically according to rules you publish.',
      'Student information systems track attendance, assessments, and progress. Reports help coordinators spot gaps early and communicate clearly with guardians.',
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: 'analytics',
    summary:
      'Schedule appointments, register patients, and manage billing across OPD and diagnostics. Keep clinical and administrative data organized while respecting privacy and access control.',
    detail: [
      'Healthcare operations need speed and accuracy at the front desk and clarity for billing. Patient registration with unique IDs reduces duplicate records and speeds repeat visits.',
      'Appointment calendars, doctor slots, and queue displays improve patient experience. Integration with basic diagnostics and pharmacy reduces transcription errors.',
      'Role-based access ensures only authorized staff see sensitive information. Audit logs support accountability when records are viewed or updated.',
    ],
  },
  {
    slug: 'hotel-management',
    title: 'Hotel Management',
    icon: 'launch',
    summary:
      'Handle reservations, check-in, housekeeping, and billing in one flow. Front desk and back office share live room status, rates, and guest folios to reduce overbookings and billing disputes.',
    detail: [
      'Hotel systems revolve around room inventory and rate plans. Channel connections and minimum-stay rules help revenue managers balance occupancy and average daily rate.',
      'Housekeeping status tied to front office accelerates turns and improves guest satisfaction. Maintenance tickets for rooms prevent recurring complaints.',
      'F&B posting to guest folios, event banqueting, and AR for corporate accounts give finance a complete picture—without reconciling multiple ledgers at month end.',
    ],
  },
]

/** @param {string} slug */
export function getErpServiceBySlug(slug) {
  return ERP_SERVICES_FULL.find((s) => s.slug === slug) ?? null
}

const HOME_SLUGS = ['manufacturing', 'crm', 'stock-inventory']

/** Top three modules for homepage cards (subset of {@link ERP_SERVICES_FULL}). */
export const ERP_HOME_FEATURES = HOME_SLUGS.map((slug) => getErpServiceBySlug(slug)).filter(Boolean)

/** Legacy list of titles (for sitemaps or quick references). */
export const ERP_SERVICES = ERP_SERVICES_FULL.map((s) => s.title)
