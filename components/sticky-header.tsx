"use client";

import { type ReactNode, useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const getScrolled = () => window.scrollY > 0;
const getServerScrolled = () => false;

export default function StickyHeader({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const scrolled = useSyncExternalStore(
    subscribe,
    getScrolled,
    getServerScrolled,
  );

  return (
    <header data-scrolled={scrolled || undefined} className={className}>
      {children}
    </header>
  );
}
