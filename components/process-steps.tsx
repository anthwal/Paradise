import type { Steps } from "@/types/content";

const steps: Steps = [
  {
    title: "Enquiry",
    text: "Send a few details and photos through the quote form, or give us a call.",
  },
  {
    title: "Measure & design",
    text: "We look at the site, confirm measurements and talk through style, colour and options.",
  },
  {
    title: "Fabricate",
    text: "Your gates, panels or balustrades are made to the confirmed measurements.",
  },
  {
    title: "Install",
    text: "Everything is fitted on site, ready to use.",
  },
];

export default function ProcessSteps() {
  return (
    <ol className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="border-t border-alloy pt-6">
          {/* Decorative: the <ol> already gives the step number */}
          <span
            aria-hidden="true"
            className="block font-display text-display text-alloy font-stretch-87%"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-6 font-display text-h3">{step.title}</h3>
          <p className="mt-2 text-steel">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
