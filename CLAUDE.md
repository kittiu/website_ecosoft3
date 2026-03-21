# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
npm run astro    # Run Astro CLI (astro add, astro check, etc.)
```

No test or lint commands are configured.

## Architecture

**Astro 6 static site** — zero JavaScript frameworks, no backend, no database.

- `src/pages/` — File-based routing. Every `.astro` file becomes a page. Dynamic routes use `[slug].astro`.
- `src/layouts/BaseLayout.astro` — Single shared layout wrapping all pages (header, nav, footer, meta tags).
- `src/content/` — Markdown content for blog posts and case studies, managed via Astro Content Layer API.
- `src/content.config.ts` — Schema definitions for both content collections (`blog`, `case-studies`).
- `public/styles/global.css` — All site styling (46KB). No CSS framework — vanilla CSS only.
- `public/images/` — All image assets (logos, blog images, customer logos).
- `docs/` — Internal planning docs: `plan.md` (sitemap), `ecosoft_website3_blueprint.md` (content guide per page).

**TypeScript path alias:** `@layouts/*` → `src/layouts/*`

## Content Collections

**Blog** (`src/content/blog/*.md`): Fields — `title`, `date`, `author`, `category`, `description`, `image`, `tags`

**Case Studies** (`src/content/case-studies/*.md`): Fields — `client`, `industry`, `solution`, `size`, `location`, `outcome`, `featured`, `quote`, `quoteAuthor`, `quoteTitle`

Dynamic pages are rendered from these collections via `[slug].astro` files in the corresponding `src/pages/` subdirectory.

## Key Structural Notes

- **No environment variables** — everything is static/hardcoded.
- **No JavaScript bundles** — the build output is pure HTML + CSS.
- Content for each page is documented in `docs/ecosoft_website3_blueprint.md` — check this before adding or editing page copy.
- `docs/plan.md` is the authoritative sitemap with all routes and SEO meta descriptions.
