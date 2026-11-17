import Link from "next/link";

export default function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${onDark ? "text-paper" : ""}`}
    >
      <svg
        aria-hidden="true"
        width="22"
        height="18"
        viewBox="0 0 22 18"
        className="shrink-0"
      >
        <rect y="0" width="22" height="4" fill="currentColor" />
        <rect y="7" width="22" height="4" fill="currentColor" />
        <rect y="14" width="22" height="4" fill="currentColor" />
      </svg>
      <span className="flex flex-col">
        <span className="font-display text-lg leading-none font-bold tracking-widest uppercase">
          Paradise
        </span>
        <span
          className={`font-display text-eyebrow uppercase ${onDark ? "text-alloy" : "text-steel group-over-hero/header:text-alloy"}`}
        >
          Fabrication &amp; Fencing
        </span>
      </span>
    </Link>
  );
}
