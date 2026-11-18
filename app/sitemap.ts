import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects/projects";
import { services } from "@/lib/services/services";
import { siteUrl } from "@/lib/site";
import type { SitePaths } from "@/types/site";

// Indexable pages without a dynamic segment; /thank-you is noindex and left out
const staticPaths: SitePaths = [
  "/",
  "/services",
  "/projects",
  "/builders-commercial",
  "/about",
  "/contact",
  "/privacy",
];

// sitemap.xml (node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md)
export default function sitemap(): MetadataRoute.Sitemap {
  const paths: SitePaths = [
    ...staticPaths,
    ...services.map((service) => `/services/${service.slug}`),
    ...projects.map((project) => `/projects/${project.slug}`),
  ];

  // Trailing-slash-free absolute URLs (docs/09-seo-strategy.md)
  return paths.map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
  }));
}
