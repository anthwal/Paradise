// todo: Site name and navigation (docs/05-website-sitemap.md)
// Content is still to be confirmed by the product owner.


export type NavItem = {label: string, href: string};

export type NavItems = NavItem[];

export interface BusinessDetails {
    legalName: string;
    region: string;
    phone: string | null;
    email: string | null;
    abn: string | null;
    qbccLicence: string | null;
    facebook: string;
}

export const services: NavItems = [
    { label: "Custom Gates", href: "/services/gates" },
    { label: "Slat Fencing & Infill Panels", href: "/services/slat-fencing" },
    { label: "Privacy Screens & Awnings", href: "/services/privacy-screens-awnings" },
    { label: "Pool Fencing", href: "/services/pool-fencing" },
    { label: "Balustrades", href: "/services/balustrades" },
    { label: "Custom Fabrication & Enclosures", href: "/services/custom-fabrication" },
]

export const mainNav: NavItems = [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Builders & Commercial", href: "/builders-commercial" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

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