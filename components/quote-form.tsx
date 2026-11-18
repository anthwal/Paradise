import Link from "next/link";
import { Button } from "@/components/button";
import { services } from "@/lib/services/services";

export type QuoteFormProps = {
  selectedService?: string; // ?service= value from a service, project or builders page
};

export type ServiceOption = { value: string; label: string };

export type ServiceOptions = ServiceOption[];

// Every service, plus the builders and commercial pathway (docs/06-user-journeys.md J3)
const serviceOptions: ServiceOptions = [
  ...services.map((service) => ({
    value: service.slug,
    label: service.label,
  })),
  { value: "builders-commercial", label: "Builder / commercial project" },
];

export type PropertyTypes = string[];

const propertyTypes: PropertyTypes = [
  "Home",
  "New build",
  "Builder / developer",
  "Commercial / strata",
];

const labelClass = "block font-medium";
const optionalClass = "font-normal text-steel";
const fieldClass =
  "mt-2 block w-full rounded-xs border border-alloy bg-paper px-4 text-ink placeholder:text-steel focus-visible:border-ink";
const hintClass = "mt-2 text-sm text-steel";

// Quote request form (docs/07-ui-ux-design-system.md QuoteForm).
// Layout only: validation and sending are added in a later step.
export default function QuoteForm({ selectedService }: QuoteFormProps) {
  // An unknown ?service= value falls back to the "Select a service" placeholder
  const defaultService = serviceOptions.some(
    (option) => option.value === selectedService,
  )
    ? selectedService
    : "";

  return (
    <form method="post" className="grid gap-6 md:grid-cols-2">
      <div>
        <label htmlFor="quote-name" className={labelClass}>
          Full name
        </label>
        <input
          id="quote-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={`${fieldClass} min-h-12`}
        />
      </div>

      <div>
        <label htmlFor="quote-phone" className={labelClass}>
          Phone
        </label>
        <input
          id="quote-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
          aria-describedby="quote-phone-hint"
          className={`${fieldClass} min-h-12`}
        />
        <p id="quote-phone-hint" className={hintClass}>
          Mobile or landline
        </p>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="quote-email" className={labelClass}>
          Email
        </label>
        <input
          id="quote-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={`${fieldClass} min-h-12`}
        />
      </div>

      <div>
        <label htmlFor="quote-service" className={labelClass}>
          Service required
        </label>
        <select
          id="quote-service"
          name="service"
          required
          defaultValue={defaultService}
          className={`${fieldClass} min-h-12`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="quote-suburb" className={labelClass}>
          Project suburb
        </label>
        <input
          id="quote-suburb"
          name="suburb"
          type="text"
          autoComplete="address-level2"
          required
          className={`${fieldClass} min-h-12`}
        />
      </div>

      <fieldset className="md:col-span-2">
        <legend className={labelClass}>
          Property type <span className={optionalClass}>(optional)</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
          {propertyTypes.map((type) => (
            <label key={type} className="flex min-h-11 items-center gap-2">
              <input
                type="radio"
                name="propertyType"
                value={type}
                className="size-4 accent-ink"
              />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="md:col-span-2">
        <label htmlFor="quote-message" className={labelClass}>
          Project description <span className={optionalClass}>(optional)</span>
        </label>
        <textarea
          id="quote-message"
          name="message"
          rows={5}
          maxLength={1500}
          aria-describedby="quote-message-hint"
          placeholder="For example: sliding gate and two fence panels across a 6 m driveway, black, to match the house."
          className={`${fieldClass} py-3`}
        />
        <p id="quote-message-hint" className={hintClass}>
          Up to 1500 characters. Approximate sizes, colours and timing all help.
        </p>
      </div>

      <div className="flex flex-col items-start gap-4 border-t border-alloy pt-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-steel">
          We only use your details to respond to your enquiry. See our{" "}
          <Link href="/privacy" className="underline underline-offset-4">
            privacy policy
          </Link>
          .
        </p>
        <Button type="submit">Send enquiry</Button>
      </div>
    </form>
  );
}
