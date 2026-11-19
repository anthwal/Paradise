# 02 — Shopify Integration: Setup Checklist

What the store owner (or whoever holds the accounts) does in Shopify and DNS. These steps need owner access, so they can't be done from the codebase. Tick each off and pass the items marked **→ send** to the developer.

## A. Store and plan
- [ ] Create the Shopify store with the business's details (Australia, AUD, GST registered if applicable).
- [ ] Choose the **Basic** plan (see 01, section 3.1).
- [ ] Set up **Shopify Payments**: ABN, business and bank details, identity check.
- [ ] Decide on **Shop Pay** (01, section 6.3). Turning it off: Settings → Payments → Shop Pay → deactivate.
- [ ] Taxes: Australian GST settings.
- [ ] Shipping and delivery: zones, rates, local pick-up and delivery if used.
- [ ] Policies: refund, shipping, privacy, terms of service (Settings → Policies).

## B. Products
- [ ] Add products: title, description, images, price, variants (size, colour), stock, weight for shipping.
- [ ] Make sure each product is available on the **Headless** sales channel (after step C).
- [ ] Optional: group products into collections. Each collection can become a filter on the shop page.

## C. Headless channel (gives the site read access to products and carts)
- [ ] Install the **Headless** channel from the Shopify App Store and create a storefront.
- [ ] In the storefront's Storefront API permissions, allow reading products, collections and inventory, and reading and writing carts.
- [ ] **→ send** the store's `.myshopify.com` domain (for example `paradise-fabrication.myshopify.com`).
- [ ] **→ send** the Storefront API **private** access token, through a secure channel such as a password manager share, not email or chat. It goes into the site's server environment variables only.

## D. Domains (checkout and accounts on our subdomains)
Needs access to the DNS of `paradisefabricationfencing.com.au` (or the confirmed domain).
- [ ] DNS: add `CNAME checkout → shops.myshopify.com`.
- [ ] Shopify: Settings → Domains → **Connect existing domain** → `checkout.paradisefabricationfencing.com.au` → verify.
- [ ] Shopify: set `checkout.` as the store's **primary** domain (Online Store target). Checkout links now use it *(verify on Basic: if Shopify refuses it, tell the developer, and checkout stays on the `myshopify.com` address)*.
- [ ] DNS: add `CNAME account → shops.myshopify.com`.
- [ ] Shopify: Settings → Customer accounts → use **new customer accounts** → **Change domain** → `account` → verify. Then Settings → Domains → set it as primary for customer accounts.
- [ ] Shopify: Settings → Domains: if the main domain was ever connected to Shopify, disconnect it. The main domain must keep pointing at the website host, not Shopify.

## E. Look and feel of checkout and accounts
- [ ] Settings → Checkout → **Customize** (checkout and accounts editor):
  - Logo: upload the confirmed logo (pending, see docs/01).
  - Colours: page background `#F8F7F4` (paper), text `#16181A` (ink), buttons and accents `#B4562A` (ember), borders `#C9CDD1` (alloy). These are docs/04 values.
  - Fonts: Shopify's list doesn't take uploads. Pick the closest to Archivo for headings and Inter for body, and use Inter itself if it's listed *(verify)*.
- [ ] Preview checkout on desktop and mobile, and note any Shopify marks still shown (01, section 3.3).
- [ ] Settings → Notifications: add the logo and colours to the emails, and remove any Shopify wording you don't want.

## F. After launch
- [ ] Place a real test order, then refund it.
- [ ] Check that "Continue shopping" and the logo on checkout return to the website. If they go to the Shopify domain, tell the developer: the fix is a redirect in the store's Online Store settings.
