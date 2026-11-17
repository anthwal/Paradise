"use client";

import { ButtonLink } from "@/components/button";
import Link from "next/link";
import { mainNav } from "@/lib/site";
import Container from "@/components/container";
import { useRef } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Open menu"
        aria-haspopup="dialog"
        className="flex size-12 items-center justify-center xl:hidden"
      >
        <Menu aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink open:flex open:flex-col"
      >
        <Container>
          <div className="flex h-18 items-center justify-end">
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="flex size-12 items-center justify-center"
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile">
            <ul className="flex flex-col py-6">
              {mainNav.map((item) => (
                <li key={item.href} className="border-b border-alloy">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block py-4 font-display text-h3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ButtonLink href="/contact" onClick={close}>
            Request a Quote
          </ButtonLink>
        </Container>
      </dialog>
    </>
  );
}
