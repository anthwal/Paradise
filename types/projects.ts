// Completed projects and their gallery categories

export type ProjectCategory =
  "Gates" | "Slat Fencing" | "Screens" | "Pool" | "Balustrades" | "Custom";

export type ProjectCategories = ProjectCategory[];

// A gallery filter: the category and its value in the URL (?category=slug)
export type CategoryFilter = { slug: string; category: ProjectCategory };

export type CategoryFilters = CategoryFilter[];

// A row in the project's facts list; a null value shows a "To confirm" tag
export type ProjectFact = { label: string; value: string | null };

export type ProjectFacts = ProjectFact[];

// Paths of photos in lib/photos/photos.ts
export type PhotoSources = string[];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  image: string;
  imageAlt: string;
  featured: boolean;
  setting: string; // Residential, Commercial, …
  story: string;
  facts: ProjectFacts;
  photoSources: PhotoSources;
  metaDescription: string; // Search result description, 155 characters or fewer
};

export type Projects = Project[];
