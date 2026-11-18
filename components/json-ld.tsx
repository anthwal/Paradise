import type { Thing, WithContext } from "schema-dts";

export type JsonLdProps = {
  data: WithContext<Thing>;
};

// Structured data as a native <script> tag (node_modules/next/dist/docs/01-app/02-guides/json-ld.md).
// "<" is escaped so text in the data can never close the script tag.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
