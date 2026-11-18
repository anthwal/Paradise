// Services and their page content

import type { FaqIds } from "@/types/faqs";
import type { ProjectCategory } from "@/types/projects";

export type ServiceItem = { title: string; text: string };

export type ServiceItems = ServiceItem[];

export type ServiceApplications = string[];

export type ServiceSlug =
  | "gates"
  | "slat-fencing"
  | "privacy-screens-awnings"
  | "pool-fencing"
  | "balustrades"
  | "custom-fabrication";

export type ServiceSlugs = ServiceSlug[];

export type Service = {
  slug: ServiceSlug;
  label: string;
  summary: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  options: ServiceItems;
  applications: ServiceApplications;
  considerations: ServiceItems;
  faqs: FaqIds;
  category: ProjectCategory;
  related: ServiceSlugs; // "Often paired with" on the service page
  metaTitle: string; // Search result title: primary keyword (docs/09-seo-strategy.md)
  metaDescription: string; // Search result description, 155 characters or fewer
};

export type Services = Service[];
