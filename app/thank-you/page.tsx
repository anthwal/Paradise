import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import Container from "@/components/container";
import PageIntro from "@/components/page-intro";
import ToConfirm from "@/components/to-confirm";
import { enquirySteps } from "@/lib/enquiry/enquiry";

// Conversion page after the quote form; kept out of search results (docs/05-website-sitemap.md)
export const metadata: Metadata = {
  title: "Thank you",
  description: "Your enquiry has been sent to Paradise Fabrication & Fencing.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <>
      <PageIntro eyebrow="Enquiry sent" title="Thanks, we've got your enquiry.">
        We&apos;ll be in touch to talk through the job. In the meantime, have a
        look through some of our completed work.
      </PageIntro>

      <section aria-labelledby="next-heading" className="pb-18 lg:pb-32">
        <Container>
          <div className="max-w-2xl border-t border-alloy pt-6">
            <h2 id="next-heading" className="font-display text-h3">
              What happens next
            </h2>
            <ol className="mt-4 grid gap-3">
              {enquirySteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span aria-hidden="true" className="font-display text-steel">
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

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View Our Projects</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Back to home
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
