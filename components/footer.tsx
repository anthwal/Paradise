import Container from "@/components/container";
import Wordmark from "@/components/wordmark";
import { ButtonLink } from "@/components/button";
import {
  business,
  companyNav,
  services,
  siteDescription,
  telHref,
} from "@/lib/site";
import Link from "next/link";
import ToConfirm from "@/components/to-confirm";

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

const headingClass = "mb-4 font-display text-eyebrow text-paper uppercase";
const linkClass = "underline-offset-4 hover:text-paper hover:underline";

// Site footer: brand, services, company, contact, licence line (docs/07-ui-ux-design-system.md)
export default function Footer() {
  return (
    <footer className="border-t border-graphite bg-ink text-alloy">
      <Container>
        <div className="grid gap-12 py-18 md:grid-cols-2 lg:py-24 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <Wordmark onDark />
            <p className="mt-6 max-w-sm">{siteDescription}</p>
            <div className="mt-8">
              <ButtonLink href="/contact">Request a Quote</ButtonLink>
            </div>
          </div>

          <nav aria-label="Services">
            <h2 className={headingClass}>Services</h2>
            <ul className="grid gap-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className={headingClass}>Company</h2>
            <ul className="grid gap-3">
              {companyNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Contact</h2>
            <ul className="grid gap-3">
              <li>
                Phone:{" "}
                {business.phone ? (
                  <a href={telHref(business.phone)} className={linkClass}>
                    {business.phone}
                  </a>
                ) : (
                  <ToConfirm />
                )}
              </li>
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
              <li>{business.region}</li>
              <li>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-graphite py-6 text-sm">
          <p>
            &copy; <CopyrightYear /> {business.legalName}
          </p>
          <p>
            ABN {business.abn ?? <ToConfirm />} &middot; QBCC Licence{" "}
            {business.qbccLicence ?? <ToConfirm />}
          </p>
        </div>
      </Container>
    </footer>
  );
}
