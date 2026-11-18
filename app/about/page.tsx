import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/container";
import CtaSection from "@/components/cta-section";
import PageIntro from "@/components/page-intro";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import ToConfirm from "@/components/to-confirm";
import { photos, Photos } from "@/lib/photos/photos";
import { PhotoSources } from "@/lib/projects/projects";
import { services } from "@/lib/services/services";

export const metadata: Metadata = {
  title: "About",
  description:
    "Paradise Fabrication & Fencing makes custom gates, fencing, screens and balustrades on the Gold Coast, designed around each property.",
};

// Content is still to be confirmed by the product owner.

const collageSources: PhotoSources = [
  "/images/fencing/custom-01.jpg",
  "/images/awnings/screens-07.jpg",
  "/images/balustrades/balustrade-05.jpg",
];

const collage: Photos = photos.filter((photo) =>
  collageSources.includes(photo.src),
);

// Background details the client is asked to supply
export type BackgroundPrompts = string[];

const backgroundPrompts: BackgroundPrompts = [
  "When and how the business started",
  "Who runs it (for example family-owned, owner-operated)",
  "Where the work is fabricated (workshop or factory location)",
  "Years of experience and the team's trade background",
  "Licence and insurance details to display",
];

export type Principle = { title: string; text: string };

export type Principles = Principle[];

const principles: Principles = [
  {
    title: "Fit the property",
    text: "Design starts with the house: its lines, its colours and how the space is used.",
  },
  {
    title: "Get the details right",
    text: "Straight runs, even gaps and clean junctions are what make metalwork look considered.",
  },
  {
    title: "Keep you informed",
    text: "Clear quotes and clear communication from first enquiry to final fit.",
  },
];

// About (docs/05-website-sitemap.md; docs/06-user-journeys.md J4: family-run, factory, licence)
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Paradise"
        title="Fabricators with an eye for design."
      >
        We make the gates, fences, screens and balustrades that shape how a
        property looks from the street, the pool and the balcony, and we take
        the details personally.
      </PageIntro>

      <section aria-label="Our work in pictures" className="pb-18 lg:pb-32">
        <Container>
          <ul className="grid gap-4 md:grid-cols-3">
            {collage.map((photo) => (
              <li
                key={photo.src}
                className="relative aspect-square overflow-hidden bg-mist"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="story-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-6">
                <SectionHeading
                  id="story-heading"
                  eyebrow="Our story"
                  title="Good metalwork is quiet. It lines up, it lasts, and it makes the whole property look better."
                />
              </div>

              {/* Placeholder: company history must come from the client */}
              <div className="flex flex-col items-start gap-4 border border-dashed border-alloy p-6 text-steel lg:col-span-5 lg:col-start-8">
                <ToConfirm />
                <h3 className="font-display text-h3 text-ink">
                  Company background
                </h3>
                <p>
                  A short, genuine introduction to Paradise Fabrication &amp;
                  Fencing, in your own words. Helpful details to include:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  {backgroundPrompts.map((prompt) => (
                    <li key={prompt}>{prompt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Reveal>
      </section>

      <section
        aria-labelledby="capabilities-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <SectionHeading
              id="capabilities-heading"
              eyebrow="Capabilities"
              title="What we do"
            >
              Our main areas of work. Follow a link to see examples.
            </SectionHeading>
            <ul className="mt-12 border-t border-alloy">
              {services.map((service) => (
                <li key={service.slug} className="border-b border-alloy">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group grid gap-2 py-6 md:grid-cols-12 md:items-center md:gap-6"
                  >
                    <h3 className="font-display text-h3 md:col-span-5">
                      {service.label}
                    </h3>
                    <p className="text-steel md:col-span-6">
                      {service.summary}
                    </p>
                    <ArrowRight
                      aria-hidden="true"
                      className="hidden size-5 text-ember transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none md:block md:justify-self-end"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </section>

      <section
        aria-labelledby="approach-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <SectionHeading
              id="approach-heading"
              eyebrow="How we work"
              title="Our approach"
            >
              The principles behind every job, whatever its size.
            </SectionHeading>
            <div className="mt-6 text-steel">
              <ToConfirm />
            </div>
            <ul className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-3">
              {principles.map((principle) => (
                <li
                  key={principle.title}
                  className="border-t border-alloy pt-6"
                >
                  <h3 className="font-display text-h3">{principle.title}</h3>
                  <p className="mt-2 text-steel">{principle.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </section>

      <CtaSection eyebrow="Work with us" title="Have a project in mind?">
        Tell us what you have in mind. A few details about the job are all we
        need to get started.
      </CtaSection>
    </>
  );
}
