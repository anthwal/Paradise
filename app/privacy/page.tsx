import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/container";
import PageIntro from "@/components/page-intro";
import ToConfirm from "@/components/to-confirm";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Paradise Fabrication & Fencing collects, uses and protects the personal information you share with us.",
  alternates: { canonical: "/privacy" },
};

const headingClass = "mt-12 font-display text-h3";
const paragraphClass = "mt-4";
const listClass = "mt-4 list-disc space-y-2 pl-5";
const linkClass = "underline underline-offset-4";

// Privacy policy (docs/05-website-sitemap.md: /privacy).
// Draft based on what the site collects; the business must review it before launch.
export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy">
        How we collect, use and protect the personal information you share with
        us.
      </PageIntro>

      <section aria-label="Privacy policy" className="pb-18 lg:pb-32">
        <Container>
          <div className="max-w-3xl">
            {/* Placeholder: the wording must be reviewed by the business */}
            <div className="flex flex-col items-start gap-4 border border-dashed border-alloy p-6 text-steel">
              <ToConfirm />
              <p>
                Draft for review. This policy describes what the website
                collects and must be checked and confirmed by{" "}
                {business.legalName} before the site goes live.
              </p>
            </div>

            <h2 className={headingClass}>Who we are</h2>
            <p className={paragraphClass}>
              This website is operated by {business.legalName}, a fabrication
              and fencing business based in {business.region}. In this policy,
              &ldquo;we&rdquo; and &ldquo;us&rdquo; mean {business.legalName}.
            </p>

            <h2 className={headingClass}>What we collect</h2>
            <p className={paragraphClass}>
              When you request a quote or contact us, we collect the details you
              choose to give us:
            </p>
            <ul className={listClass}>
              <li>your name, phone number and email address</li>
              <li>the suburb where the project is</li>
              <li>
                the service you are interested in, the type of property and your
                description of the project
              </li>
            </ul>

            <h2 className={headingClass}>How we use it</h2>
            <p className={paragraphClass}>
              We use your details only to respond to your enquiry, prepare a
              quote and, if you go ahead, carry out the work. We do not sell
              your information or use it for unrelated marketing.
            </p>

            <h2 className={headingClass}>Who we share it with</h2>
            <p className={paragraphClass}>
              We do not share your details with other businesses, except the
              service providers that run this website and deliver enquiries to
              us by email, and where the law requires it.
            </p>

            <h2 className={headingClass}>How we store it</h2>
            <p className={paragraphClass}>
              Enquiries are kept only as long as we need them to respond, quote
              and keep business records. We take reasonable steps to protect
              them from misuse, loss and unauthorised access.
            </p>

            <h2 className={headingClass}>
              Accessing or correcting your details
            </h2>
            <p className={paragraphClass}>
              You can ask to see the personal information we hold about you, or
              ask us to correct or delete it, by contacting us using the details
              below.
            </p>

            <h2 className={headingClass}>Complaints</h2>
            <p className={paragraphClass}>
              If you are concerned about how we have handled your information,
              please contact us first. If you are not satisfied with our
              response, you can contact the{" "}
              <a href="https://www.oaic.gov.au" className={linkClass}>
                Office of the Australian Information Commissioner
              </a>
              .
            </p>

            <h2 className={headingClass}>Contact us</h2>
            <ul className={listClass}>
              <li>
                Email:{" "}
                {business.email ? (
                  <a href={`mailto:${business.email}`} className={linkClass}>
                    {business.email}
                  </a>
                ) : (
                  <ToConfirm />
                )}
              </li>
              <li>
                Or use the{" "}
                <Link href="/contact" className={linkClass}>
                  contact form
                </Link>
              </li>
            </ul>

            <p className="mt-12 flex flex-wrap items-center gap-2 text-steel">
              Last updated: <ToConfirm />
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
