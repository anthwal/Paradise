"use client";

// Desktop mega-dropdown for services with thumbnails (docs/07-ui-ux-design-system.md)
// Native popover: Esc, click outside and focus return are handled by the browser
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services/services";

export default function ServicesMenu() {
  const panelRef = useRef<HTMLDivElement>(null);

  // The header stays mounted across client-side navigation, so close on link click
  const close = () => panelRef.current?.hidePopover();

  return (
    <div className="group/services">
      <button
        type="button"
        popoverTarget="services-menu"
        className="flex items-center gap-1 font-medium"
      >
        Services
        <ChevronDown
          aria-hidden="true"
          className="size-4 transition-transform group-has-[:popover-open]/services:rotate-180 motion-reduce:transition-none"
        />
      </button>

      <div
        ref={panelRef}
        id="services-menu"
        popover="auto"
        className="inset-x-0 top-[calc(--spacing(18)+1px)] bottom-auto m-0 w-full border-b border-alloy bg-paper p-0 text-ink shadow-sm"
      >
        <Container>
          <ul className="grid grid-cols-6 gap-6 py-8">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={close}
                  className="group block"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-mist">
                    {/* Decorative: the label below names the link */}
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-103 group-focus-visible:scale-103 motion-reduce:transition-none"
                    />
                  </div>
                  <span className="mt-3 block font-medium underline-offset-4 group-hover:underline">
                    {service.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-alloy py-4">
            <Link
              href="/services"
              onClick={close}
              className="inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline"
            >
              All services
              <ArrowRight aria-hidden="true" className="size-4 text-ember" />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
