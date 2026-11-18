import type { Metadata } from "next";
import Container from "@/components/container";
import CtaSection from "@/components/cta-section";
import PageIntro from "@/components/page-intro";
import Reveal from "@/components/reveal";
import ServiceTile from "@/components/service-tile";
import { services } from "@/lib/services/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom gates, slat fencing, privacy screens and awnings, pool fencing, balustrades and custom fabrication on the Gold Coast.",
  alternates: { canonical: "/services" },
};

// Services overview (docs/05-website-sitemap.md: /services)
export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Made to measure, start to finish.">
        Gates, fencing, screens, pool fencing, balustrades and custom work,
        designed around your property and fabricated to suit.
      </PageIntro>

      <section
        aria-labelledby="all-services-heading"
        className="pb-18 lg:pb-32"
      >
        <Reveal>
          <Container>
            <h2 id="all-services-heading" className="sr-only">
              All services
            </h2>
            <ul className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <ServiceTile
                    href={`/services/${service.slug}`}
                    title={service.label}
                    image={service.image}
                    imageAlt={service.imageAlt}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    summary={service.summary}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </section>

      <CtaSection
        eyebrow="Something different?"
        title="Have something specific in mind?"
        quoteHref="/contact?service=custom-fabrication"
      >
        Custom projects are part of what we do. Describe what you have in mind
        and we&apos;ll let you know what&apos;s possible.
      </CtaSection>
    </>
  );
}
