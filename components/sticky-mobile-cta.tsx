"use client";

import {ButtonLink} from "@/components/button";
import ToConfirm from "@/components/to-confirm";
import {Phone} from "lucide-react";
import {business} from "@/lib/site";
import Container from "@/components/container";
import {usePathname} from "next/navigation";

export default function StickyMobileCta() {
    const pathname = usePathname();

    if (pathname === "/contact") {
        return null;
    }

    return (
        <>
            {/* Spacer so the fixed bar never covers the end of the page */}
            <div aria-hidden="true" className="h-18 md:hidden" />

            <div className="fixed inset-x-0 bottom-0 z-30 border-t border-alloy bg-paper text-ink md:hidden">
                <Container>
                    <div className="grid grid-cols-2 gap-2 py-3">
                        {business.phone ? (
                            <ButtonLink href={`tel:${business.phone.replace(/\s/g, "")}`} variant="secondary">
                                <Phone aria-hidden="true" className="size-4" />
                                Call
                            </ButtonLink>
                        ) : (
                            <p className="flex min-h-12 flex-col items-center justify-center gap-1 leading-none">
                                Call <ToConfirm />
                            </p>
                        )}
                        <ButtonLink href="/contact">Request a Quote</ButtonLink>
                    </div>
                </Container>
            </div>
        </>
    );
}