import Image from "next/image";
import Link from "next/link";
import { photos, Photos } from "@/lib/photos/photos";
import { categoryFilters } from "@/lib/projects/projects";

export type ProjectGridProps = {
  activeSlug?: string; // The ?category= value; no value or an unknown one shows all
};

const chipClass =
  "flex min-h-11 items-center rounded-xs border px-4 font-medium transition-colors motion-reduce:transition-none";
const activeChipClass = "border-ember bg-ember text-paper";
const inactiveChipClass = "border-alloy hover:border-ink";

// Filter chips and photo grid, synced to ?category= (docs/07-ui-ux-design-system.md)
// The chips are links, so filtering works without JavaScript and every filter has its own URL.
export default function ProjectGrid({ activeSlug }: ProjectGridProps) {
  const activeFilter = categoryFilters.find(
    (filter) => filter.slug === activeSlug,
  );
  const shownPhotos: Photos = activeFilter
    ? photos.filter((photo) => photo.categories.includes(activeFilter.category))
    : photos;

  return (
    <>
      <nav aria-label="Filter projects">
        <ul className="flex flex-wrap gap-3">
          <li>
            <Link
              href="/projects"
              scroll={false}
              aria-current={activeFilter ? undefined : "page"}
              className={`${chipClass} ${activeFilter ? inactiveChipClass : activeChipClass}`}
            >
              All
            </Link>
          </li>
          {categoryFilters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <li key={filter.slug}>
                <Link
                  href={`/projects?category=${filter.slug}`}
                  scroll={false}
                  aria-current={isActive ? "page" : undefined}
                  className={`${chipClass} ${isActive ? activeChipClass : inactiveChipClass}`}
                >
                  {filter.category}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <p role="status" className="mt-6 text-steel">
        Showing {shownPhotos.length} photos
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {shownPhotos.map((photo) => (
          <li
            key={photo.src}
            className="relative aspect-square overflow-hidden bg-mist"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
