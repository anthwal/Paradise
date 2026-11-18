import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/container";
import PageIntro from "@/components/page-intro";
import QuoteForm from "@/components/quote-form";
import ToConfirm from "@/components/to-confirm";
import { business, telHref } from "@/lib/site";
import { enquirySteps } from "@/lib/enquiry/enquiry";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote for custom gates, fencing, screens, pool fencing or balustrades on the Gold Coast. Tell us about your project.",
};

const cardClass = "border-t border-alloy pt-6";
const cardHeadingClass = "font-display text-h3";

// Reads ?service= inside the Suspense boundary, so the rest of the page stays prerendered
async function PreselectedQuoteForm({
  searchParams,
}: {
  searchParams: PageProps<"/contact">["searchParams"];
}) {
  const { service } = await searchParams;
  const selectedService = typeof service === "string" ? service : undefined;

  // Next.js keeps a visited /contact in the DOM (React <Activity>), and its
  // <select> keeps the old choice. A new key remounts the form when ?service=
  // changes (node_modules/next/dist/docs/01-app/02-guides/preserving-ui-state.md).
  return (
    <QuoteForm key={selectedService ?? ""} selectedService={selectedService} />
  );
}

// Contact & quote form (docs/05-website-sitemap.md: /contact)
export default function ContactPage({ searchParams }: PageProps<"/contact">) {
  return (
    <>
      <PageIntro eyebrow="Request a quote" title="Tell us about your project.">
        A few details about the site help us understand the job and prepare an
        accurate quote.
      </PageIntro>

      <section
        aria-label="Enquiry form and contact details"
        className="pb-18 lg:pb-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-7">
              {/* Until ?service= is read, the prerendered form has no service selected */}
              <Suspense fallback={<QuoteForm />}>
                <PreselectedQuoteForm searchParams={searchParams} />
              </Suspense>
            </div>

            <aside
              aria-label="Contact details"
              className="grid content-start gap-10 lg:col-span-4 lg:col-start-9"
            >
              <div className={cardClass}>
                <h2 className={cardHeadingClass}>Contact details</h2>
                <dl className="mt-4 grid gap-3">
                  <div>
                    <dt className="font-medium">Phone</dt>
                    <dd className="text-steel">
                      {business.phone ? (
                        <a
                          href={telHref(business.phone)}
                          className="underline underline-offset-4"
                        >
                          {business.phone}
                        </a>
                      ) : (
                        <ToConfirm />
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Email</dt>
                    <dd className="text-steel">
                      {business.email ? (
                        <a
                          href={`mailto:${business.email}`}
                          className="underline underline-offset-4"
                        >
                          {business.email}
                        </a>
                      ) : (
                        <ToConfirm />
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Location</dt>
                    <dd className="flex flex-wrap items-center gap-2 text-steel">
                      {business.region} <ToConfirm />
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Business hours</dt>
                    <dd className="text-steel">
                      <ToConfirm />
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Facebook</dt>
                    <dd>
                      <a
                        href={business.facebook}
                        className="underline underline-offset-4"
                      >
                        Paradise Fabrication &amp; Fencing
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className={cardClass}>
                <h2 className={cardHeadingClass}>What happens next</h2>
                <ol className="mt-4 grid gap-3">
                  {enquirySteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="font-display text-steel"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 text-steel">
                  <ToConfirm />
                </div>
              </div>

              <div className={cardClass}>
                <h2 className={cardHeadingClass}>Helpful to include</h2>
                <p className="mt-4 text-steel">
                  Approximate widths and heights, the colour you have in mind,
                  whether the job is part of a new build, and when you would
                  like it finished.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
