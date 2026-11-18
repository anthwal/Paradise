import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";
import HeroMarker from "@/components/hero-marker";
import Image from "next/image";
import type { ReactNode } from "react";

type HeroProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

// Full-bleed photo with a dark scrim and the page H1 (docs/07-ui-ux-design-system.md)
export default function Hero({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  children,
}: HeroProps) {
  return (
    <section className="relative isolate -mt-[calc(--spacing(18)+1px)] flex min-h-[85svh] items-end bg-ink text-paper">
      <HeroMarker />
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover motion-safe:slat-reveal"
      />
      {/* The one gradient allowed: a dark scrim for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-ink/70 via-ink/30 to-ink/90"
      />
      <Container>
        <div className="max-w-4xl py-18 lg:py-32">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-display font-stretch-87%">
            {title}
          </h1>
          {children}
        </div>
      </Container>
    </section>
  );
}
