# 10 — Development Plan

| Phase | Owner agents | Output | Status |
|---|---|---|---|
| 1 Discovery | business-research-analyst, competitor-research-analyst | 01, 02, image inventory | ✅ Done (Facebook and old site not reachable) |
| 2 Strategy | brand-strategist, cro-specialist, seo-specialist | 03, 04, 05, 06, 09 | ✅ Done (draft for approval) |
| 3 UX/UI | creative-director, ui-ux-designer | 07 | ✅ Done (draft for approval) |
| 4 Architecture | nextjs-architect | 08, project scaffold | ✅ Scaffolded (Next 15, TS strict, Tailwind 4) |
| 5 Development | frontend-developer, marketing-copywriter | Working site | ⏳ After approval |
| 6 QA | qa-engineer, performance-accessibility-engineer | 11-qa-report.md | ⏳ |
| 7 Production readiness | nextjs-architect | 12-production-deployment.md | ⏳ |

## Phase 5 build order
1. Tokens, fonts, layout, header/footer, sticky CTA
2. Content files (site, services, projects, images, FAQs)
3. Home → service template → projects and lightbox → about, builders, contact
4. Server action form + email + thank-you
5. SEO: metadata, JSON-LD, sitemap, robots, OG images
6. Consent banner + GA4 events
7. 404, privacy, favicon

## Execution model
Sequential build by the main agent (shared design system; parallel agents would conflict on the same files), then **independent** QA and accessibility review by separate agents in parallel.

## Blockers
- **Full-resolution photos** (the screenshot thumbnails are ~240 px and unusable on a premium site).
- Phone, email, address, QBCC licence (needed for the header, footer, schema and form routing).
