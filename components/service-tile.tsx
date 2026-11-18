import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export type ServiceTileProps = {
  href: string;
  title: string;
  image: string;
  imageAlt: string;
  sizes?: string; // Defaults to the home page's 7/5 grid
  summary?: string; // Short description under the title
};

// Photo with a title bar; the whole tile is the link (docs/07-ui-ux-design-system.md)
export default function ServiceTile({
  href,
  title,
  image,
  imageAlt,
  sizes = "(min-width: 1024px) 60vw, (min-width: 768px) 50vw, 100vw",
  summary,
}: ServiceTileProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-4/3 overflow-hidden bg-mist lg:aspect-auto lg:h-96">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-103 group-focus-visible:scale-103 motion-reduce:transition-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 slat-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        />
      </div>
      <div
        className={`flex justify-between gap-4 border-b border-alloy py-4 ${summary ? "items-start" : "items-center"}`}
      >
        <div>
          <h3 className="font-display text-h3">{title}</h3>
          {summary && <p className="mt-1 text-steel">{summary}</p>}
        </div>
        <ArrowRight
          aria-hidden="true"
          className="size-5 shrink-0 text-ember transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
        />
      </div>
    </Link>
  );
}
