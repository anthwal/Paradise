import { ButtonLink } from "@/components/button";
import Hero from "@/components/hero";
import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";
import { services } from "@/lib/site";
import ServiceTile from "@/components/service-tile";
import {
  Building2,
  Layers,
  type LucideIcon,
  MapPin,
  Ruler,
} from "lucide-react";
import { projects } from "@/lib/projects/projects";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";

export type Highlight = { label: string; Icon: LucideIcon };

export type Highlights = Highlight[];

const featuredProjects = projects.filter((project) => project.featured);

const highlights: Highlights = [
  { label: "Residential & commercial", Icon: Building2 },
  { label: "Made to measure", Icon: Ruler },
  { label: "Glass & aluminium", Icon: Layers },
  { label: "Gold Coast", Icon: MapPin },
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
                key={service.href}
                // Editorial rhythm on desktop: 7/5, 5/7, 7/5
                className={
                  index % 4 === 0 || index % 4 === 3
                    ? "lg:col-span-7"
                    : "lg:col-span-5"
                }
              >
                <ServiceTile
                  href={service.href}
                  title={service.label}
                  image={service.image}
                  imageAlt={service.imageAlt}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section
        aria-labelledby="projects-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
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
      </section>
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
