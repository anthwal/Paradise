// todo: Site name and navigation (docs/05-website-sitemap.md)
// Content is still to be confirmed by the product owner.

import type { BusinessDetails, NavItems, ShareImages } from "@/types/site";

export const mainNav: NavItems = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Builders & Commercial", href: "/builders-commercial" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const siteName = "Paradise Fabrication & Fencing";

export const siteDescription =
  "Custom gates, slat fencing, privacy screens and awnings, pool fencing and balustrades on the Gold Coast, Queensland.";

// Production address for canonical links, the sitemap and social sharing.
// The existing site's domain; keeping it is still to be confirmed (docs/01-business-discovery.md, question 12).
export const siteUrl = "https://paradisefabricationfencing.com.au";

export const business: BusinessDetails = {
  legalName: "Paradise Fabrication & Fencing Pty Ltd",
  region: "Gold Coast, QLD",
  phone: null,
  email: null,
  abn: null,
  qbccLicence: null,
  facebook: "https://www.facebook.com/ParadiseFabricationFencing/",
};

export const companyNav: NavItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Builders & Commercial", href: "/builders-commercial" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

// tel: links need the number without spaces
export function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

// Used by pages without a photo of their own (the home page hero)
export const defaultShareImages: ShareImages = [
  {
    url: "/images/gates/custom-05.jpg",
    alt: "Black vertical blade sliding gate across a gravel driveway",
  },
];

// Social sharing fields every page keeps. A page that sets its own openGraph
// replaces the layout's completely, so it spreads these in
// (node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md "Merging").
export const sharedOpenGraph = {
  siteName,
  locale: "en_AU",
  type: "website",
} as const;
