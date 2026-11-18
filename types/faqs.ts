// Frequently asked questions

import type { faqs } from "@/lib/faqs/faqs";

export type Faq = {
  question: string;
  answer?: string; // Missing until the client supplies it
  toConfirm?: boolean; // Shows a "To confirm" tag with the answer
};

export type Faqs = Faq[];

// The keys of the FAQ data, so a mistyped FAQ id fails to compile
export type FaqId = keyof typeof faqs;

export type FaqIds = FaqId[];
