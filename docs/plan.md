# Ecosoft Website v3 — Site Reference

> **Theme:** Vanilla CSS design system from `website_ecosoft2` (global.css + BaseLayout.astro)
> **Framework:** Astro 6 (static output), no JS framework, no Tailwind
> **Build status:** ✅ 50 pages — 0 errors

---

## Sitemap (as built)

```
/                                    Home
/customers                           Customers (all clients + featured)

/why-ecosoft                         Why Ecosoft (hub)
  /why-ecosoft/our-story             Our Story
  /why-ecosoft/our-approach          Our Approach (5-step process)
  /why-ecosoft/why-open-source       Why Open Source
  /why-ecosoft/oca-membership        OCA Membership & Contributions
  /why-ecosoft/our-team              Our Team
  /why-ecosoft/careers               Careers

/solutions                           Solutions (hub)
  /solutions/erp-odoo                ERP Implementation — Odoo
  /solutions/erp-erpnext             ERP Implementation — ERPNext
  /solutions/government-erp          Government ERP
  /solutions/bi-dashboard            Business Intelligence Dashboard
  /solutions/automation              Workflow Automation
  /solutions/frappe-apps             Custom Frappe Applications
  /solutions/pricing                 Pricing & Packages

/industries/manufacturing            Manufacturing
/industries/government               Government & Public Sector
/industries/trading                  Trading & Distribution
/industries/professional-services    Professional Services
/industries/technology               Technology & R&D
/industries/healthcare               Healthcare

/case-studies                        Case Studies Index (JS-filtered grid)
  /case-studies/[slug]               Individual Case Study (dynamic)
  /case-studies/video-testimonials   Video Testimonials

/resources/blog                      Blog Index
  /resources/blog/[slug]             Blog Post (dynamic)
  /resources/faq                     FAQ (native <details> accordion)
  /resources/odoo-vs-erpnext         Odoo vs ERPNext Comparison
  /resources/guides                  ERP Guides (gated downloads)
  /resources/modules                 Open Source Modules Library
  /resources/webinars                Webinars & Events

/contact                             Contact & RFQ Form
/book-demo                           Book a Demo
/erp-readiness-assessment            Free ERP Readiness Assessment (multi-step form)
/support                             Support Plans
/404                                 404 Not Found
```

**Total: 50 static pages**

---

## Navigation (as built)

```
Why Ecosoft ▾
  Overview
  Our Story
  Our Approach
  Why Open Source
  OCA Membership
  Our Team
  Careers

Solutions ▾
  ERP — Odoo
  ERP — ERPNext
  Government ERP
  BI Dashboard
  Automation
  Frappe Apps
  Pricing

Industries ▾
  Manufacturing
  Government
  Trading
  Professional Services
  Technology
  Healthcare

Customers                    → /customers

Resources ▾
  Blog
  FAQ
  Odoo vs ERPNext
  Guides
  Webinars
  Modules

[🌙 dark mode] [TH lang]    Contact (CTA button)
```

---

## File Structure (as built)

```
src/
├── content.config.ts              Astro v6 content collections (glob loader)
├── layouts/
│   └── BaseLayout.astro           Shared layout: header, nav, footer, scripts
├── pages/
│   ├── index.astro                Home (10 sections)
│   ├── customers.astro            All clients page
│   ├── contact.astro              RFQ form
│   ├── book-demo.astro            Demo booking
│   ├── erp-readiness-assessment.astro  5-step readiness form
│   ├── support.astro              Support plans
│   ├── 404.astro                  Not found
│   ├── why-ecosoft/
│   │   ├── index.astro
│   │   ├── our-story.astro
│   │   ├── our-approach.astro
│   │   ├── why-open-source.astro
│   │   ├── oca-membership.astro
│   │   ├── our-team.astro
│   │   └── careers.astro
│   ├── solutions/
│   │   ├── index.astro
│   │   ├── erp-odoo.astro
│   │   ├── erp-erpnext.astro
│   │   ├── government-erp.astro
│   │   ├── bi-dashboard.astro
│   │   ├── automation.astro
│   │   ├── frappe-apps.astro
│   │   └── pricing.astro
│   ├── industries/
│   │   ├── manufacturing.astro
│   │   ├── government.astro
│   │   ├── trading.astro
│   │   ├── professional-services.astro
│   │   ├── technology.astro
│   │   └── healthcare.astro
│   ├── case-studies/
│   │   ├── index.astro            Filterable grid (JS filter by industry/solution)
│   │   ├── [slug].astro           Dynamic — rendered from content collection
│   │   └── video-testimonials.astro
│   └── resources/
│       ├── blog/
│       │   ├── index.astro
│       │   └── [slug].astro       Dynamic — rendered from content collection
│       ├── faq.astro
│       ├── odoo-vs-erpnext.astro
│       ├── guides.astro
│       ├── modules.astro
│       └── webinars.astro
├── content/
│   ├── blog/                      8 markdown posts (copied from ecosoft2)
│   └── case-studies/              6 markdown files (see below)
public/
├── styles/global.css              Vanilla CSS — copied + extended from ecosoft2
├── images/                        All images from ecosoft2
└── favicon.png
```

