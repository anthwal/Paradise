import { ReactNode } from "react";
import Eyebrow from "@/components/eyebrow";

export type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
  onDark?: boolean;
};

// Eyebrow, H2 and optional intro; id labels the section via aria-labelledby
export default function SectionHeading({
  id,
  eyebrow,
  title,
  children,
  onDark = false,
}: SectionHeadingProps) {
  // Steel is for light backgrounds only (docs/07-ui-ux-design-system.md)
  const secondaryText = onDark ? "text-alloy" : "text-steel";

  return (
    <div>
      <div className={secondaryText}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 id={id} className="mt-4 font-display text-h2">
        {title}
      </h2>
      {children && (
        <p className={`mt-4 max-w-2xl text-body-l ${secondaryText}`}>
          {children}
        </p>
      )}
    </div>
  );
}
