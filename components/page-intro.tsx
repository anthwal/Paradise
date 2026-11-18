import { ReactNode } from "react";
import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";

export type PageIntroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

// Intro for pages without a photo hero: eyebrow and H1, with the lead beside it on desktop
export default function PageIntro({
  eyebrow,
  title,
  children,
}: PageIntroProps) {
  return (
    <header className="pt-12 pb-12 lg:pt-24 lg:pb-18">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="text-steel">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-4 font-display text-display font-stretch-87%">
              {title}
            </h1>
          </div>
          {children && (
            <p className="text-body-l text-steel lg:col-span-4 lg:col-start-9">
              {children}
            </p>
          )}
        </div>
      </Container>
    </header>
  );
}