---

## Content Collections

### Blog (`src/content/blog/`) — 8 posts
- `a-new-team-lead.md`
- `eos-orbit.md`
- `erpnext-deposit-invoice.md`
- `erpnext-for-sme-manufacturing.md`
- `lpp-new-erp.md`
- `move-to-opensource-erp.md`
- `select-odoo-partner.md`
- `what-make-erpnext-great-erp.md`

### Case Studies (`src/content/case-studies/`) — 6 files
| File | Client | Industry | Platform | Featured |
|------|--------|----------|----------|----------|
| `eos-orbit.md` | EOS Orbit | Technology | ERPNext | ✅ |
| `nstda.md` | NSTDA | Government | Odoo | ✅ |
| `nxpo.md` | NXPO | Government | Odoo | — |
| `raja-cycle.md` | Raja Cycle | Manufacturing | Odoo | — |
| `lamphun-plastpack.md` | Lamphun Plastpack | Manufacturing | ERPNext | — |
| `square-panel-systems.md` | Square Panel Systems | Manufacturing | Odoo | — |

---

## Content Collection Schema (`src/content.config.ts`)

### blog
```ts
title: z.string()
date: z.coerce.date()
author: z.string().default('Ecosoft Team')
category: z.string()
description: z.string()
image: z.string().optional()
tags: z.array(z.string()).optional()
```

### case-studies
```ts
client: z.string()
industry: z.string()
solution: z.string()
size: z.string()
location: z.string().default('Thailand')
outcome: z.string()
featured: z.boolean().default(false)
quote: z.string()
quoteAuthor: z.string()
quoteTitle: z.string()
```

---

## Sub-navigation Bars (`.subpage-nav`)

Each section has a sticky sub-nav showing all sibling pages with `aria-current="page"` on the active link.

| Section | Pages in sub-nav |
|---------|-----------------|
| Why Ecosoft | Overview · Our Story · Our Approach · Why Open Source · OCA Membership · Our Team · Careers |
| Solutions | ERP–Odoo · ERP–ERPNext · Government ERP · BI Dashboard · Automation · Frappe Apps · Pricing |
| Industries | Manufacturing · Government · Trading · Professional Services · Technology · Healthcare |

---

## CSS Extensions (added to `public/styles/global.css`)

New classes appended beyond the ecosoft2 base:

- `.cards-grid-3`, `.solution-card`
- `.industry-pills`, `.industry-pill`
- `.case-study-featured`, `.case-studies-grid`, `.case-study-card`, `.case-study-card-tags`
- `.case-study-filters`, `.filter-btn`, `.filter-btn--active`
- `.tag`, `.tag--industry`
- `.cta-strip`, `.cta-strip-grid`, `.btn-white`, `.btn-teal-outline`
- `.pricing-table`, `.pricing-note`
- `.timeline`, `.timeline-step`, `.timeline-step-number`, `.timeline-step-body`
- `.subpage-nav`, `.subpage-nav-inner`
- `.team-grid`, `.team-card` (+ `-avatar`, `-name`, `-role`, `-bio`, `-tags`)
- `.job-list`, `.job-card`, `.job-tag`, `.values-grid`, `.value-card`
- `.faq-group`, `.faq-item`, `.faq-question`, `.faq-chevron`, `.faq-answer`
- `.guides-grid`, `.guide-card`, `.guide-card-icon`, `.guide-card-body`
- `.webinars-grid`, `.webinar-card`, `.webinar-card-meta`
- `.step-form-progress`, `.step-dot`, `.step-dot--active`, `.step-panel`, `.step-panel--active`

---

## Key Design Tokens (from global.css)

```css
--accent: #f97316        /* orange — primary CTAs */
--blue:   #2563eb        /* blue — links */
--bg-card-blue: #eff6ff  /* light blue card bg */
--border-blue: #dbeafe   /* blue card border */
--green:  #16a34a        /* success / checkmarks */
```

Dark mode via `html[data-theme="dark"]` — toggled by JS in BaseLayout, persisted in `localStorage`.

---

## Technical Notes

- **Astro v6** — uses Content Layer API with `glob` loader (not legacy `type: 'content'`)
- **Content collection entries** use `.id` not `.slug` in Astro v6
- **`render(entry)`** imported from `astro:content` (not `entry.render()`)
- **TypeScript path alias** `@layouts/*` → `src/layouts/*` (configured in `tsconfig.json`)
- **No JS framework** — all interactivity is vanilla JS inline in `<script is:inline>` or page `<script>` blocks
- **Static output** — `astro.config.mjs` uses plain `defineConfig({})`
