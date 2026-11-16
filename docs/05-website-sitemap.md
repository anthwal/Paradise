# 05 — Website Sitemap

```
/                                   Home
/services                           Services overview
  /services/gates                   Custom Gates (sliding, swing, pedestrian)
  /services/slat-fencing            Slat Fencing & Infill Panels
  /services/privacy-screens-awnings Privacy Screens & Awnings
  /services/pool-fencing            Pool Fencing (glass & aluminium)
  /services/balustrades             Balustrades (aluminium & glass)
  /services/custom-fabrication      Custom Fabrication & Enclosures
/projects                           Project portfolio (filterable)
  /projects/[slug]                  Project detail (only for multi-photo projects)
/builders-commercial                Builders & Commercial (B2B pathway)
/about                              About
/contact                            Contact & quote form
/privacy                            Privacy policy
/thank-you  (noindex)               Form success / conversion page
404                                 Custom not-found
```

Deliberately excluded: separate suburb landing pages (thin content risk), a blog (no content supply yet; revisit later), "Gate Automation" (unconfirmed).

## Homepage wireframe (top → bottom)

1. **Header:** wordmark · Services ▾ · Projects · Builders & Commercial · About · Contact · [phone] · **Request a Quote**
2. **Hero (full-bleed photo, slat reveal):** eyebrow "Gold Coast Fabrication & Fencing" · H1 "Gates, fencing & screens, made to measure." · subcopy · [Request a Quote] [View Our Projects]
3. **Proof strip:** Residential & commercial · Made to measure · Glass & aluminium · Gold Coast (confirmed items only)
4. **Services:** 6 large photo tiles in an editorial asymmetric grid, each linking to its service page
5. **Featured projects:** horizontal scroll on mobile, 3-up on desktop; "See all projects"
6. **Why Paradise:** 4 pillars beside a tall image
7. **Process:** 4 numbered steps (Enquiry → Measure & design → Fabricate → Install)
8. **Builders & commercial band:** dark section with a façade screen photo and B2B CTA
9. **Reviews:** only if confirmed; otherwise a Facebook link
10. **Service area:** Gold Coast text block
11. **Final CTA:** form teaser and phone
12. **Footer:** NAP, services, links, licence, socials

## Service page template
Hero (photo + H1 + CTA) → intro → options/types → gallery (from inventory) → applications → why us → process → FAQs (with JSON-LD) → related services → CTA with pre-selected service.
