# 07 — UI/UX & Design System Specification

Approved direction (Creative Director + UI/UX): **"Editorial workshop"**. The site reads like an architecture magazine about metalwork: big real photography, tight condensed headlines, hairline rules, generous space and one warm accent. The slat motif is the only decorative device.

## Grid & spacing
- Container: max 1320 px, side gutter 16 px (mobile) / 32 px (≥768) / 48 px (≥1280).
- 12-column grid on desktop, 4 on mobile. Section padding is 72 px on mobile and 128 px on desktop.
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

## Breakpoints
`sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`. Design mobile-first.

## Type scale (fluid, clamp)
| Role | Size | Font |
|---|---|---|
| Display (hero H1) | clamp(2.6rem, 6vw, 5.6rem) / 0.95 | Archivo 700, wdth 87 |
| H2 | clamp(2rem, 4vw, 3.5rem) / 1.0 | Archivo 650 |
| H3 | 1.375–1.75rem | Archivo 600 |
| Body L | 1.125rem / 1.65 | Inter 400 |
| Body | 1rem / 1.6 | Inter 400 |
| Eyebrow | 0.78rem, uppercase, +0.14em | Archivo 600 |

## Shape & surface
- Radius: **2 px** on buttons and inputs, **0** on images. This is deliberately un-rounded.
- Borders: 1 px `alloy`. No drop shadows except on the sticky header when scrolled (subtle).
- No gradients except one dark scrim on hero photos for text legibility.

## Components
| Component | Notes |
|---|---|
| `Header` | Transparent over the hero, solid `paper` after scroll. Desktop mega-dropdown for services with thumbnails. Mobile full-screen menu. Focus trapped while open. |
| `Button` | `primary` (ember), `secondary` (ink outline), `ghost-light` (on photo). Min height 48 px. |
| `Eyebrow` | Label with a 3-line slat rule before it. |
| `Hero` | Full-bleed `next/image` with `priority`. Slat-reveal mask animation (CSS, 900 ms). Respects `prefers-reduced-motion`. |
| `ServiceTile` | Image with title bar. Hover zooms the image 1.03 and shows a slat overlay. Whole card is clickable. |
| `ProjectCard` | 4:5 image, category label, title. |
| `ProjectGrid` | Filter chips (All, Gates, Slat Fencing, Screens, Pool, Balustrades, Custom). URL-synced `?category=`. |
| `Lightbox` | Keyboard (←/→/Esc), focus return, swipe on touch. |
| `ProcessSteps` | 4 steps, large numerals in `alloy`. |
| `FAQ` | Native `<details>`. Accessible without JavaScript. |
| `QuoteForm` | Server action, Zod validation, inline errors, honeypot. |
| `StickyMobileCTA` | Bottom bar under 768 px: Call · Request a Quote. Hidden on `/contact`. |
| `CTASection` | Dark `ink` band with headline, 2 buttons and phone. |
| `Footer` | 4 columns on desktop: brand/NAP, services, company, contact. Licence line. |

## Motion
- Library: `motion` (Framer Motion), used only for in-view fade/slide (12 px, 500 ms, ease-out) and the lightbox.
- Never animate layout-shifting properties. All motion is off under reduced motion.

## Accessibility baseline
WCAG 2.2 AA. Skip link, landmarks, one H1 per page, visible 2 px ember focus ring with offset, 44 px touch targets, labelled inputs, `aria-live` form status.
