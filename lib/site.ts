// todo: Site name and navigation (docs/05-website-sitemap.md)
// Content is still to be confirmed by the product owner.

export type NavItem = { label: string; href: string };

export type NavItems = NavItem[];

export type Service = NavItem & {
  image: string;
  imageAlt: string;
};

export type Services = Service[];

export interface BusinessDetails {
  legalName: string;
  region: string;
  phone: string | null;
  email: string | null;
  abn: string | null;
  qbccLicence: string | null;
  facebook: string;
}

export const services: Services = [
  {
    label: "Custom Gates",
    href: "/services/gates",
    image: "/images/gates/slatted-01.jpg",
    imageAlt: "Horizontal slat sliding gate with matching fence panels",
  },
  {
    label: "Slat Fencing & Infill Panels",
    href: "/services/slat-fencing",
    image: "/images/fencing/custom-01.jpg",
    imageAlt: "Black horizontal slat panels between white rendered piers",
  },
  {
    label: "Privacy Screens & Awnings",
    href: "/services/privacy-screens-awnings",
    image: "/images/awnings/screens-02.jpg",
    imageAlt: "White horizontal slat screen wrapping a commercial building",
  },
  {
    label: "Pool Fencing",
    href: "/services/pool-fencing",
    image: "/images/pool-fencing/pool-01.jpg",
    imageAlt: "Frameless glass pool fencing on the waterfront",
  },
  {
    label: "Balustrades",
    href: "/services/balustrades",
    image: "/images/balustrades/balustrade-05.jpg",
    imageAlt: "White picket balustrade on a timber deck",
  },
  {
    label: "Custom Fabrication & Enclosures",
    href: "/services/custom-fabrication",
    image: "/images/gates/custom-03.jpg",
    imageAlt: "Sliding gate and front fence on a contemporary home",
  },
];

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
