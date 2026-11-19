# 03 — Shopify Integration: Implementation Plan

Small, reviewable steps in the same style as the rest of the build. Each step is tested and committed before the next. Steps 1–4 can start with a Shopify **development store** (free, through a Shopify Partner account) before the client's paid store exists. The final setup only changes environment variables.

## Prerequisites
- **Store access:** from 02 sections A–C, either a development store or the client store, its `.myshopify.com` domain and its Storefront API private token.
- **Environment variables** (`.env.local`, never committed; Vercel project settings in production):
  - `SHOPIFY_STORE_DOMAIN`, for example `paradise-fabrication.myshopify.com`
  - `SHOPIFY_STOREFRONT_PRIVATE_TOKEN`
  - `SHOPIFY_STOREFRONT_API_VERSION`, the current stable quarterly version (bumped once a year, see 01 section 5)
- **Packages (Shopify's official ones, for type safety):**
  - `@shopify/storefront-api-client`: a lightweight client for the Storefront API.
  - `@shopify/api-codegen-preset` (dev dependency, with graphql-codegen): generates TypeScript types for each query we write from Shopify's own schema. Query results are therefore typed against the real API, not hand-written types.

  `@shopify/hydrogen-react` isn't needed. It's a full React component kit, and this site already has its own components.

## Steps
1. **Storefront client.** `lib/shopify/shopify.ts` holds one `shopifyFetch()` function. It sends server-side GraphQL requests with the private token, and the token never reaches the browser. Shop types go in `types/shop.ts`.
2. **Shop listing `/shop`.**
   - **Products:** the product grid uses the existing card style and `next/image`, with a Shopify CDN loader (see "API usage and cost", point 4).
   - **Cache:** data is cached with `"use cache"` and `cacheLife`.
   - **Nav and SEO:** a "Shop" entry is added to the navigation (doc 05 update) and the sitemap.
3. **Product page `/shop/[handle]`.** Gallery (the existing lightbox), price, variant selection and "Add to cart". Prerendered with `generateStaticParams`, plus product structured data (`Product`).
4. **Cart.**
   - **Storage:** the cart ID lives in an httpOnly cookie.
   - **Server Actions:** add, update quantity and remove. They call the Cart API.
   - **`/cart` page:** shows the lines and subtotal and has a "Checkout" button that links to `checkoutUrl`.
   - **Header:** a cart link with an item count.
5. **Account link.** "Account" in the header, linking to the account subdomain from 02 section D.
6. **Freshness.** A Shopify webhook (product or inventory update) calls a route handler, which expires the shop cache tag. Otherwise the cache expires on a timer.
7. **Policies and privacy.** The footer links to Shopify's policy pages, and the site's privacy policy draft is updated for online orders.
8. **Go-live checks.**
   - Checkout and account URLs show our subdomains.
   - Branding matches docs/04.
   - "Continue shopping" returns to the site.
   - A test order goes through, then a refund.

## API usage and cost
**What Shopify charges:** nothing per Storefront API request. It's included in the plan. Buyer traffic has no fixed requests-per-minute cap, but Shopify throttles automated traffic and checkout creation. Each query has a complexity limit of 1,000 points (shopify.dev/docs/api/usage/limits).

**What does cost money as traffic grows:** the website host (server function runs, bandwidth, image processing) and the risk of being throttled. The implementation keeps both low:

1. **Product data is cached, not fetched per visit.**
   - **Static pages:** shop and product pages are prerendered, and their data is cached with `"use cache"`, `cacheTag("shop")` and `cacheLife`.
   - **Updates:** a product-update webhook expires the tag (step 6), so Shopify is queried after a change, not on every page view.
   - **Crawlers:** search engines are served cached pages too.
2. **Queries ask only for what a page shows.**
   - **Fields:** only the fields used, with lists limited (`first: 24`, then pagination).
   - **Complexity:** this keeps each query far below the 1,000 limit.
   - **Code generation:** it types exactly those fields, so unused data isn't fetched by accident.
3. **No Shopify request on ordinary page views.**
   - **Header count:** the cart count is kept in a small cookie and updated by the cart Server Actions. The header reads the cookie and doesn't call the API.
   - **When the Cart API is called:** only on the `/cart` page and when items are added or changed.
4. **Shopify resizes the images.**
   - **How:** product images are requested at the size needed from Shopify's own CDN, which resizes for free through URL parameters (`next/image` with a small Shopify loader).
   - **Why:** the website host doesn't process them, which is the image-optimisation cost on hosts like Vercel. `cdn.shopify.com` is used instead of `images.remotePatterns`.
5. **Server requests send the buyer's IP** (`Shopify-Storefront-Buyer-IP`). Shopify then rate-limits each visitor rather than our server as a whole, and real buyers aren't throttled because of bots.
6. **No browser-side Shopify calls and no polling.** The public token isn't used (04 section 1), so there's no browser traffic to Shopify to pay for or secure.
7. **Checkout is created only when the buyer clicks "Checkout".** The cart's `checkoutUrl` is used as is, with no extra checkout calls.

## Out of scope (Shopify handles it)
Payments, card data, taxes, shipping calculation, order management, customer login and passwords, order emails, refunds.
