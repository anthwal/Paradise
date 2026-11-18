import { ButtonLink } from "@/components/button";
import Hero from "@/components/hero";
import Container from "@/components/container";
import { business, siteName } from "@/lib/site";
import ServiceTile from "@/components/service-tile";
import {
  Building2,
  Layers,
  type LucideIcon,
  MapPin,
  Quote,
  Ruler,
} from "lucide-react";
import { projects, Projects } from "@/lib/projects/projects";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import Image from "next/image";
import ToConfirm from "@/components/to-confirm";
import ProcessSteps from "@/components/process-steps";
import CtaSection from "@/components/cta-section";
import Reveal from "@/components/reveal";
import { services } from "@/lib/services/services";
import type { Metadata } from "next";

// Share image comes from the root layout
export const metadata: Metadata = {
  // title.template only applies to child segments, so the home page writes its title in full
  title: { absolute: `Aluminium Fabrication Gold Coast | ${siteName}` },
  description:
    "Custom aluminium gates, slat fencing, privacy screens, pool fencing and balustrades, made to measure on the Gold Coast. Request a quote today.",
  alternates: { canonical: "/" },
};

export type Highlight = { label: string; Icon: LucideIcon };

export type Highlights = Highlight[];

export type Reason = {
  title: string;
  text: string;
};

export type Reasons = Reason[];

const featuredProjects: Projects = projects.filter(
  (project) => project.featured,
);

const highlights: Highlights = [
  { label: "Residential & commercial", Icon: Building2 },
  { label: "Made to measure", Icon: Ruler },
  { label: "Glass & aluminium", Icon: Layers },
  { label: "Gold Coast", Icon: MapPin },
];

