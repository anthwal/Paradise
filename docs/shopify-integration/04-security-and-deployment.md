# 04 — Shopify Integration: Credentials, Login and Deployment

## 1. Access tokens
The Headless channel issues two kinds of Storefront API token. We use only the **private** one.

| Token | Where it could live | Our use |
|---|---|---|
| Public access token | Safe to send to the browser; requests are rate-limited per visitor | **Not used and not created.** All Shopify requests run on our server (Server Components, Server Actions, a route handler), so the browser never needs a token. |
| Private access token | Server only, never in the browser or in git | **Used.** It lives in `SHOPIFY_STOREFRONT_PRIVATE_TOKEN`. |

Rules:
- **Variable names:** never prefix Shopify variables with `NEXT_PUBLIC_`. Next.js copies `NEXT_PUBLIC_` values into the browser bundle at build time (node_modules/next/dist/docs/01-app/02-guides/environment-variables.md).
- **Where the value is stored:**
  - **Locally:** in `.env.local`, which `.gitignore` already excludes (`.env*`).
  - **In production:** in the host's encrypted environment settings.
  - **When sharing:** through a password manager. Never by email or chat.
- **Accidental imports:** `lib/shopify/shopify.ts` starts with `import "server-only"`. A Client Component that imports it then fails the build instead of leaking the token (node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md, "Preventing environment poisoning"). This needs the `server-only` package.
- **Narrow permissions:** the token gets only what the shop needs: read products, collections and inventory, and read and write carts. Storefront tokens can't see orders, customers or payments.
- **Visitor IP:** server requests pass the visitor's IP in the `Shopify-Storefront-Buyer-IP` header, so Shopify's per-buyer rate limits and bot protection still work. Otherwise every visitor would count as our server.
- **Rotation:** if a token leaks, delete the storefront's token in the Headless channel, create a new one, and update the environment variable. No code changes.
- **Webhook secret:** a second secret, `SHOPIFY_WEBHOOK_SECRET`, used for the product-update webhook (03 step 6). The route handler rejects any request whose HMAC signature doesn't match.

## 2. Customer login and credentials
- **Our site never sees a password or login code.** "Account" links to Shopify's hosted customer accounts on `account.<domain>`.
- **How sign-in works:** new customer accounts don't use passwords. The customer enters an email address and gets a one-time 6-digit code. If Shop Pay is on, "Sign in with Shop" also appears (see 01 section 3.3).
- **Where the session lives:** in Shopify, on the `account.` and `checkout.` subdomains. A signed-in customer gets their details filled in at checkout because both are Shopify.
- **What our site keeps:** only a cart ID in a cookie (`httpOnly`, `secure`, `sameSite=lax`). It holds no personal data. Clearing it just starts a new cart.
- **What we give up for this simplicity:** our site doesn't know who is signed in, so there's no "Hi, name" in the header and no order history on our pages. Adding that means Shopify's Customer Account API, which brings OAuth sign-in, a callback route, session storage and more secrets. Not planned, see 01.
- **Personal data:** names, addresses, orders and payment details are stored by Shopify, not by us. The privacy policy must say this before the shop goes live (03 step 7).

## 3. What the current setup already has
| Need | Status |
|---|---|
| Server-only data fetching (Server Components, Server Actions) | Yes, already in use |
| Secrets out of git (`.env*` in `.gitignore`) | Yes |
| Caching (`cacheComponents`, `"use cache"`) | Yes, enabled in `next.config.ts` |
| Shopify image CDN in `next/image` | **To add:** a small loader that requests Shopify-resized images (03, "API usage and cost", point 4) |
| `server-only` package | **To install** |
| Shopify client and type generation | **To install** (03 prerequisites) |
| Header cart count | **Note:** the header is in the root layout. Reading the cart cookie there is request-time data, so the count goes inside a `<Suspense>` boundary. The rest of every page stays prerendered, as with `/projects` and `/contact`. |

## 4. Effect on the deployment decision
Production hosting is still undecided. The shop narrows the options:
- **A running Next.js server is required.** Server Actions (cart), cookies, the webhook route and cache expiry all need it. A static export (`output: "export"`) or plain static/shared hosting won't work.
- **Suitable hosts:**
  - **Vercel:** recommended in docs/08. Zero config, encrypted environment variables and a Sydney region.
  - **Other platforms:** any Node.js platform that runs `next start`, or a container. These need more setup and maintenance.
- **Region:** run server functions close to buyers, Sydney (`syd1` on Vercel).
- **Hosting cost:** Vercel's free Hobby plan is for non-commercial use, so a business site with a shop should expect a paid plan (Pro, about US$20/month) *(verify current terms)*. The caching in 03 ("API usage and cost") keeps usage within the plan's included amounts for a site this size.
- **DNS has to be split between two services:**

  | Domain | Points to |
  |---|---|
  | `paradisefabricationfencing.com.au` and `www.` | The website host (e.g. Vercel) |
  | `checkout.` | Shopify (`CNAME shops.myshopify.com`) |
  | `account.` | Shopify (`CNAME shops.myshopify.com`) |

  So whoever manages the domain's DNS has to be able to add these records. Shopify must not take over the main domain (02 section D).
- **Production secrets:** `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_PRIVATE_TOKEN`, `SHOPIFY_STOREFRONT_API_VERSION` and `SHOPIFY_WEBHOOK_SECRET` are set in the host's settings. A preview or staging deployment should use a development store's token, not the live store's.
