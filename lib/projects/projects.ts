// Completed projects with their own page (docs/05-website-sitemap.md: /projects/[slug])
// Content is still to be confirmed by the product owner.

export type ProjectCategory =
  "Gates" | "Slat Fencing" | "Screens" | "Pool" | "Balustrades" | "Custom";

export type ProjectCategories = ProjectCategory[];

// A gallery filter: the category and its value in the URL (?category=slug)
export type CategoryFilter = { slug: string; category: ProjectCategory };

export type CategoryFilters = CategoryFilter[];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  image: string;
  imageAlt: string;
  featured: boolean;
};

export type Projects = Project[];

export const projects: Projects = [
  {
    slug: "blade-frontage",
    title: "Vertical blade frontage",
    category: "Custom",
    image: "/images/gates/custom-08.jpg",
    imageAlt:
      "Black vertical blade entry gate at the top of the front steps, beside a stone-clad wall",
    featured: true,
  },
  {
    slug: "slat-frontage",
    title: "Horizontal slat frontage",
    category: "Slat Fencing",
    image: "/images/fencing/custom-01.jpg",
    imageAlt: "Black horizontal slat panels between white rendered piers",
    featured: false,
  },
  {
    slug: "commercial-screen",
    title: "Commercial façade screen",
    category: "Screens",
    image: "/images/awnings/screens-03.jpg",
    imageAlt:
      "White horizontal slat screen around the upper level of a dark commercial building",
    featured: true,
  },
  {
    slug: "waterfront-glass",
    title: "Waterfront glass pool fence",
    category: "Pool",
    image: "/images/pool-fencing/pool-05.jpg",
    imageAlt: "Frameless glass pool fence on spigots, overlooking the water",
    featured: true,
  },
];

// Gallery filters on /projects, in the order of docs/07-ui-ux-design-system.md ("All" is no filter)
export const categoryFilters: CategoryFilters = [
  { slug: "gates", category: "Gates" },
  { slug: "slat-fencing", category: "Slat Fencing" },
  { slug: "screens", category: "Screens" },
  { slug: "pool", category: "Pool" },
  { slug: "balustrades", category: "Balustrades" },
  { slug: "custom", category: "Custom" },
];
