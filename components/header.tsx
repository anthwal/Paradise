import {ButtonLink} from "@/components/button";
import Container from "@/components/container";
import Link from "next/link";
import {mainNav} from "@/lib/site";
import MobileMenu from "@/components/mobile-menu";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-alloy bg-paper text-ink">
            <Container>
                <div className="flex h-18 items-center justify-between gap-6">
                    {/* Interim wordmark with three-slat mark (docs/04-brand-guidelines.md) */}
                    <Link href="/" className="flex items-center gap-3">
                        <svg aria-hidden="true" width="22" height="18" viewBox="0 0 22 18" className="shrink-0">
                            <rect y="0" width="22" height="4" fill="currentColor" />
                            <rect y="7" width="22" height="4" fill="currentColor" />
                            <rect y="14" width="22" height="4" fill="currentColor" />
                        </svg>
                        <span className="flex flex-col">
              <span className="font-display text-lg leading-none font-bold tracking-widest uppercase">
                Paradise
              </span>
              <span className="font-display text-eyebrow text-steel uppercase">
                Fabrication &amp; Fencing
              </span>
            </span>
                    </Link>

                    <nav aria-label="Main" className="hidden xl:block">
                        <ul className="flex items-center gap-8">
                            {mainNav.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="font-medium underline-offset-4 hover:underline">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-3">
                        <div className="hidden md:block">
                            <ButtonLink href="/contact">Request a Quote</ButtonLink>
                        </div>
                        <MobileMenu />
                    </div>
                </div>
            </Container>
        </header>
    );
}