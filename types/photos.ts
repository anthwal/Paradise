// Project photos and the lightbox slides made from them

import type { SlideImage } from "yet-another-react-lightbox";
import type { ProjectCategories } from "@/types/projects";

export type Photo = {
  src: string;
  alt: string;
  categories: ProjectCategories;
};

export type Photos = Photo[];

// Lightbox slides (SlideImage comes from yet-another-react-lightbox)
export type GallerySlides = SlideImage[];
