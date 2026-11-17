import { ButtonLink } from "@/components/button";
import Container from "@/components/container";
import Link from "next/link";
import { mainNav } from "@/lib/site";
import MobileMenu from "@/components/mobile-menu";
import Wordmark from "@/components/wordmark";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-alloy bg-paper text-ink">
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          <Wordmark />

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-8">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium underline-offset-4 hover:underline"
                  >
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
