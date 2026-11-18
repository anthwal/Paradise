import { getService, ServiceItem, services } from "@/lib/services/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/hero";
import { ButtonLink } from "@/components/button";
import Reveal from "@/components/reveal";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import CtaSection from "@/components/cta-section";
import { ArrowDown } from "lucide-react";
import Eyebrow from "@/components/eyebrow";
// "On this page" links; each block below adds its entry as it is built
const pageSections = [
  { id: "overview", label: "Overview" },
  { id: "options", label: "Options" },
  { id: "considerations", label: "Design considerations" },
];

// Each content block: anchor target clear of the sticky header, hairline between blocks
const blockClass =
  "scroll-mt-24 border-t border-alloy py-12 first:border-t-0 first:pt-0";

// All six service pages are prerendered at build time
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return { title: service.label, description: service.summary };
}

// Titled items in two columns, used for options and considerations
function ItemGrid({ items }: { items: ServiceItem[] }) {
  return (
    <ul className="mt-8 grid gap-x-6 gap-y-8 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="border-t border-alloy pt-6">
          <h3 className="font-display text-h3">{item.title}</h3>
          <p className="mt-2 text-steel">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

// Service page: hero, sticky sidebar with page links and quote CTA, content blocks, final CTA
export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const quoteHref = `/contact?service=${service.slug}`;

  return (
    <>
      <Hero
        imageSrc={service.image}
        imageAlt={service.imageAlt}
        eyebrow="Services"
        title={service.label}
      >
        <p className="mt-6 max-w-2xl text-body-l">{service.summary}</p>
        <div className="mt-8">
          <ButtonLink href={quoteHref}>Request a Quote</ButtonLink>
        </div>
      </Hero>

      <div className="py-18 lg:py-32">
        <Container>
          <div className="grid gap-x-6 lg:grid-cols-12">
            {/* Desktop only: on mobile the sticky Call / Quote bar does this job */}
            <aside className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-[calc(--spacing(26)+1px)] grid gap-8">
                <nav aria-labelledby="page-nav-heading">
                  <div id="page-nav-heading" className="mb-4 text-steel">
                    <Eyebrow>On this page</Eyebrow>
                  </div>
                  <ul className="border-t border-alloy">
                    {pageSections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="flex items-center justify-between border-b border-alloy py-3 text-steel transition-colors hover:text-ink motion-reduce:transition-none"
                        >
                          {section.label}
                          <ArrowDown aria-hidden="true" className="size-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="bg-ink p-8 text-paper">
                  <div className="text-alloy">
                    <Eyebrow>{service.label}</Eyebrow>
                  </div>
                  <p className="mt-4 font-display text-h3">
                    Planning a project?
                  </p>
                  <p className="mt-2 text-alloy">
                    Send a few details about the site. We&apos;ll come back to
                    you to talk it through.
                  </p>
                  <div className="mt-6">
                    <ButtonLink href={quoteHref}>Request a Quote</ButtonLink>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7 lg:col-start-6">
              <section
                id="overview"
                aria-labelledby="overview-heading"
                className={blockClass}
              >
                <Reveal>
                  <SectionHeading
                    id="overview-heading"
                    eyebrow="Overview"
                    title={service.headline}
                  >
                    {service.intro}
                  </SectionHeading>
                  <ul
                    aria-label="Typical applications"
                    className="mt-8 flex flex-wrap gap-3"
                  >
                    {service.applications.map((application) => (
                      <li
                        key={application}
                        className="rounded-xs border border-alloy px-4 py-2 font-medium"
                      >
                        {application}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </section>

              <section
                id="options"
                aria-labelledby="options-heading"
                className={blockClass}
              >
                <Reveal>
                  <SectionHeading
                    id="options-heading"
                    eyebrow="Options"
                    title="What we offer"
                  />
                  <ItemGrid items={service.options} />
                </Reveal>
              </section>

              <section
                id="considerations"
                aria-labelledby="considerations-heading"
                className={blockClass}
              >
                <Reveal>
                  <SectionHeading
                    id="considerations-heading"
                    eyebrow="Before you start"
                    title="Design considerations"
                  />
                  <ItemGrid items={service.considerations} />
                </Reveal>
              </section>
            </div>
          </div>
        </Container>
      </div>

      <CtaSection
        eyebrow={service.label}
        title="Ready to talk about your project?"
        quoteHref={quoteHref}
      >
        Tell us about the site and what you have in mind.
      </CtaSection>
    </>
  );
}
