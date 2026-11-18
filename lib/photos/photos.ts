import { ProjectCategories } from "@/lib/projects/projects";

// Project photos, used by service galleries and the projects page
// (docs/prototype/image-inventory.md). Full-resolution originals will replace these files.
export type Photo = {
  src: string;
  alt: string;
  categories: ProjectCategories;
};

export type Photos = Photo[];

export const photos: Photos = [
  // Gates
  {
    src: "/images/gates/custom-05.jpg",
    alt: "Black vertical blade sliding gate across a gravel driveway",
    categories: ["Gates", "Custom"],
  },
  {
    src: "/images/gates/slatted-01.jpg",
    alt: "Horizontal slat sliding gate with matching fence panels",
    categories: ["Gates"],
  },
  {
    src: "/images/gates/custom-08.jpg",
    alt: "Black vertical blade entry gate at the top of the front steps, beside a stone-clad wall",
    categories: ["Gates", "Custom"],
  },
  {
    src: "/images/gates/slatted-09.jpg",
    alt: "Horizontal slat pedestrian gate and fence, finished with a bow",
    categories: ["Gates"],
  },
  {
    src: "/images/gates/slatted-05.jpg",
    alt: "Vertical slat pedestrian gate and fence in a deep teal finish",
    categories: ["Gates"],
  },
  {
    src: "/images/gates/slatted-06.jpg",
    alt: "Vertical slat fence with an integrated pedestrian gate",
    categories: ["Gates"],
  },
  {
    src: "/images/gates/slatted-04.jpg",
    alt: "White horizontal slat side gate",
    categories: ["Gates"],
  },
  {
    src: "/images/gates/slatted-08.jpg",
    alt: "White flush-panel sliding gate beneath a carport",
    categories: ["Gates"],
  },
  {
    src: "/images/gates/custom-03.jpg",
    alt: "Sliding gate and front fence on a contemporary home",
    categories: ["Gates", "Custom"],
  },
  {
    src: "/images/gates/custom-04.jpg",
    alt: "Street view of a coordinated front fence and entry",
    categories: ["Custom"],
  },

  // Fencing
  {
    src: "/images/fencing/custom-01.jpg",
    alt: "Black horizontal slat panels between white rendered piers",
    categories: ["Slat Fencing", "Custom"],
  },
  {
    src: "/images/fencing/custom-02.jpg",
    alt: "Horizontal slat infill panels, close view",
    categories: ["Slat Fencing", "Custom"],
  },
  {
    src: "/images/fencing/custom-06.jpg",
    alt: "Vertical blade infill panels between rendered piers",
    categories: ["Slat Fencing", "Custom"],
  },
  {
    src: "/images/fencing/custom-07.jpg",
    alt: "Black vertical blade fence panels set between white rendered piers",
    categories: ["Slat Fencing", "Custom"],
  },
  {
    src: "/images/fencing/slatted-03.jpg",
    alt: "Charcoal horizontal slat boundary fence",
    categories: ["Slat Fencing"],
  },
  {
    src: "/images/fencing/slatted-02.jpg",
    alt: "Charcoal horizontal slat front fence",
    categories: ["Slat Fencing"],
  },
  {
    src: "/images/fencing/slatted-07.jpg",
    alt: "Black horizontal slat fence along a lawn",
    categories: ["Slat Fencing"],
  },

  // Screens & awnings
  {
    src: "/images/awnings/screens-02.jpg",
    alt: "White horizontal slat screen wrapping a commercial building",
    categories: ["Screens"],
  },
  {
    src: "/images/awnings/screens-03.jpg",
    alt: "White horizontal slat screen around the upper level of a dark commercial building",
    categories: ["Screens"],
  },
  {
    src: "/images/awnings/screens-01.jpg",
    alt: "Vertical aluminium blade screen beneath a louvred overhead on a commercial building",
    categories: ["Screens"],
  },
  {
    src: "/images/awnings/screens-04.jpg",
    alt: "Horizontal aluminium louvre screen running up the façade of a multi-storey building",
    categories: ["Screens"],
  },
  {
    src: "/images/awnings/screens-07.jpg",
    alt: "Vertical blade privacy screens on apartment balconies",
    categories: ["Screens"],
  },
  {
    src: "/images/awnings/screens-08.jpg",
    alt: "Balcony screens on a multi-storey building",
    categories: ["Screens"],
  },
  {
    src: "/images/awnings/screens-06.jpg",
    alt: "Black louvred window screens",
    categories: ["Screens"],
  },
  {
    src: "/images/awnings/screens-05.jpg",
    alt: "White horizontal slat screen enclosing a carport",
    categories: ["Screens"],
  },
  {
    src: "/images/awnings/screens-09.jpg",
    alt: "Black slat privacy screens framing a balcony view",
    categories: ["Screens"],
  },

  // Pool fencing
  {
    src: "/images/pool-fencing/pool-01.jpg",
    alt: "Frameless glass pool fencing on the waterfront",
    categories: ["Pool"],
  },
  {
    src: "/images/pool-fencing/pool-04.jpg",
    alt: "Frameless glass on spigots around a tiled pool surround",
    categories: ["Pool"],
  },
  {
    src: "/images/pool-fencing/pool-05.jpg",
    alt: "Frameless glass pool fence on spigots, overlooking the water",
    categories: ["Pool"],
  },
  {
    src: "/images/pool-fencing/pool-06.jpg",
    alt: "Glass pool fence and gate, waterfront home",
    categories: ["Pool"],
  },
  {
    src: "/images/pool-fencing/pool-02.jpg",
    alt: "Glass fencing around a pool and spa",
    categories: ["Pool"],
  },
  {
    src: "/images/pool-fencing/pool-07.jpg",
    alt: "Glass pool fencing beside a timber deck",
    categories: ["Pool"],
  },
  {
    src: "/images/pool-fencing/pool-03.jpg",
    alt: "Black framed pool fence and gate on a timber deck",
    categories: ["Pool"],
  },
  {
    src: "/images/pool-fencing/pool-08.jpg",
    alt: "Black framed pool fencing around a deck",
    categories: ["Pool"],
  },
  {
    src: "/images/pool-fencing/pool-09.jpg",
    alt: "Black framed pool fencing, tropical garden",
    categories: ["Pool"],
  },

  // Balustrades
  {
    src: "/images/balustrades/balustrade-05.jpg",
    alt: "White picket balustrade on a timber deck",
    categories: ["Balustrades"],
  },
  {
    src: "/images/balustrades/balustrade-02.jpg",
    alt: "White picket balustrades on a two-storey home",
    categories: ["Balustrades"],
  },
  {
    src: "/images/balustrades/balustrade-01.jpg",
    alt: "Frameless glass balustrade with handrail",
    categories: ["Balustrades"],
  },
  {
    src: "/images/balustrades/balustrade-03.jpg",
    alt: "White picket balustrade on a tiled balcony",
    categories: ["Balustrades"],
  },
  {
    src: "/images/balustrades/balustrade-04.jpg",
    alt: "Balustrade corner on a tiled balcony",
    categories: ["Balustrades"],
  },
  {
    src: "/images/balustrades/balustrade-06.jpg",
    alt: "White picket balustrade on a verandah",
    categories: ["Balustrades"],
  },
  {
    src: "/images/balustrades/balustrade-07.jpg",
    alt: "Verandah balustrade, close view",
    categories: ["Balustrades"],
  },
  {
    src: "/images/balustrades/balustrade-08.jpg",
    alt: "Balustrade seen from inside the home",
    categories: ["Balustrades"],
  },
  {
    src: "/images/balustrades/balustrade-09.jpg",
    alt: "Balustrades across upper-level balconies",
    categories: ["Balustrades"],
  },
  {
    src: "/images/balustrades/balustrade-10.jpg",
    alt: "Balustrades on a multi-dwelling development",
    categories: ["Balustrades"],
  },
];
