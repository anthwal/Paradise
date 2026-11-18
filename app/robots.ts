import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// robots.txt (node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/robots.md).
// Everything may be crawled: /thank-you is kept out of results with its noindex tag,
// which crawlers can only read if they are allowed to fetch the page.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
