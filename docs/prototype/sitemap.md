# Sitemap (as built in the prototype)

The prototype is a single HTML file with hash-based page views, so it works when opened directly from disk.

```
Home                                #/
Services                            #/services
  Custom Gates                      #/services/gates
  Slat Fencing & Infill Panels      #/services/slat-fencing
  Privacy Screens & Awnings         #/services/screens-awnings
  Pool Fencing                      #/services/pool-fencing
  Balustrades                       #/services/balustrades
  Custom Fabrication                #/services/custom-fabrication
Projects                            #/projects   (?cat=… filters, ?story=… jumps to a project)
About                               #/about
FAQ                                 #/faq
Contact / Request a Quote           #/contact    (?service=… pre-selects the service)
404                                 any unknown route
```

Production URLs would drop the `#` (e.g. `/services/pool-fencing`).

## Page structures

**Home:** hero (headline, CTAs, 3 evidence facts, blade gallery) → proof strip → intro statement → 6 service tiles → featured projects (dark) → Why Paradise (4 reasons, sticky image) → finishes → process (dark) → reviews (verified-only slots) → service area → final CTA → footer.

**Service page (×6):** breadcrumb → headline, summary, CTAs → 3-image hero (lightbox) → sticky "On this page" nav and quote card → overview and applications → options → examples gallery → design considerations → FAQs → related services → CTA.

**Services overview:** hero → 6 service tiles → "What would you like to do?" chooser → custom-work CTA.

**Projects:** hero → 4 project stories (scope, style, finish, location to confirm) → filterable gallery of 45 photos with lightbox.

**About:** hero → photo collage → "Our story" (client input block) → capabilities table → approach and values → CTA.

**FAQ:** search, topic filter, 17 questions in 5 groups. Unconfirmed answers are marked "To confirm".

**Contact:** 5 required fields, property type, description, photo upload, demo submission. Sidebar with contact details (to confirm), what happens next, and what to include.
