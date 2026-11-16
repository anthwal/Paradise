# Prototype Decisions Log

| # | Decision | Why | Revisit when |
|---|---|---|---|
| 1 | A single `index.html` with hash routing (`#/services/gates`) | Opens by double-click from a folder, USB stick or zip. No server needed. | Production (real URLs) |
| 2 | Vanilla HTML/CSS/JS, no libraries | Brief: no npm, no dev server. Fewer moving parts. | — |
| 3 | Fonts embedded as base64 in `assets/css/fonts.css` | Chrome blocks web-font files loaded over `file://`. Embedding guarantees the typography renders offline. | Production (serve the woff2 files) |
| 4 | Content (services, projects, FAQs, captions) defined in `assets/js/app.js` data arrays | One place to edit copy after client feedback | Production CMS/content files |
| 5 | Thumbnails upscaled 3× and shown at moderate sizes (blade hero, split heroes, grids). No full-bleed photo hero. | Source images are ~240 px. Full-bleed would look soft. | When originals arrive. A full-bleed hero option becomes viable. |
| 6 | Six service pages | Each is backed by a photo album or set of photos | Client confirms or adds services |
| 7 | No gate automation page | Not evidenced | Client confirms |
| 8 | Placeholders styled as small "To confirm" tags and "For client input" panels | Brief: never invent facts. Placeholders must still look intentional in a client presentation. | Replace with confirmed content |
| 9 | "Review notes" overlay (off by default) | Lets the client see verified vs proposed vs pending content without exposing notes in the normal view | Remove before production |
| 10 | Form submission opens a demo modal. Nothing is sent or stored. Uploaded photos stay in the browser. | Brief | Production: server action + email |
| 11 | `noindex` meta tag | Prevents accidental indexing if the prototype is ever hosted | — |
| 12 | Project "Location" shown as "To confirm" | No locations verified | Client supplies suburbs |
| 13 | Region "Gold Coast" used in copy | Every public listing places the business on the Gold Coast | Client confirms |
| 14 | The Next.js scaffold created in an earlier planning step (`src/`, `package.json` at project root) was left untouched | Brief: preserve existing files, and don't build production yet | Production phase |

## Recommended future production architecture (documented only, not implemented)
Next.js (App Router) + TypeScript + Tailwind, statically generated pages with real URLs, typed content files or a light CMS, `next/image` with AVIF/WebP, server-side form handling (Zod validation, spam protection, transactional email), LocalBusiness JSON-LD with verified NAP details, sitemap and robots, GA4 behind cookie consent, Vercel hosting. See `docs/08-technical-architecture.md`.
