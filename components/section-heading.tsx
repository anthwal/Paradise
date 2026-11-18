import { ReactNode } from "react";
import Eyebrow from "@/components/eyebrow";

export type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

// Eyebrow, H2 and optional intro; id labels the section via aria-labelledby
export default function SectionHeading({
  id,
  eyebrow,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div>
      <div className="text-steel">
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 id={id} className="mt-4 font-display text-h2">
        {title}
      </h2>
      {children && (
        <p className="mt-4 max-w-2xl text-body-l text-steel">{children}</p>
      )}
    </div>
  );
}
