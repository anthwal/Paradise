"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox, { type SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { Photos } from "@/lib/photos/photos";

export type PhotoGalleryProps = {
  photos: Photos;
  sizes: string; // Thumbnail sizes for the grid columns
  className: string; // Grid layout classes
};

export type GallerySlides = SlideImage[];

// Square thumbnails that open a lightbox: ←/→/Esc, swipe, focus return
// (docs/07-ui-ux-design-system.md). Keyboard, swipe and focus handling come from the package.
export default function PhotoGallery({
  photos,
  sizes,
  className,
}: PhotoGalleryProps) {
  // Index of the open photo; -1 while the lightbox is closed
  const [openIndex, setOpenIndex] = useState(-1);

  const slides: GallerySlides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
  }));

  return (
    <>
      <ul className={className}>
        {photos.map((photo, index) => (
          <li
            key={photo.src}
            className="relative aspect-square overflow-hidden bg-mist"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group block size-full cursor-zoom-in"
            >
              <span className="sr-only">View larger: </span>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-103 group-focus-visible:scale-103 motion-reduce:transition-none"
              />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        open={openIndex >= 0}
        index={openIndex}
        close={() => setOpenIndex(-1)}
        slides={slides}
        render={{
          // next/image instead of a plain <img>, so the large view is resized and optimised too
          slide: ({ slide }) => (
            <div className="relative size-full">
              <Image
                src={slide.src}
                alt={slide.alt ?? ""}
                fill
                sizes="100vw"
                loading="eager"
                className="object-contain"
              />
            </div>
          ),
        }}
      />
    </>
  );
}
