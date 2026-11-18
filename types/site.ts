// Site-wide data: navigation, business details, social sharing, sitemap

export type NavItem = { label: string; href: string };

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

// Image shown when a page is shared on social media or in messaging apps
export type ShareImage = { url: string; alt: string };

export type ShareImages = ShareImage[];

// Paths listed in sitemap.xml
export type SitePaths = string[];
