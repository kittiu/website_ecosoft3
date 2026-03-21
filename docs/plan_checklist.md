# Ecosoft Website v3 — Build Checklist

> Mark tasks with `[x]` when done. Tell me which task(s) to execute next.

---

## Phase 1 — Core Pages

- [x] 1.0 Scaffold Astro + vanilla CSS theme (copied from ecosoft2)
- [x] 1.1 Update `index.astro` — full home page per blueprint (all 10 sections)
- [x] 1.2 Update `BaseLayout.astro` — new nav structure (Solutions dropdown, updated links)
- [x] 1.3 `solutions/erp-odoo.astro`
- [x] 1.4 `solutions/erp-erpnext.astro`
- [x] 1.5 `solutions/pricing.astro`
- [x] 1.6 `contact.astro`
- [x] 1.7 `book-demo.astro`

---

## Phase 2 — Why Ecosoft

- [x] 2.1 `why-ecosoft/index.astro` — hub page
- [x] 2.2 `why-ecosoft/our-story.astro`
- [x] 2.3 `why-ecosoft/our-approach.astro` — 5-step process timeline
- [x] 2.4 `why-ecosoft/why-open-source.astro`
- [x] 2.5 `why-ecosoft/oca-membership.astro`
- [x] 2.6 `why-ecosoft/our-team.astro`
- [x] 2.7 `why-ecosoft/careers.astro`

---

## Phase 3 — Solutions (remaining)

- [x] 3.1 `solutions/index.astro` — hub page
- [x] 3.2 `solutions/government-erp.astro`
- [x] 3.3 `solutions/bi-dashboard.astro`
- [x] 3.4 `solutions/automation.astro`
- [x] 3.5 `solutions/frappe-apps.astro`

---

## Phase 4 — Industries

- [x] 4.1 `industries/manufacturing.astro`
- [x] 4.2 `industries/government.astro`
- [x] 4.3 `industries/trading.astro`
- [x] 4.4 `industries/professional-services.astro`
- [x] 4.5 `industries/technology.astro`
- [x] 4.6 `industries/healthcare.astro`

---

## Phase 5 — Case Studies

- [x] 5.1 Content collection schema (`src/content.config.ts` — updated for Astro v6)
- [x] 5.2 Case study markdown — EOS Orbit
- [x] 5.3 Case study markdown — NSTDA
- [x] 5.4 Case study markdown — Raja Cycle
- [x] 5.5 Case study markdown — Lamphun Plastpack
- [x] 5.6 Case study markdown — Square Panel Systems
- [x] 5.7 `case-studies/index.astro` — filterable grid
- [x] 5.8 `case-studies/[slug].astro` — dynamic template
- [x] 5.9 `case-studies/video-testimonials.astro`

---

## Phase 6 — Resources

- [x] 6.1 `resources/blog/index.astro`
- [x] 6.2 `resources/blog/[slug].astro`
- [x] 6.3 `resources/faq.astro` — accordion
- [x] 6.4 `resources/odoo-vs-erpnext.astro` — comparison table
- [x] 6.5 `resources/guides.astro` — gated PDF downloads
- [x] 6.6 `resources/modules.astro`
- [x] 6.7 `resources/webinars.astro`

---

## Phase 7 — Conversion & Utility

- [x] 7.1 `erp-readiness-assessment.astro` — multi-step form
- [x] 7.2 `support.astro`
- [x] 7.3 `404.astro`

---

## CSS Extensions (add to `public/styles/global.css`)

- [x] C.1 `.solutions-grid` — 3×2 card grid
- [x] C.2 `.industry-pills` — horizontal pill row
- [x] C.3 `.case-study-card` + `.case-study-filters`
- [x] C.4 `.cta-strip` — full-width 2-column bottom CTA
- [x] C.5 `.pricing-table` — 3-tier comparison table
- [x] C.6 `.comparison-table` — Odoo vs ERPNext
- [x] C.7 `.faq-accordion` — expandable accordion
- [x] C.8 `.timeline-steps` — numbered step flow
- [x] C.9 `.guide-card` — gated download card

---

## Post-Build

- [x] P.1 Add Customers page + nav/footer links (`/customers`)
- [x] P.2 Add Blog + Resources dropdown to nav; Blog in footer
- [x] P.3 Add Industries dropdown to nav (6 industries)
- [x] P.4 Update footer — added Industries and Resources columns
- [x] P.5 NXPO case study markdown + dynamic page at `/case-studies/nxpo`
