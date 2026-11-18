import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/container";
import CtaSection from "@/components/cta-section";
import PageIntro from "@/components/page-intro";
import ProjectCard from "@/components/project-card";
import ProjectGrid from "@/components/project-grid";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { projects } from "@/lib/projects/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Gates, fencing, screens, pool fencing and balustrades completed on the Gold Coast. Browse the gallery by type.",
};

// Reads ?category= inside the Suspense boundary, so the rest of the page stays prerendered
async function FilteredProjectGrid({
  searchParams,
}: {
  searchParams: PageProps<"/projects">["searchParams"];
}) {
  const { category } = await searchParams;

  return (
    <ProjectGrid
      activeSlug={typeof category === "string" ? category : undefined}
    />
  );
}

// Project portfolio, filterable (docs/05-website-sitemap.md: /projects)
export default function ProjectsPage({ searchParams }: PageProps<"/projects">) {
  return (
    <>
      <PageIntro eyebrow="Our work" title="Projects">
        A selection of gates, fencing, screens, pool fencing and balustrades we
        have completed. Filter the gallery by type.
      </PageIntro>

      <section aria-labelledby="stories-heading" className="pb-18 lg:pb-32">
        <Reveal>
          <Container>
            <SectionHeading
              id="stories-heading"
              eyebrow="Project stories"
              title="Featured projects"
            />
            <ul className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard
                    href={`/projects/${project.slug}`}
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    imageAlt={project.imageAlt}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </li>
              ))}
            </ul>
          </Container>
        </Reveal>
      </section>

      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="scroll-mt-24 border-t border-alloy py-18 lg:py-32"
      >
        <Container>
          <SectionHeading
            id="gallery-heading"
            eyebrow="Gallery"
            title="Browse by type"
          />
          <div className="mt-8">
            {/* Until ?category= is read, the prerendered shell shows every photo */}
            <Suspense fallback={<ProjectGrid />}>
              <FilteredProjectGrid searchParams={searchParams} />
            </Suspense>
          </div>
        </Container>
      </section>

      <CtaSection title="Like what you see?">
        Tell us about your property and what you have in mind. A few details
        about the job are all we need to get started.
      </CtaSection>
    </>
  );
}
