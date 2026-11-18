import { ReactNode } from "react";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { ButtonLink } from "@/components/button";
import { business, telHref } from "@/lib/site";
import ToConfirm from "@/components/to-confirm";
import Reveal from "@/components/reveal";

export type CtaSectionProps = {
  title: string;
  children: ReactNode;
};

// Dark ink band with headline, 2 buttons and phone (docs/07-ui-ux-design-system.md)
export default function CtaSection({ title, children }: CtaSectionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-ink py-18 text-paper lg:py-32"
    >
      <Reveal>
        <Container>
          <SectionHeading
            id="cta-heading"
            eyebrow="Start your project"
            title={title}
            onDark
          >
            {children}
          </SectionHeading>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Request a Quote</ButtonLink>
            <ButtonLink href="/projects" variant="ghost-light">
              View Our Projects
            </ButtonLink>
          </div>
          <p className="mt-6 text-alloy">
            Or call{" "}
            {business.phone ? (
              <a
                href={telHref(business.phone)}
                className="font-medium text-paper underline underline-offset-4"
              >
                {business.phone}
              </a>
            ) : (
              <ToConfirm />
            )}
          </p>
        </Container>
      </Reveal>
    </section>
  );
}
