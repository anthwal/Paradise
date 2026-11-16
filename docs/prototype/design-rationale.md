# Design Rationale

| Decision | Rationale | Evidence / principle |
|---|---|---|
| **Split hero with a "blade gallery"** of five vertical photo strips that expand on hover, tap or focus | Shows five types of real work in the first viewport without a carousel. The strips echo blade fencing. It also suits the low-resolution source photos better than a full-bleed hero. | Visual proof first. Cognitive ease (Kahneman). Brand motif. |
| Headline "The metalwork that finishes the house." | Customer-centred outcome (StoryBrand). Concrete, not superlative. | Ogilvy: specific beats boastful |
| One primary CTA wording, "Request a quote", everywhere | Consistency. Lowers decision effort. | Cialdini (consistency). NN/g. |
| Proof strip of 4 evidenced facts | Fast reassurance using only verified facts | Avoids unverified claims |
| Six service tiles in an asymmetric editorial grid (7/5, 5/7, 6/6) | Premium, magazine-like rhythm. Avoids a template-looking card grid. | Creative direction |
| "Whole frontages, not just a gate." project section on a dark band | Positions the client's distinctive strength (coordinated frontages) | Dunford / Ries & Trout |
| Sticky "Why" image that changes per reason | Pairs each claim with photographic evidence | Made to Stick: credible, concrete |
| Finishes swatches from observed colours | Answers a common question and helps visualisation | Reciprocity, reduced effort |
| Dark process section with large numerals | Removes uncertainty about what happens next | Risk reduction |
| Review slots instead of invented testimonials | ACCC guidance. Credibility through honesty. | Pratfall effect (Shotton) |
| Service pages with "Design considerations" | Useful advice before asking for anything | Reciprocity |
| Goal-based chooser on Services | Customers think in goals ("fence a pool"), not product names | Choice architecture |
| Project stories with scope, style and finish | Gives a gallery context and believability | Made to Stick: stories |
| Short form, 5 required fields, optional photo upload, progress bar | Reduces friction. Photos improve quote accuracy. | Baymard |
| Sticky mobile Call / Quote bar | Many Australians prefer to call tradies from mobile | Top4 research |
| Demo modal on submit | The client sees the full journey. Nothing is sent. | Brief requirement |
| **Review notes** toggle (bottom-left, or press R) | Lets you and the client see which content is verified, proposed or awaiting confirmation, without cluttering the default view | Brief: distinguish verified from proposed |
| Squared corners (2 px), hairline rules, no shadows | Architectural precision. Avoids the generic rounded-card look. | Creative direction |
| Embedded fonts, no CDNs, relative paths | Works offline from a USB stick or email attachment | Brief requirement |

## Interaction inventory
Desktop mega menu (hover or click, Escape to close) · mobile drawer with services accordion · hash routing with page fade · smooth in-page scrolling · hero blade gallery (auto-advances, pauses on hover or focus, off with reduced motion) · reveal-on-scroll · service-page section highlighting · gallery filters with counts and URL sync · lightbox (keyboard, swipe, focus return) · FAQ search and topic filter · accordions · service chooser · form validation (inline, on blur, on submit) · drag-and-drop photo upload with previews · demo submission modal · placeholder feedback toasts for Call/Email · sticky header · back to top · sticky mobile CTA · review notes mode.

## Accessibility
Skip link · landmarks · one H1 per view · focus moves to the H1 on navigation · visible focus rings · Escape closes overlays · focus trapped in the lightbox, modal and drawer · labelled inputs with `aria-invalid` and error text · `aria-live` status messages · `prefers-reduced-motion` respected · text contrast ≥ 4.5:1.
