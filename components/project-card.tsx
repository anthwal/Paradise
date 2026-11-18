import Link from "next/link";
import Image from "next/image";

export type ProjectCardProps = {
  href: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
};

// 4:5 photo, category label and title; the whole card is the link (docs/07-ui-ux-design-system.md)
export default function ProjectCard({
  href,
  title,
  category,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-4/5 overflow-hidden bg-mist">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 40vw, 80vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-103 group-focus-visible:scale-103 motion-reduce:transition-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 slat-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        />
      </div>
      <p className="mt-4 font-display text-eyebrow text-steel uppercase">
        {category}
      </p>
      <h3 className="mt-2 font-display text-h3">{title}</h3>
    </Link>
  );
}
