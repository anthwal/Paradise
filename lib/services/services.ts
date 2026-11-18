export type ServiceItem = { title: string; text: string };

export type Service = {
  slug: string;
  label: string;
  summary: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  options: ServiceItem[];
  applications: string[];
  considerations: ServiceItem[];
};

export type Services = Service[];

export const services: Services = [
  {
    slug: "gates",
    label: "Custom Gates",
    summary: "Sliding, swing and pedestrian gates in slat and blade designs.",
    headline: "Gates that set the tone for the whole property.",
    intro:
      "Your gate is the first thing visitors see and the thing you use every day. We design and fabricate sliding, swing and pedestrian gates to suit the opening, the house and the way you come and go, with matching fence panels when you want the frontage to read as one.",
    image: "/images/gates/slatted-01.jpg",
    imageAlt: "Horizontal slat sliding gate with matching fence panels",
    options: [
      {
        title: "Sliding driveway gates",
        text: "Slat and blade sliding gates sized to your driveway opening, with matching panels either side.",
      },
      {
        title: "Swing gates",
        text: "Single or double swing gates where the site suits an opening gate.",
      },
      {
        title: "Pedestrian & entry gates",
        text: "Front entry and side-access gates that match the driveway gate and fencing.",
      },
      {
        title: "Matching fence panels",
        text: "Panels built in the same slat or blade style, so the gate and fence line up as one design.",
      },
    ],
    applications: [
      "Driveways",
      "Front entries",
      "Side access",
      "New-build frontages",
    ],
    considerations: [
      {
        title: "Horizontal or vertical?",
        text: "Horizontal slats feel calm and wide. Vertical blades feel taller and more contemporary. Match the lines of the house.",
      },
      {
        title: "Privacy and gap size",
        text: "Tighter gaps give more privacy. Wider gaps let more light and breeze through and keep views open.",
      },
      {
        title: "Colour",
        text: "Matching window frames, roof or trims helps the gate look like part of the architecture.",
      },
      {
        title: "Day-to-day use",
        text: "Tell us how the gate will be used, how often and by whom, so the design and hardware suit.",
      },
    ],
  },
  {
    slug: "slat-fencing",
    label: "Slat Fencing & Infill Panels",
    summary:
      "Horizontal slat and vertical blade fencing, plus infill panels between piers.",
    headline: "Clean lines from one end of the boundary to the other.",
    intro:
      "Slat and blade fencing gives a property privacy and presence without feeling closed in. We build horizontal slat fences, vertical blade fences and infill panels that sit between rendered or masonry piers, measured to each bay so the spacing stays consistent.",
    image: "/images/fencing/custom-01.jpg",
    imageAlt: "Black horizontal slat panels between white rendered piers",
    options: [
      {
        title: "Horizontal slat fencing",
        text: "Even, horizontal lines for front fences and boundaries, a look that suits most modern homes.",
      },
      {
        title: "Vertical blade fencing",
        text: "Tall, slim blades for a crisp, architectural frontage.",
      },
      {
        title: "Infill panels between piers",
        text: "Panels made to fit each bay between rendered or masonry piers.",
      },
      {
        title: "Front & boundary fences",
        text: "Street frontages and side boundaries, built to coordinate with your gates.",
      },
    ],
    applications: [
      "Front fences",
      "Boundary fences",
      "Rendered pier infills",
      "Courtyards",
      "New builds",
    ],
    considerations: [
      {
        title: "Pier spacing",
        text: "Bays between piers are rarely identical, so each panel is made to its own opening.",
      },
      {
        title: "Slat direction",
        text: "Choose horizontal or vertical to suit the house, and carry it through to the gates.",
      },
      {
        title: "How private?",
        text: "Decide how much you want to see through. It sets the gap between slats.",
      },
      {
        title: "Colour against render",
        text: "Dark slats against white render create strong contrast. Lighter tones blend in.",
      },
    ],
  },
  {
    slug: "privacy-screens-awnings",
    label: "Privacy Screens & Awnings",
    summary:
      "Slat, blade and louvred screens for homes, balconies and building façades.",
    headline: "Privacy, shade and a finished look, from carports to façades.",
    intro:
      "Screens control privacy, light and outlook while adding a strong architectural element. Our work ranges from carport and balcony screens on homes to louvred window screens and large façade and balcony screens on commercial and apartment buildings.",
    image: "/images/awnings/screens-02.jpg",
    imageAlt: "White horizontal slat screen wrapping a commercial building",
    options: [
      {
        title: "Slat privacy screens",
        text: "Horizontal slat screens for carports, courtyards, decks and boundaries.",
      },
      {
        title: "Vertical blade screens",
        text: "Slim vertical blades that filter light and views.",
      },
      {
        title: "Louvred window screens",
        text: "Louvred screens fixed over windows to manage sun and privacy.",
      },
      {
        title: "Façade & balcony screens",
        text: "Screening for commercial and multi-storey residential buildings.",
      },
    ],
    applications: [
      "Balconies",
      "Windows",
      "Carports",
      "Building façades",
      "Apartments",
    ],
    considerations: [
      {
        title: "Sun and outlook",
        text: "Think about which way the screen faces and what you want to see, or not see, through it.",
      },
      {
        title: "Fixed or louvred",
        text: "Slats give a consistent look. Louvres angle the view and the light.",
      },
      {
        title: "Building requirements",
        text: "For apartments and commercial buildings, let us know about any body corporate or design guidelines.",
      },
      {
        title: "Colour",
        text: "Screens can blend into the façade or become a feature colour.",
      },
    ],
  },
  {
    slug: "pool-fencing",
    label: "Pool Fencing",
    summary:
      "Frameless glass and black framed pool fencing, with gates to match.",
    headline: "Pool fencing that keeps the view and the peace of mind.",
    intro:
      "A pool fence has an important job to do, and it should look good doing it. Our pool fencing work includes frameless glass for an open, uninterrupted outlook, and black framed fencing for a strong, simple line around decks and gardens.",
    image: "/images/pool-fencing/pool-01.jpg",
    imageAlt: "Frameless glass pool fencing on the waterfront",
    options: [
      {
        title: "Frameless glass",
        text: "Glass panels on spigots for a clear, open view across the pool.",
      },
      {
        title: "Black framed pool fencing",
        text: "Black framed fencing that suits decks, gardens and tropical settings.",
      },
      {
        title: "Pool gates",
        text: "Gates that match the fence, in glass or framed styles.",
      },
      {
        title: "Decks & tiled surrounds",
        text: "Fencing on timber decks, pavers and tiled pool surrounds.",
      },
    ],
    applications: [
      "In-ground pools",
      "Above-ground pools",
      "Spas",
      "Waterfront homes",
      "Decks",
    ],
    considerations: [
      {
        title: "Glass or framed",
        text: "Glass keeps the view open. Framed fencing gives a simple, strong line around gardens and decks.",
      },
      {
        title: "The setting",
        text: "Waterfront and garden pools suit different looks. We'll talk through what works best for yours.",
      },
      {
        title: "Pool safety rules",
        text: "Queensland has specific pool safety requirements. We'll discuss your pool when we quote.",
      },
      {
        title: "Access",
        text: "Think about where people come and go, and where the gate should sit.",
      },
    ],
  },
  {
    slug: "balustrades",
    label: "Balustrades",
    summary:
      "Aluminium and glass balustrades for decks, balconies, verandahs and stairs.",
    headline: "Balustrades that frame the view and finish the house.",
    intro:
      "Balustrades shape the look of a home from the street and the feel of every balcony and deck. Our balustrade work includes aluminium and glass balustrades for decks, balconies, verandahs and stairs, on single homes and multi-dwelling developments.",
    image: "/images/balustrades/balustrade-05.jpg",
    imageAlt: "White picket balustrade on a timber deck",
    options: [
      {
        title: "Aluminium balustrades",
        text: "Picket-style balustrades, shown here in white, for a crisp, classic finish.",
      },
      {
        title: "Glass balustrades",
        text: "Glass with a handrail for an open outlook from balconies and terraces.",
      },
      {
        title: "Stairs & entries",
        text: "Balustrades for front stairs and entry porches.",
      },
      {
        title: "Multi-dwelling projects",
        text: "Consistent balustrades across townhouse and duplex developments.",
      },
    ],
    applications: ["Balconies", "Decks", "Verandahs", "Stairs", "Townhouses"],
    considerations: [
      {
        title: "View or privacy",
        text: "Glass keeps the outlook open. Pickets add rhythm and some privacy.",
      },
      {
        title: "The style of the house",
        text: "Classic homes often suit pickets. Contemporary homes often suit glass or slim profiles.",
      },
      {
        title: "Fixing surface",
        text: "Timber decks, tiles and concrete each need different fixings. Let us know the surface when you enquire.",
      },
      {
        title: "Colour",
        text: "Matching window frames and trims keeps the balustrade looking part of the house.",
      },
    ],
  },
  {
    slug: "custom-fabrication",
    label: "Custom Fabrication & Enclosures",
    summary: "Complete frontage packages, enclosures and one-off metalwork.",
    headline: "When standard won't do, we make it to suit.",
    intro:
      "Some projects need more than one product. Others need something that doesn't exist yet. We take on complete frontages, with driveway gate, entry gate and fence panels designed together, as well as enclosures and one-off pieces made to your requirements.",
    image: "/images/gates/custom-03.jpg",
    imageAlt: "Sliding gate and front fence on a contemporary home",
    options: [
      {
        title: "Complete frontages",
        text: "Driveway gate, pedestrian gate and fence panels designed and built as one package.",
      },
      {
        title: "Enclosures & side gates",
        text: "Slatted enclosures and side gates that tidy up services and side access.",
      },
      {
        title: "Coordinated finishes",
        text: "One colour and slat style carried across gates, fencing and screens.",
      },
      {
        title: "One-off pieces",
        text: "Tell us what you need and we'll let you know if it's something we can make.",
      },
    ],
    applications: [
      "New builds",
      "Renovations",
      "Street frontages",
      "Side access",
    ],
    considerations: [
      {
        title: "Start with the whole frontage",
        text: "Designing gates and fences together gives the most consistent result.",
      },
      {
        title: "Plans and sketches",
        text: "Architect's drawings, a sketch or a photo of something you like all help.",
      },
      {
        title: "Timing",
        text: "On new builds, let us know where the job sits in the build program.",
      },
      {
        title: "Finish",
        text: "Choose one colour and slat style and carry it right through.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
