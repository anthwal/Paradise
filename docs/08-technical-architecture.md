# 08 — Technical Architecture

## Stack
| Concern | Choice | Why |
|---|---|---|
| Framework | Next.js 15 App Router, React 19, TypeScript strict | Static generation for all marketing pages; server actions for the form |
| Styling | Tailwind CSS v4 (`@theme` tokens) | Tokens from 04/07 in one place |
| Motion | `motion` | Small, declarative in-view animation |
| Icons | `lucide-react` | Consistent line icons, tree-shaken |
| Validation | `zod` | Shared schema for the form, server-side |
| Email | **Resend** via REST (`RESEND_API_KEY`) | Simple transactional email. If the key is unset, the form logs the enquiry and reports a configuration error rather than failing silently. |
| Spam | Honeypot + minimum fill time + in-memory rate limit; optional Cloudflare Turnstile (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`) | Low friction |
| Analytics | GA4 via `@next/third-parties`, **loaded only after cookie consent** | Australian Privacy Act; good practice |
| Hosting | Vercel (recommended) or any Node host | Zero-config Next.js, image optimisation |
| CMS | None in v1. Typed content in `src/content/*.ts` | No ongoing cost. Move to Sanity/Payload if the client edits often. |

## Folder structure
```
src/
  app/
    layout.tsx  page.tsx  not-found.tsx  sitemap.ts  robots.ts  icon / opengraph-image
    services/page.tsx  services/[slug]/page.tsx
    projects/page.tsx  projects/[slug]/page.tsx
    builders-commercial/  about/  contact/  privacy/  thank-you/
    actions/enquiry.ts             (server action)
  components/  layout/ ui/ sections/ projects/ forms/ analytics/
  content/     site.ts services.ts projects.ts images.ts faqs.ts
  lib/         seo.ts schema.ts analytics.ts validation.ts rate-limit.ts
public/images/projects/  public/images/services/
```

## Content model (TypeScript)
- `SiteConfig`: name, phone, email, address, abn, qbcc, hours, serviceArea, socials. Fields that are `null` are **not rendered** and not added to JSON-LD, so unconfirmed facts never leak.
- `Service`: slug, title, shortTitle, summary, intro, options[], applications[], heroImage, gallery[], faqs[], seo.
- `Project`: slug, title, category[], summary, images[], location?, featured, hasDetailPage.
- `ProjectImage`: id, src, width, height, alt, category, setting.

## Rendering
All pages are statically generated (`generateStaticParams`). The form is a server action. `/thank-you` is `noindex`.

## Environment variables (`.env.example`)
`NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`.

## Images
`next/image` with AVIF/WebP, explicit sizes, `priority` on the hero only, blur placeholders generated at build. The source originals live in `public/images/projects/{id}.jpg` at a maximum of 2400 px on the long edge.
