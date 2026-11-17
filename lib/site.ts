// todo: Site name and navigation (docs/05-website-sitemap.md)
// Content is still to be confirmed by the product owner.


export type NavItem = {label: string, href: string};

export type NavItems = NavItem[];

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