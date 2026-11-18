// Completed projects with their own page (docs/05-website-sitemap.md: /projects/[slug])
// Content is still to be confirmed by the product owner.

import type { CategoryFilters, Projects } from "@/types/projects";

export const projects: Projects = [
  {
    slug: "blade-frontage",
    title: "Vertical blade frontage",
    category: "Custom",
    image: "/images/gates/custom-08.jpg",
    imageAlt:
      "Black vertical blade entry gate at the top of the front steps, beside a stone-clad wall",
    featured: true,
    setting: "Residential",
    story:
      "A complete street frontage built around one idea: slim vertical blades in black. The sliding driveway gate, the pedestrian entry gate and the infill panels between the rendered piers all share the same line, giving the white façade a crisp, unified edge.",
    facts: [
      {
        label: "Scope",
        value: "Sliding gate, entry gate, fence infill panels",
      },
      { label: "Style", value: "Vertical blades" },
      { label: "Finish", value: "Black" },
      { label: "Location", value: null },
    ],
    photoSources: [
      "/images/gates/custom-05.jpg",
      "/images/fencing/custom-07.jpg",
      "/images/gates/custom-08.jpg",
      "/images/fencing/custom-06.jpg",
      "/images/gates/custom-03.jpg",
      "/images/gates/custom-04.jpg",
    ],
    metaDescription:
      "A complete street frontage in black vertical blades: sliding gate, entry gate and infill panels sharing one line. See the project photos.",
  },
  {
    slug: "slat-frontage",
    title: "Horizontal slat frontage",
    category: "Slat Fencing",
    image: "/images/fencing/custom-01.jpg",
    imageAlt: "Black horizontal slat panels between white rendered piers",
    featured: false,
    setting: "Residential",
    story:
      "Wide-spaced black horizontal slats set between white rendered piers. The open spacing keeps the frontage light while the strong horizontal lines tie in with the low, hipped roofline behind.",
    facts: [
      { label: "Scope", value: "Slat infill panels between piers" },
      { label: "Style", value: "Horizontal slats, open spacing" },
      { label: "Finish", value: "Black" },
      { label: "Location", value: null },
    ],
    photoSources: [
      "/images/fencing/custom-01.jpg",
      "/images/fencing/custom-02.jpg",
    ],
    metaDescription:
      "Wide-spaced black horizontal slat panels between white rendered piers, keeping the frontage light. See the project photos.",
  },
  {
    slug: "commercial-screen",
    title: "Commercial façade screen",
    category: "Screens",
    image: "/images/awnings/screens-03.jpg",
    imageAlt:
      "White horizontal slat screen around the upper level of a dark commercial building",
    featured: true,
    setting: "Commercial",
    story:
      "A white horizontal slat screen wraps the upper level of a commercial building, adding shade and privacy and giving the dark façade a strong graphic band.",
    facts: [
      { label: "Scope", value: "Façade screen to upper level" },
      { label: "Style", value: "Horizontal slats" },
      { label: "Finish", value: "White" },
      { label: "Location", value: null },
    ],
    photoSources: [
      "/images/awnings/screens-02.jpg",
      "/images/awnings/screens-03.jpg",
    ],
    metaDescription:
      "A white horizontal slat screen wrapping the upper level of a commercial building, for shade and privacy. See the project photos.",
  },
  {
    slug: "waterfront-glass",
    title: "Waterfront glass pool fence",
    category: "Pool",
    image: "/images/pool-fencing/pool-05.jpg",
    imageAlt: "Frameless glass pool fence on spigots, overlooking the water",
    featured: true,
    setting: "Residential",
    story:
      "Frameless glass on spigots keeps the water view open from the pool area, with a glass gate to match.",
    facts: [
      { label: "Scope", value: "Frameless glass pool fence and gate" },
      { label: "Style", value: "Glass on spigots" },
      { label: "Finish", value: "Clear glass" },
      { label: "Location", value: null },
    ],
    photoSources: [
      "/images/pool-fencing/pool-05.jpg",
      "/images/pool-fencing/pool-06.jpg",
    ],
    metaDescription:
      "Frameless glass pool fencing on spigots with a matching glass gate, keeping the water view open. See the project photos.",
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

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
