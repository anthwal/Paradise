// Structured data (JSON-LD) for search engines (docs/09-seo-strategy.md "Structured data").
// Only confirmed business details are included; unconfirmed ones (address, hours,
// phone and email until supplied) are left out rather than guessed.

import type {
  BreadcrumbList,
  FAQPage,
  HomeAndConstructionBusiness,
  Service as ServiceSchema,
  WithContext,
} from "schema-dts";
import type { Faqs } from "@/types/faqs";
import type { Service } from "@/types/services";
import type { Breadcrumbs } from "@/types/structured-data";
import { business, siteDescription, siteName, siteUrl } from "@/lib/site";

// One identifier for the business, so every page's data points to the same entity
const businessId = `${siteUrl}/#business`;

const areaServed = { "@type": "City", name: "Gold Coast" } as const;

// Site-wide business details (rendered in the root layout)
export const businessJsonLd: WithContext<HomeAndConstructionBusiness> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": businessId,
  name: siteName,
  legalName: business.legalName,
  description: siteDescription,
  url: siteUrl,
  areaServed,
  sameAs: [business.facebook],
  ...(business.phone && { telephone: business.phone }),
  ...(business.email && { email: business.email }),
};

// A service page's service, provided by the business
export function serviceJsonLd(service: Service): WithContext<ServiceSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.label,
    description: service.summary,
    url: `${siteUrl}/services/${service.slug}`,
    provider: { "@id": businessId },
    areaServed,
  };
}

// Questions with a confirmed answer only; "To confirm" answers are left out
export function faqJsonLd(faqs: Faqs): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs
      .filter((faq) => faq.answer && !faq.toConfirm)
      .map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
  };
}

// Home is always the first step
export function breadcrumbJsonLd(
  breadcrumbs: Breadcrumbs,
): WithContext<BreadcrumbList> {
  const steps: Breadcrumbs = [{ name: "Home", path: "/" }, ...breadcrumbs];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: steps.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: step.path === "/" ? siteUrl : `${siteUrl}${step.path}`,
    })),
  };
}