// Why Paradise: 4 pillars (docs/05-website-sitemap.md)
const reasons: Reasons = [
  {
    title: "Made to measure, not off the shelf",
    text: "Openings, slopes and pier spacing are rarely standard. Each job is made to suit its site, so panels sit square and gaps stay even from end to end.",
  },
  {
    title: "Gates, fences and entries that match",
    text: "Slat direction, spacing and colour carried through the driveway gate, pedestrian gate and fence panels, so the whole frontage reads as one design.",
  },
  {
    title: "Glass or aluminium, chosen for the setting",
    text: "Frameless glass where the view matters. Slats, blades and pickets where you want privacy, shade or a crisp architectural line. We can talk through the options.",
  },
  {
    title: "From family homes to multi-storey buildings",
    text: "Our work includes residential frontages, decks and pools, as well as façade screens and balcony screens on commercial and apartment buildings.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        imageSrc="/images/gates/custom-05.jpg"
        imageAlt="Black vertical blade sliding gate across a gravel driveway"
        eyebrow="Gold Coast Fabrication & Fencing"
        title="Gates, fencing & screens, made to measure."
      >
        <p className="mt-6 max-w-2xl text-body-l">
          Custom gates, slat fencing, privacy screens, pool fencing and
          balustrades, designed and made to suit the way your property looks and
          lives.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Request a Quote</ButtonLink>
          <ButtonLink href="/projects" variant="ghost-light">
            View Our Projects
          </ButtonLink>
        </div>
      </Hero>
      <section aria-label="Highlights" className="border-b border-alloy">
        <Container>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 lg:grid-cols-4">
            {highlights.map(({ label, Icon }) => (
              <li key={label} className="flex items-center gap-3 font-medium">
                <Icon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-steel"
                />
                {label}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section aria-labelledby="services-heading" className="py-18 lg:py-32">
        <Reveal>
          <Container>
            <SectionHeading
              id="services-heading"
              eyebrow="Services"
              title="What we make"
            >
              Six areas of work, all built to measure. Choose a service to see
              examples, options and what to think about before you start.
            </SectionHeading>
            <ul className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-12">
              {services.map((service, index) => (
                <li
                  key={service.slug}
                  // Editorial rhythm on desktop: 7/5, 5/7, 7/5
                  className={
                    index % 4 === 0 || index % 4 === 3
                      ? "lg:col-span-7"
                      : "lg:col-span-5"
                  }
                >
                  <ServiceTile
                    href={`/services/${service.slug}`}
                    title={service.label}
                    image={service.image}
                    imageAlt={service.imageAlt}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </section>
      <section
        aria-labelledby="projects-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                id="projects-heading"
                eyebrow="Projects"
                title="Featured projects"
              >
                A few examples from our completed work, from street frontages to
                waterfront pools.
              </SectionHeading>
              <div className="shrink-0">
                <ButtonLink href="/projects" variant="secondary">
                  See all projects
                </ButtonLink>
              </div>
            </div>

            {/* Horizontal scroll on mobile, 3-up on desktop (docs/05-website-sitemap.md) */}
            <ul className="-mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pt-1 pb-4 md:-mx-8 md:scroll-px-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:p-0">
              {featuredProjects.map((project) => (
                <li
                  key={project.slug}
                  className="w-4/5 shrink-0 snap-start md:w-2/5 lg:w-auto"
                >
                  <ProjectCard
                    href={`/projects/${project.slug}`}
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    imageAlt={project.imageAlt}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </section>
      <section
        aria-labelledby="why-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
              {/* Tall image: on desktop it stretches to the height of the text column */}
              <div className="relative aspect-4/3 bg-mist lg:col-span-5 lg:aspect-auto">
                <Image
                  src="/images/fencing/custom-07.jpg"
                  alt="Black vertical blade fence panels set between white rendered piers"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <SectionHeading
                  id="why-heading"
                  eyebrow="Why Paradise"
                  title="Built around your property."
                />
                <ul className="mt-12 divide-y divide-alloy border-y border-alloy">
                  {reasons.map((reason) => (
                    <li key={reason.title} className="py-6">
                      <h3 className="font-display text-h3">{reason.title}</h3>
                      <p className="mt-2 text-steel">{reason.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Reveal>
      </section>
      <section
        aria-labelledby="process-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <SectionHeading
              id="process-heading"
              eyebrow="How it works"
              title="From first call to final fit."
            >
              A straightforward process, so you know what happens next at every
              stage.
            </SectionHeading>
            <div className="mt-6 text-steel">
              <ToConfirm />
            </div>
            <div className="mt-12">
              <ProcessSteps />
            </div>
          </Container>
        </Reveal>
      </section>
      <section
        aria-labelledby="commercial-heading"
        className="bg-ink py-18 text-paper lg:py-32"
      >
        <Reveal>
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-5">
                <SectionHeading
                  id="commercial-heading"
                  eyebrow="Builders & Commercial"
                  title="Screens and balustrades for multi-storey buildings."
                  onDark
                >
                  Façade screens, balcony screens and balustrades for apartment
                  and commercial buildings. Tell us about the project and we can
                  talk through the scope.
                </SectionHeading>
                <div className="mt-8">
                  <ButtonLink href="/builders-commercial">
                    Builders & commercial work
                  </ButtonLink>
                </div>
              </div>

              <div className="relative aspect-4/3 lg:col-span-6 lg:col-start-7">
                <Image
                  src="/images/awnings/screens-04.jpg"
                  alt="Horizontal aluminium louvre screen running up the façade of a multi-storey building"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </Reveal>
      </section>
      <section aria-labelledby="reviews-heading" className="py-18 lg:py-32">
        <Reveal>
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                id="reviews-heading"
                eyebrow="Customer reviews"
                title="What our customers say"
              >
                Read reviews and see more of our work on our Facebook page.
              </SectionHeading>
              <div className="shrink-0">
                <ButtonLink href={business.facebook} variant="secondary">
                  Reviews on Facebook
                </ButtonLink>
              </div>
            </div>

            {/* Placeholder slots: real reviews only, published with the customer's permission */}
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((slot) => (
                <li
                  key={slot}
                  className="flex flex-col items-start gap-4 border border-dashed border-alloy p-6 text-steel"
                >
                  <Quote aria-hidden="true" className="size-6 shrink-0" />
                  <p>
                    A verified customer review will appear here, published with
                    the customer&apos;s permission.
                  </p>
                  <ToConfirm />
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </section>
      <section
        aria-labelledby="area-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-6">
              <div className="lg:col-span-6">
                <SectionHeading
                  id="area-heading"
                  eyebrow="Where we work"
                  title="Based on the Gold Coast."
                >
                  We work with homeowners, builders and property owners on the
                  Gold Coast.
                </SectionHeading>
              </div>

              {/* Placeholder: service area not yet confirmed by the client */}
              <div className="flex flex-col items-start gap-4 border border-dashed border-alloy p-6 text-steel lg:col-span-5 lg:col-start-8">
                <ToConfirm />
                <h3 className="font-display text-h3 text-ink">
                  Suburbs and regions serviced
                </h3>
                <p>
                  List the suburbs or regions covered (for example northern Gold
                  Coast, southern Gold Coast, hinterland, or nearby regions) and
                  any travel conditions.
                </p>
              </div>
            </div>
          </Container>
        </Reveal>
      </section>
      <CtaSection title="Let's talk about your property.">
        Tell us what you have in mind. A few details about the job are all we
        need to get started.
      </CtaSection>
    </>
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <div className="mx-auto w-full max-w-site px-4 md:px-8 xl:px-12 py-18 lg:py-32 bg-mist">Container</div>
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <section className="py-18 lg:py-32 bg-mist">
    //       <Container>Container</Container>
    //     </section>
    //     <Image
    //       className="dark:invert h-5 w-[100px]"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold font-display bg-ember text-paper leading-10 tracking-tight dark:text-zinc-50">
    //         To get started, edit the{" "}
    //         <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
    //           page.tsx
    //         </code>{" "}
    //         file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert h-[14px] w-4"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={14}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}
