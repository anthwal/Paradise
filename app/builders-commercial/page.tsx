import type { Metadata } from "next";
import { sharedOpenGraph } from "@/lib/site";
import { ButtonLink } from "@/components/button";
import Container from "@/components/container";
import CtaSection from "@/components/cta-section";
import FaqList from "@/components/faq-list";
import Hero from "@/components/hero";
import PhotoGallery from "@/components/photo-gallery";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import ServiceTile from "@/components/service-tile";
import { faqs, Faqs } from "@/lib/faqs/faqs";
import { photos, Photos } from "@/lib/photos/photos";
import { PhotoSources } from "@/lib/projects/projects";
import { services, Services } from "@/lib/services/services";
import JsonLd from "@/components/json-ld";
import {
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/structured-data/structured-data";

export const metadata: Metadata = {
  title: "Commercial Screens Gold Coast",
  description:
    "Aluminium façade screens, balcony screens and balustrades for builders, developers and commercial buildings on the Gold Coast. Send your plans for a quote.",
  alternates: { canonical: "/builders-commercial" },
  openGraph: {
    ...sharedOpenGraph,
    images: [
      {
        url: "/images/awnings/screens-07.jpg",
        alt: "Vertical blade privacy screens on apartment balconies",
      },
    ],
  },
};

// Builder and commercial audiences (docs/03-marketing-strategy.md)
// Content is still to be confirmed by the product owner.
export type Audience = { title: string; text: string };

export type Audiences = Audience[];

const audiences: Audiences = [
  {
    title: "Builders & developers",
    text: "Balustrades, screens and fencing carried consistently across townhouse, duplex and multi-dwelling projects, made to the drawings for each dwelling.",
  },
  {
    title: "Commercial & strata",
    text: "Façade screens, balcony screens and louvred window screens for commercial and apartment buildings, made with body corporate and design guidelines in mind.",
  },
];

// What helps us quote larger projects (from the service considerations and FAQs)
export type QuoteNeed = { title: string; text: string };

export type QuoteNeeds = QuoteNeed[];

const quoteNeeds: QuoteNeeds = [
  {
    title: "Plans or drawings",
    text: "Architect's or engineer's drawings, or marked-up elevations showing where each item goes.",
  },
  {
    title: "Scope and quantities",
    text: "Which products, how many dwellings or levels, and any finishes or colours already specified.",
  },
  {
    title: "Build program",
    text: "Where the job sits in the build program, so fabrication and installation can be planned around it.",
  },
  {
    title: "Building guidelines",
    text: "Any body corporate, council or design guidelines the work needs to follow.",
  },
];

// Commercial and multi-residential photos (prototype image inventory settings)
const exampleSources: PhotoSources = [
  "/images/awnings/screens-02.jpg",
  "/images/awnings/screens-03.jpg",
  "/images/awnings/screens-01.jpg",
  "/images/awnings/screens-04.jpg",
  "/images/awnings/screens-07.jpg",
  "/images/awnings/screens-08.jpg",
  "/images/balustrades/balustrade-10.jpg",
];

const examples: Photos = photos.filter((photo) =>
  exampleSources.includes(photo.src),
);

const suppliedServices: Services = services.filter((service) =>
  ["privacy-screens-awnings", "balustrades", "slat-fencing"].includes(
    service.slug,
  ),
);

const questions: Faqs = [faqs.commercial, faqs.drawings, faqs.licence];

const quoteHref = "/contact?service=builders-commercial";

// Builders & Commercial: B2B pathway (docs/05-website-sitemap.md, docs/06-user-journeys.md J3)
export default function BuildersCommercialPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Builders & Commercial", path: "/builders-commercial" },
        ])}
      />
      <JsonLd data={faqJsonLd(questions)} />
      <Hero
        imageSrc="/images/awnings/screens-07.jpg"
        imageAlt="Vertical blade privacy screens on apartment balconies"
        eyebrow="Builders & Commercial"
        title="Screens, balustrades and fencing for larger projects."
      >
        <p className="mt-6 max-w-2xl text-body-l">
          For builders, developers and commercial clients on the Gold Coast,
          from multi-dwelling developments to apartment and commercial
          buildings.
        </p>
        <div className="mt-8">
          <ButtonLink href={quoteHref}>Request a Quote</ButtonLink>
        </div>
      </Hero>

      <section aria-labelledby="audiences-heading" className="py-18 lg:py-32">
        <Reveal>
          <Container>
            <SectionHeading
              id="audiences-heading"
              eyebrow="Who we work with"
              title="Beyond the single home"
            />
            <ul className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2">
              {audiences.map((audience) => (
                <li key={audience.title} className="border-t border-alloy pt-6">
                  <h3 className="font-display text-h3">{audience.title}</h3>
                  <p className="mt-2 text-steel">{audience.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </section>

      <section
        aria-labelledby="supply-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <SectionHeading
              id="supply-heading"
              eyebrow="What we supply"
              title="Products for larger projects"
            />
            <ul className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-3">
              {suppliedServices.map((service) => (
                <li key={service.slug}>
                  <ServiceTile
                    href={`/services/${service.slug}`}
                    title={service.label}
                    image={service.image}
                    imageAlt={service.imageAlt}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    summary={service.summary}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </section>

      <section
        aria-labelledby="examples-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <SectionHeading
              id="examples-heading"
              eyebrow="Examples"
              title="Commercial and multi-residential work"
            />
            <PhotoGallery
              photos={examples}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            />
          </Container>
        </Reveal>
      </section>

      <section
        aria-labelledby="quote-needs-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <SectionHeading
              id="quote-needs-heading"
              eyebrow="What helps us quote"
              title="What to send us"
            />
            <ul className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
              {quoteNeeds.map((need) => (
                <li key={need.title} className="border-t border-alloy pt-6">
                  <h3 className="font-display text-h3">{need.title}</h3>
                  <p className="mt-2 text-steel">{need.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </section>

      <section
        aria-labelledby="questions-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <SectionHeading
              id="questions-heading"
              eyebrow="Questions"
              title="Common questions"
            />
            <div className="mt-8 max-w-3xl">
              <FaqList items={questions} />
            </div>
          </Container>
        </Reveal>
      </section>

      <CtaSection
        eyebrow="Builders & Commercial"
        title="Have a project coming up?"
        quoteHref={quoteHref}
      >
        Send the plans or a short description of the scope and we&apos;ll talk
        it through.
      </CtaSection>
    </>
  );
}
