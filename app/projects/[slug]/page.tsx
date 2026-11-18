import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button";
import Container from "@/components/container";
import CtaSection from "@/components/cta-section";
import Hero from "@/components/hero";
import PhotoGallery from "@/components/photo-gallery";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import ToConfirm from "@/components/to-confirm";
import { photos, Photos } from "@/lib/photos/photos";
import { getProject, projects } from "@/lib/projects/projects";
import { services } from "@/lib/services/services";

// All project pages are prerendered at build time
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return { title: project.title, description: project.story };
}

// Project detail: hero, story with facts, photos, CTA (docs/05-website-sitemap.md: /projects/[slug])
export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectPhotos: Photos = photos.filter((photo) =>
    project.photoSources.includes(photo.src),
  );
  // Quote for the service that matches the project's category
  const service = services.find((item) => item.category === project.category);
  const quoteHref = service ? `/contact?service=${service.slug}` : "/contact";

  return (
    <>
      <Hero
        imageSrc={project.image}
        imageAlt={project.imageAlt}
        eyebrow={`${project.category} · ${project.setting}`}
        title={project.title}
      >
        <div className="mt-8">
          <ButtonLink href={quoteHref}>Request a Quote</ButtonLink>
        </div>
      </Hero>

      <section aria-labelledby="story-heading" className="py-18 lg:py-32">
        <Reveal>
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-7">
                <SectionHeading
                  id="story-heading"
                  eyebrow="The project"
                  title="What we made"
                >
                  {project.story}
                </SectionHeading>
              </div>

              <dl className="border-t border-alloy lg:col-span-4 lg:col-start-9">
                {project.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-3 gap-4 border-b border-alloy py-4"
                  >
                    <dt className="font-display text-eyebrow text-steel uppercase">
                      {fact.label}
                    </dt>
                    <dd className="col-span-2 font-medium">
                      {fact.value ?? <ToConfirm />}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </Reveal>
      </section>

      <section
        aria-labelledby="photos-heading"
        className="border-t border-alloy py-18 lg:py-32"
      >
        <Reveal>
          <Container>
            <SectionHeading
              id="photos-heading"
              eyebrow="Photos"
              title="Project photos"
            />
            <PhotoGallery
              photos={projectPhotos}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            />
            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline"
            >
              All projects
              <ArrowRight aria-hidden="true" className="size-4 text-ember" />
            </Link>
          </Container>
        </Reveal>
      </section>

      <CtaSection
        eyebrow={project.title}
        title="Want something similar?"
        quoteHref={quoteHref}
      >
        Tell us about the site and what you have in mind.
      </CtaSection>
    </>
  );
}
