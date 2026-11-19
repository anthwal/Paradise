# 01 — Shopify Integration: Approach and Decisions

Status: **proposed**, waiting on the product owner's decisions in section 6.
Researched: 2026-11-18. Shopify changes plans and features often; re-check the items marked *(verify)* in the store admin before launch.

## 1. Goal
Add a shop to the site. Products are listed on our pages, in our design. Cart, checkout, payment and customer accounts use Shopify's own systems, so there is as little as possible for us to build and maintain. Shopify branding is kept out wherever Shopify allows it, and every page sits on our domain where it can.

## 2. Approach: headless storefront (Storefront API)
| Part | Who runs it | Where it lives | Styled by |
|---|---|---|---|
| Shop listing, product pages | This Next.js app, data from the Shopify Storefront API | `paradisefabricationfencing.com.au/shop`, `/shop/[handle]` | This app (docs 04/07), fully |
| Cart | Shopify (the cart is stored by Shopify through the Cart API); our UI shows it | `/cart` on our domain | This app, fully |
| Checkout, payment, order status | Shopify-hosted checkout | `checkout.paradisefabricationfencing.com.au` | Shopify's checkout editor (logo, colours, fonts) |
| Customer login and accounts | Shopify-hosted new customer accounts | `account.paradisefabricationfencing.com.au` | The same editor, shared with checkout |
| Order and shipping emails | Shopify notifications | Sent from Shopify | Shopify's email templates (editable on all plans) |

Why this approach:
- **One codebase.** No Shopify theme to build or keep in sync with this site's design.
- **Nothing sensitive in our app.** Payments, card data, passwords and order history stay in Shopify. We only read products and keep a cart ID.
- **Fewest moving parts.** Shopify's hosted checkout and accounts are used as they are, with no checkout code to maintain.

Rejected alternatives:
- **A Shopify theme on a `shop.` subdomain.** It would mean a second design to build and maintain in Liquid, which is the opposite of minimal.
- **The Buy Button channel.** Its cart and product pop-ups are Shopify widgets, with limited styling.
- **Hydrogen.** It's Shopify's own React framework, and a second app. This site is already Next.js.

## 3. What Shopify allows on the cheapest workable plan

### 3.1 Plan
- **Basic is the cheapest workable plan:** about A$56/month, or A$42/month billed annually. Card fees are around 1.7–1.75% + 30c for online domestic cards. Confirm on shopify.com/au.
- **Starter (about A$7/month):** reported as closed to new stores. It's a link-and-social selling plan, not a storefront.
- **Headless channel:** our site reads products through it. Shopify's docs list no plan requirement for it, but community reports say it needs Basic or higher *(verify)*.
- **No Plus needed:** nothing in this approach needs Shopify Plus (from about A$3,000+/month). Section 3.4 lists what Plus adds.

### 3.2 URLs on our domain
- **Shop, product pages and cart:** on our domain, at our own paths.
- **Checkout:** can't be `/checkout` on our domain. Shopify hosts it. It can run on a subdomain we own, such as `checkout.paradisefabricationfencing.com.au`, connected to Shopify and set as the Shopify store's primary domain. Shopify's own Hydrogen guide documents this setup (subdomain, primary domain type). Shopify's docs don't say Plus is required. One vendor blog claims a custom checkout domain is Plus-only, but no Shopify source says so *(verify on Basic during setup)*.
- **Customer accounts:** officially supported on a subdomain such as `account.paradisefabricationfencing.com.au`. It's set up in Settings → Customer accounts, with a CNAME to `shops.myshopify.com`, then set as primary for customer accounts. Shopify's page states no plan restriction.
- **What the visitor sees:** the shop is on our main domain, and checkout and accounts are on our subdomains. No `myshopify.com` or `shopify.com` address shows in normal use.

### 3.3 Shopify branding
| Where | What we can do on Basic |
|---|---|
| Checkout, order status, customer accounts | Store name in the header, our logo, colours, and fonts from Shopify's font list (no custom font upload). Background images in the header and main area are no longer allowed (since 2026-02-05). |
| "Shop Pay" button and "Sign in with Shop" | Shown only if Shop Pay is turned on. Turning Shop Pay off removes this Shop branding; the cost is losing one-tap Shop Pay buyers. |
| "Powered by Shopify" / Shopify marks in the checkout footer | Unclear. Blogs disagree, and Shopify's docs don't say *(verify in the store's checkout preview)*. If present on Basic, only Plus removes it. |
| Emails | Shopify's notification templates are editable, so Shopify mentions can be removed from them. |
| Card fields | Shopify Payments shows its own secure card fields. These can't be restyled beyond the checkout colours. |

### 3.4 What Plus would add (not recommended now)
- **Checkout Branding API:** corner radius, fine-grained styling and full control over branding.
- **Checkout UI extensions:** custom content inside the checkout steps.
- **Branding removal:** removing any remaining Shopify branding.
- **Custom sign-in:** a custom identity provider for customer accounts.
- **Cost:** none of this is needed for a working, on-brand shop, and Plus costs many times Basic.

## 4. How it fits this codebase
- **Shop data:** fetched on the server with the Storefront API (GraphQL `fetch`, no SDK needed). It's cached with `"use cache"` and refreshed through a Shopify webhook, or after a set time.
- **Cart:** the cart ID lives in a cookie. Adding, updating and removing items use Server Actions that call the Storefront Cart API.
- **Checkout:** the cart page's "Checkout" button links to the cart's `checkoutUrl`, which points to the checkout subdomain.
- **Customer accounts:** a header "Account" link points to the account subdomain. We don't use the Customer Account API: Shopify's hosted account pages are the minimal option.
- **Types:** shop types go in `types/shop.ts`, following the project convention.
- **Styling:** the new pages use the existing components and tokens, with no new design.

## 5. Things to maintain afterwards
- **Shopify subscription and payouts:** the client's admin work.
- **Products, prices, stock and shipping rates:** managed in the Shopify admin. The site updates from the API.
- **Storefront API version:** Shopify releases a version each quarter, and each is supported for about a year. Bump the version once a year.
- **Domain records:** two CNAME records for `checkout.` and `account.`.

## 6. Decisions needed from the product owner
1. **What will be sold:** products, variants, rough number of items.
2. **Plan:** Basic, billed monthly or annually.
3. **Shop Pay:** keep it (more conversions, with Shop branding) or turn it off (no Shop branding).
4. **Domain:** confirm the domain (docs/01, question 12) and who manages its DNS.
5. **Delivery:** pick-up, local delivery or shipping, and the shipping rates.
6. **Policies:** refund, shipping, privacy and terms. Shopify shows these in checkout, and the site's draft privacy policy needs updating for online orders.
