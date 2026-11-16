# Prototype QA Report

Environment: Chromium (Playwright, headless), opened via `file://`. Firefox and Safari were not available in the build environment, so open the prototype in both before presenting (see "Not tested").

## 1. Automated route checks: 12 views × 6 widths (1440, 1280, 1024, 768, 390, 375)
- ✅ No horizontal overflow on any view at any width
- ✅ All images load (checked `naturalWidth` after scrolling every view)
- ✅ No JavaScript errors or console errors
- ✅ Every view has a unique document title and exactly one H1
- ✅ Unknown routes show the custom 404 view

## 2. Interaction tests: 40 checks, all passing
Mega menu (click, hover, Escape, link) · hero blades (hover, click-through) · service page section nav (smooth scroll) · accordion open and close · lightbox (open, arrow keys, Escape, focus return, mobile swipe-ready) · gallery filters (counts, URL sync, deep link) · services chooser · FAQ search, empty state, topic filter · contact (service pre-selection from CTA, 5 inline errors on empty submit, focus to first error, email blur validation, property chips, photo upload preview, progress bar, demo modal with "no enquiry has been sent", reset) · Call placeholder toast · review notes (R key and button) · back to top · skip link first in tab order · mobile drawer (open, services accordion, route and close) · sticky mobile CTA · mobile lightbox.

## 3. Issues found and fixed during QA

| # | Issue | Severity | Fix |
|---|---|---|---|
| 1 | Web fonts blocked when opened from `file://` (Chrome CORS) | High | Fonts embedded as base64 in `fonts.css` |
| 2 | One image path pointed to the wrong folder | High | Moved to `images/gates/` |
| 3 | 46 px horizontal scroll on mobile contact page (hidden radio inputs) | High | Radios positioned inside their container |
| 4 | Mega menu: hover opened it, then the click immediately closed it | Medium | Click after hover keeps it open |
| 5 | Focus jumped to the H1 on first load, skipping the skip link | Medium | Focus moves only on navigation |
| 6 | Programmatically focused H1 showed an outline box | Low | Outline removed for `tabindex="-1"` focus only |
| 7 | Gallery counter included service-page photos (54 instead of 45) | Medium | Counter scoped to the projects gallery |
| 8 | Sixth service tile orphaned on its own row | Medium | Grid rebalanced into 7/5, 5/7, 6/6 |
| 9 | Name and phone inputs misaligned | Low | `align-content: start` on fields |
| 10 | Review placeholder tag stretched full width | Low | Aligned to start |
| 11 | Map label overlapped the marker | Low | Label moved |
| 12 | Lightbox backdrop translucent (page visible behind it) | Low | Solid backdrop |
| 13 | Review-notes pill covered content on phones | Low | Compact round button under 768 px |
| 14 | Service tiles went full-width at 768 px, enlarging low-res photos | Low | Two columns kept down to 560 px |

## 4. Independent review (separate QA agent, report-only, no edits)

The independent reviewer re-tested routes, widths, keyboard and contrast, and audited every customer-facing string against `business-discovery.md`. All findings below were actioned. Both test suites were re-run afterwards: 40/40 interaction checks pass, and there is no overflow, broken image or JS error at any width.

| # | Severity | Finding | Resolution |
|---|---|---|---|
| 1 | High | Installation, site measuring and in-house fabrication stated as fact | Reworded ("designed and made", "our work includes"). "Install" now appears only in the proposed process, which is flagged To confirm. |
| 2 | High | "If it's made from metal or glass, ask us" overstated scope | Replaced with "Have something specific in mind?" plus a neutral custom-projects line |
| 3 | Medium | Some unevidenced claims were tagged "verified" in Review notes | Re-tagged as proposed. Capabilities lead text softened. |
| 4 | Medium | Unevidenced offerings (builder packages, townhouse gates, architects, commercial for custom) | Removed or replaced with evidenced items. Above-ground pools and stairs kept, because the photos show them (pool-03, pool-08, balustrade-02). |
| 5 | Medium | "Aluminium" inferred from the look of photos (screens, pool fencing, balustrade captions) | Captions describe only what is visible ("black framed", "white picket"). Aluminium is kept only for balustrades, where the client's album description states it. |
| 6 | Medium | "Across the Gold Coast" implied a service area | Changed to "on the Gold Coast" |
| 7 | Medium | Pool story implied a compliant enclosure | Phrase removed |
| 8 | Medium | Footer brass button text contrast 2.86:1 | Ink text, 5.72:1 |
| 9 | Medium | Service aside eyebrow contrast 2.69:1 | Brass on ink, 5.72:1 |
| 10 | Low | Soft overstatements ("many", "favourite", "recent", "ready for handover") | Softened |
| 11 | Low | Skipped heading levels on Services, service pages, FAQ and Contact | Headings corrected (visual style unchanged) |
| 12 | Low | ARIA labels on generic divs; unnamed regions | `role="dialog"` / `role="group"`; accordion regions labelled by their buttons |
| 13 | Low | "Why" image swap off-screen when stacked; large soft image | Swap disabled at ≤1024 px; image width capped |
| 14 | Low | Hero strip numbers hard to read on light skies | Solid chip behind each number |
| 15 | Low | Review-notes pill could read as clutter | Now 55% opacity until hover, focus or active |

Passed in the independent review: no US spellings; all placeholders correctly labelled; no invented years, awards, testimonials, warranties or Standards claims; all routes and images load; no dead links; keyboard and overlay behaviour correct; form labelling correct; small-text contrast passes elsewhere.

## Not tested
- Firefox, Safari (macOS/iOS) and Edge in real browsers. The code uses only widely supported features (CSS grid, `aspect-ratio`, IntersectionObserver), but check visually before presenting.
- Real touch devices (swipe was emulated).
- Screen readers (structure and ARIA were reviewed in code only).
