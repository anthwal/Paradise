// Frequently asked questions shown on service pages (docs/05-website-sitemap.md)
// Content is still to be confirmed by the product owner.

export type Faq = {
  question: string;
  answer?: string; // Missing until the client supplies it
  toConfirm?: boolean; // Shows a "To confirm" tag with the answer
};

export const faqs = {
  match: {
    question: "Can my gate match my fence?",
    answer:
      "Yes. Some of our projects are complete frontages, where the driveway gate, pedestrian gate and fence panels share the same slat direction, spacing and colour.",
  },
  orientation: {
    question: "Horizontal slats or vertical blades: which should I choose?",
    answer:
      "It comes down to the house. Horizontal slats feel calm and wide and suit low, long homes. Vertical blades feel taller and more contemporary. We're happy to suggest what will suit your property.",
  },
  automation: {
    question: "Can you automate my sliding gate?",
    toConfirm: true,
  },
  colours: {
    question: "What colours are available?",
    answer:
      "Our completed projects include black, charcoal, white, silver and light grey, and a deep teal. Ask about the full colour range when you request a quote.",
    toConfirm: true,
  },
  commercial: {
    question: "Do you work on commercial and apartment projects?",
    answer:
      "Yes. Alongside residential work, our projects include façade screens on commercial buildings and balcony screens on multi-storey residential buildings. Get in touch with your plans and we'll talk it through.",
  },
  screensUse: {
    question: "Where can privacy screens be used?",
    answer:
      "Our screens have been used on balconies, over windows, around carports and across building façades. They can manage privacy, sun and outlook at the same time.",
  },
  glassOrFramed: {
    question: "Glass or framed pool fencing: what's the difference?",
    answer:
      "Frameless glass gives an open, uninterrupted view and suits waterfront and feature pools. Black framed fencing gives a strong, simple line and suits decks and garden settings. Our completed projects include both.",
  },
  poolSafety: {
    question: "Will my pool fence meet Queensland pool safety requirements?",
    toConfirm: true,
  },
  glassBalustrade: {
    question: "Do you do glass balustrades?",
    answer:
      "Yes. Our balustrade work includes glass as well as aluminium, for balconies, decks, verandahs and stairs.",
  },
  licence: {
    question: "Are you licensed and insured?",
    toConfirm: true,
  },
  quote: {
    question: "How do I get a quote?",
    answer:
      "Use the quote form or give us a call. Photos of the area, approximate sizes and the colour you have in mind help us understand the job quickly.",
  },
  drawings: {
    question: "Can I send plans or drawings?",
    answer:
      "Yes. Architect's plans, sketches or a photo of a design you like all help. Mention them in your enquiry and we'll arrange the best way to receive them.",
  },
} satisfies Record<string, Faq>;

export type FaqId = keyof typeof faqs;
