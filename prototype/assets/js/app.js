/* Paradise Fabrication & Fencing — website prototype
   Vanilla JS. Works from a local file (hash routing, no fetch). */
(function () {
  "use strict";

  /* ======================================================
     CONTENT DATA
     Captions describe only what is visible in each photo.
     ====================================================== */
  var IMG = "assets/images/";
  var CAT_LABEL = {
    gates: "Gates",
    fencing: "Slat fencing",
    screens: "Screens & awnings",
    pool: "Pool fencing",
    balustrades: "Balustrades",
    custom: "Custom projects"
  };

  // id, path, categories, caption, setting
  var PHOTOS = [
    ["custom-05", "gates/custom-05.jpg", ["gates", "custom"], "Black vertical blade sliding gate across a gravel driveway", "Residential", "wide"],
    ["slatted-01", "gates/slatted-01.jpg", ["gates"], "Horizontal slat sliding gate with matching fence panels", "Residential"],
    ["custom-08", "gates/custom-08.jpg", ["gates", "custom"], "Vertical blade pedestrian gate at a stone-clad entry", "Residential", "tall"],
    ["slatted-09", "gates/slatted-09.jpg", ["gates"], "Horizontal slat pedestrian gate and fence, finished with a bow", "Residential"],
    ["slatted-05", "gates/slatted-05.jpg", ["gates"], "Vertical slat pedestrian gate and fence in a deep teal finish", "Residential"],
    ["slatted-06", "gates/slatted-06.jpg", ["gates"], "Vertical slat fence with an integrated pedestrian gate", "Residential"],
    ["slatted-04", "gates/slatted-04.jpg", ["gates"], "White horizontal slat side gate", "Residential"],
    ["slatted-08", "gates/slatted-08.jpg", ["gates"], "White flush-panel sliding gate beneath a carport", "Residential"],
    ["custom-03", "gates/custom-03.jpg", ["gates", "custom"], "Sliding gate and front fence on a contemporary home", "Residential"],
    ["custom-04", "gates/custom-04.jpg", ["custom"], "Street view of a coordinated front fence and entry", "Residential"],
    ["custom-01", "fencing/custom-01.jpg", ["fencing", "custom"], "Black horizontal slat panels between white rendered piers", "Residential", "wide"],
    ["custom-02", "fencing/custom-02.jpg", ["fencing", "custom"], "Horizontal slat infill panels, close view", "Residential"],
    ["custom-06", "fencing/custom-06.jpg", ["fencing", "custom"], "Vertical blade infill panels between rendered piers", "Residential"],
    ["custom-07", "fencing/custom-07.jpg", ["fencing", "custom"], "Vertical blade fencing in black", "Residential", "tall"],
    ["slatted-03", "fencing/slatted-03.jpg", ["fencing"], "Charcoal horizontal slat boundary fence", "Residential"],
    ["slatted-02", "fencing/slatted-02.jpg", ["fencing"], "Charcoal horizontal slat front fence", "Residential"],
    ["slatted-07", "fencing/slatted-07.jpg", ["fencing"], "Black horizontal slat fence along a lawn", "Residential"],
    ["screens-02", "awnings/screens-02.jpg", ["screens"], "White horizontal slat screen wrapping a commercial building", "Commercial", "wide"],
    ["screens-03", "awnings/screens-03.jpg", ["screens"], "Commercial slat screen, second view", "Commercial"],
    ["screens-01", "awnings/screens-01.jpg", ["screens"], "Vertical blade screen", "Commercial"],
    ["screens-04", "awnings/screens-04.jpg", ["screens"], "Louvred screen panel on a multi-storey façade", "Multi-residential", "tall"],
    ["screens-07", "awnings/screens-07.jpg", ["screens"], "Vertical blade privacy screens on apartment balconies", "Multi-residential"],
    ["screens-08", "awnings/screens-08.jpg", ["screens"], "Balcony screens on a multi-storey building", "Multi-residential"],
    ["screens-06", "awnings/screens-06.jpg", ["screens"], "Black louvred window screens", "Residential"],
    ["screens-05", "awnings/screens-05.jpg", ["screens"], "White horizontal slat screen enclosing a carport", "Residential"],
    ["screens-09", "awnings/screens-09.jpg", ["screens"], "Black slat privacy screens framing a balcony view", "Residential"],
    ["pool-01", "pool-fencing/pool-01.jpg", ["pool"], "Frameless glass pool fencing on the waterfront", "Residential", "wide"],
    ["pool-04", "pool-fencing/pool-04.jpg", ["pool"], "Frameless glass on spigots around a tiled pool surround", "Residential"],
    ["pool-05", "pool-fencing/pool-05.jpg", ["pool"], "Frameless glass panels and spigots, waterfront home", "Residential"],
    ["pool-06", "pool-fencing/pool-06.jpg", ["pool"], "Glass pool fence and gate, waterfront home", "Residential"],
    ["pool-02", "pool-fencing/pool-02.jpg", ["pool"], "Glass fencing around a pool and spa", "Residential"],
    ["pool-07", "pool-fencing/pool-07.jpg", ["pool"], "Glass pool fencing beside a timber deck", "Residential"],
    ["pool-03", "pool-fencing/pool-03.jpg", ["pool"], "Black framed pool fence and gate on a timber deck", "Residential"],
    ["pool-08", "pool-fencing/pool-08.jpg", ["pool"], "Black framed pool fencing around a deck", "Residential"],
    ["pool-09", "pool-fencing/pool-09.jpg", ["pool"], "Black framed pool fencing, tropical garden", "Residential", "tall"],
    ["balustrade-05", "balustrades/balustrade-05.jpg", ["balustrades"], "White picket balustrade on a timber deck", "Residential", "wide"],
    ["balustrade-02", "balustrades/balustrade-02.jpg", ["balustrades"], "White picket balustrades on a two-storey home", "Residential"],
    ["balustrade-01", "balustrades/balustrade-01.jpg", ["balustrades"], "Frameless glass balustrade with handrail", "Residential"],
    ["balustrade-03", "balustrades/balustrade-03.jpg", ["balustrades"], "White picket balustrade on a tiled balcony", "Residential"],
    ["balustrade-04", "balustrades/balustrade-04.jpg", ["balustrades"], "Balustrade corner on a tiled balcony", "Residential"],
    ["balustrade-06", "balustrades/balustrade-06.jpg", ["balustrades"], "White picket balustrade on a verandah", "Residential"],
    ["balustrade-07", "balustrades/balustrade-07.jpg", ["balustrades"], "Verandah balustrade, close view", "Residential"],
    ["balustrade-08", "balustrades/balustrade-08.jpg", ["balustrades"], "Balustrade seen from inside the home", "Residential"],
    ["balustrade-09", "balustrades/balustrade-09.jpg", ["balustrades"], "Balustrades across upper-level balconies", "Residential"],
    ["balustrade-10", "balustrades/balustrade-10.jpg", ["balustrades"], "Balustrades on a multi-dwelling development", "Multi-residential"]
  ].map(function (p) {
    return { id: p[0], src: IMG + p[1], cats: p[2], title: p[3], setting: p[4], shape: p[5] || "" };
  });
  var PHOTO = {};
  PHOTOS.forEach(function (p) { PHOTO[p.id] = p; });

  var SERVICES = [
    {
      slug: "gates", cat: "gates", title: "Custom Gates", nav: "Custom gates",
      summary: "Sliding, swing and pedestrian gates in slat and blade designs.",
      headline: "Gates that set the tone for the whole property.",
      intro: "Your gate is the first thing visitors see and the thing you use every day. We design and fabricate sliding, swing and pedestrian gates to suit the opening, the house and the way you come and go, with matching fence panels when you want the frontage to read as one.",
      hero: ["custom-05", "slatted-01", "custom-08"],
      options: [
        ["Sliding driveway gates", "Slat and blade sliding gates sized to your driveway opening, with matching panels either side."],
        ["Swing gates", "Single or double swing gates where the site suits an opening gate."],
        ["Pedestrian & entry gates", "Front entry and side-access gates that match the driveway gate and fencing."],
        ["Matching fence panels", "Panels built in the same slat or blade style, so the gate and fence line up as one design."]
      ],
      apps: ["Driveways", "Front entries", "Side access", "New-build frontages"],
      consider: [
        ["Horizontal or vertical?", "Horizontal slats feel calm and wide. Vertical blades feel taller and more contemporary. Match the lines of the house."],
        ["Privacy and gap size", "Tighter gaps give more privacy. Wider gaps let more light and breeze through and keep views open."],
        ["Colour", "Matching window frames, roof or trims helps the gate look like part of the architecture."],
        ["Day-to-day use", "Tell us how the gate will be used, how often and by whom, so the design and hardware suit."]
      ],
      faqs: ["match", "orientation", "automation", "colours"]
    },
    {
      slug: "slat-fencing", cat: "fencing", title: "Slat Fencing & Infill Panels", nav: "Slat fencing",
      summary: "Horizontal slat and vertical blade fencing, plus infill panels between piers.",
      headline: "Clean lines from one end of the boundary to the other.",
      intro: "Slat and blade fencing gives a property privacy and presence without feeling closed in. We build horizontal slat fences, vertical blade fences and infill panels that sit between rendered or masonry piers, measured to each bay so the spacing stays consistent.",
      hero: ["custom-01", "slatted-03", "custom-07"],
      options: [
        ["Horizontal slat fencing", "Even, horizontal lines for front fences and boundaries, a look that suits most modern homes."],
        ["Vertical blade fencing", "Tall, slim blades for a crisp, architectural frontage."],
        ["Infill panels between piers", "Panels made to fit each bay between rendered or masonry piers."],
        ["Front & boundary fences", "Street frontages and side boundaries, built to coordinate with your gates."]
      ],
      apps: ["Front fences", "Boundary fences", "Rendered pier infills", "Courtyards", "New builds"],
      consider: [
        ["Pier spacing", "Bays between piers are rarely identical, so each panel is made to its own opening."],
        ["Slat direction", "Choose horizontal or vertical to suit the house, and carry it through to the gates."],
        ["How private?", "Decide how much you want to see through. It sets the gap between slats."],
        ["Colour against render", "Dark slats against white render create strong contrast. Lighter tones blend in."]
      ],
      faqs: ["match", "orientation", "colours", "quote"]
    },
    {
      slug: "screens-awnings", cat: "screens", title: "Privacy Screens & Awnings", nav: "Screens & awnings",
      summary: "Slat, blade and louvred screens for homes, balconies and building façades.",
      headline: "Privacy, shade and a finished look, from carports to façades.",
      intro: "Screens control privacy, light and outlook while adding a strong architectural element. Our work ranges from carport and balcony screens on homes to louvred window screens and large façade and balcony screens on commercial and apartment buildings.",
      hero: ["screens-02", "screens-07", "screens-06"],
      options: [
        ["Slat privacy screens", "Horizontal slat screens for carports, courtyards, decks and boundaries."],
        ["Vertical blade screens", "Slim vertical blades that filter light and views."],
        ["Louvred window screens", "Louvred screens fixed over windows to manage sun and privacy."],
        ["Façade & balcony screens", "Screening for commercial and multi-storey residential buildings."]
      ],
      apps: ["Balconies", "Windows", "Carports", "Building façades", "Apartments"],
      consider: [
        ["Sun and outlook", "Think about which way the screen faces and what you want to see, or not see, through it."],
        ["Fixed or louvred", "Slats give a consistent look. Louvres angle the view and the light."],
        ["Building requirements", "For apartments and commercial buildings, let us know about any body corporate or design guidelines."],
        ["Colour", "Screens can blend into the façade or become a feature colour."]
      ],
      faqs: ["commercial", "screens-use", "colours", "quote"]
    },
    {
      slug: "pool-fencing", cat: "pool", title: "Pool Fencing", nav: "Pool fencing",
      summary: "Frameless glass and black framed pool fencing, with gates to match.",
      headline: "Pool fencing that keeps the view and the peace of mind.",
      intro: "A pool fence has an important job to do, and it should look good doing it. Our pool fencing work includes frameless glass for an open, uninterrupted outlook, and black framed fencing for a strong, simple line around decks and gardens.",
      hero: ["pool-01", "pool-04", "pool-09"],
      options: [
        ["Frameless glass", "Glass panels on spigots for a clear, open view across the pool."],
        ["Black framed pool fencing", "Black framed fencing that suits decks, gardens and tropical settings."],
        ["Pool gates", "Gates that match the fence, in glass or framed styles."],
        ["Decks & tiled surrounds", "Fencing on timber decks, pavers and tiled pool surrounds."]
      ],
      apps: ["In-ground pools", "Above-ground pools", "Spas", "Waterfront homes", "Decks"],
      consider: [
        ["Glass or framed", "Glass keeps the view open. Framed fencing gives a simple, strong line around gardens and decks."],
        ["The setting", "Waterfront and garden pools suit different looks. We'll talk through what works best for yours."],
        ["Pool safety rules", "Queensland has specific pool safety requirements. We'll discuss your pool when we quote."],
        ["Access", "Think about where people come and go, and where the gate should sit."]
      ],
      faqs: ["glass-or-alu", "compliance", "colours", "quote"]
    },
    {
      slug: "balustrades", cat: "balustrades", title: "Balustrades", nav: "Balustrades",
      summary: "Aluminium and glass balustrades for decks, balconies, verandahs and stairs.",
      headline: "Balustrades that frame the view and finish the house.",
      intro: "Balustrades shape the look of a home from the street and the feel of every balcony and deck. Our balustrade work includes aluminium and glass balustrades for decks, balconies, verandahs and stairs, on single homes and multi-dwelling developments.",
      hero: ["balustrade-05", "balustrade-02", "balustrade-01"],
      options: [
        ["Aluminium balustrades", "Picket-style balustrades, shown here in white, for a crisp, classic finish."],
        ["Glass balustrades", "Glass with a handrail for an open outlook from balconies and terraces."],
        ["Stairs & entries", "Balustrades for front stairs and entry porches."],
        ["Multi-dwelling projects", "Consistent balustrades across townhouse and duplex developments."]
      ],
      apps: ["Balconies", "Decks", "Verandahs", "Stairs", "Townhouses"],
      consider: [
        ["View or privacy", "Glass keeps the outlook open. Pickets add rhythm and some privacy."],
        ["The style of the house", "Classic homes often suit pickets. Contemporary homes often suit glass or slim profiles."],
        ["Fixing surface", "Timber decks, tiles and concrete each need different fixings. Let us know the surface when you enquire."],
        ["Colour", "Matching window frames and trims keeps the balustrade looking part of the house."]
      ],
      faqs: ["glass-balustrade", "colours", "licence", "quote"]
    },
    {
      slug: "custom-fabrication", cat: "custom", title: "Custom Fabrication", nav: "Custom fabrication",
      summary: "Complete frontage packages, enclosures and one-off metalwork.",
      headline: "When standard won't do, we make it to suit.",
      intro: "Some projects need more than one product. Others need something that doesn't exist yet. We take on complete frontages, with driveway gate, entry gate and fence panels designed together, as well as enclosures and one-off pieces made to your requirements.",
      hero: ["custom-03", "custom-08", "slatted-04"],
      options: [
        ["Complete frontages", "Driveway gate, pedestrian gate and fence panels designed and built as one package."],
        ["Enclosures & side gates", "Slatted enclosures and side gates that tidy up services and side access."],
        ["Coordinated finishes", "One colour and slat style carried across gates, fencing and screens."],
        ["One-off pieces", "Tell us what you need and we'll let you know if it's something we can make."]
      ],
      apps: ["New builds", "Renovations", "Street frontages", "Side access"],
      consider: [
        ["Start with the whole frontage", "Designing gates and fences together gives the most consistent result."],
        ["Plans and sketches", "Architect's drawings, a sketch or a photo of something you like all help."],
        ["Timing", "On new builds, let us know where the job sits in the build program."],
        ["Finish", "Choose one colour and slat style and carry it right through."]
      ],
      faqs: ["match", "commercial", "drawings", "quote"]
    }
  ];
  var SERVICE = {};
  SERVICES.forEach(function (s) { SERVICE[s.slug] = s; });

  var STORIES = [
    {
      id: "blade-frontage", spec: "Custom project · Residential",
      title: "Vertical blade frontage",
      text: "A complete street frontage built around one idea: slim vertical blades in black. The sliding driveway gate, the pedestrian entry gate and the infill panels between the rendered piers all share the same line, giving the white façade a crisp, unified edge.",
      facts: [["Scope", "Sliding gate, entry gate, fence infill panels"], ["Style", "Vertical blades"], ["Finish", "Black"], ["Location", "To be confirmed"]],
      photos: ["custom-05", "custom-07", "custom-08", "custom-06", "custom-03", "custom-04"], cat: "custom"
    },
    {
      id: "slat-frontage", spec: "Custom project · Residential",
      title: "Horizontal slat frontage",
      text: "Wide-spaced black horizontal slats set between white rendered piers. The open spacing keeps the frontage light while the strong horizontal lines tie in with the low, hipped roofline behind.",
      facts: [["Scope", "Slat infill panels between piers"], ["Style", "Horizontal slats, open spacing"], ["Finish", "Black"], ["Location", "To be confirmed"]],
      photos: ["custom-01", "custom-02"], cat: "fencing"
    },
    {
      id: "commercial-screen", spec: "Screens · Commercial",
      title: "Commercial façade screen",
      text: "A white horizontal slat screen wraps the upper level of a commercial building, adding shade and privacy and giving the dark façade a strong graphic band.",
      facts: [["Scope", "Façade screen to upper level"], ["Style", "Horizontal slats"], ["Finish", "White"], ["Location", "To be confirmed"]],
      photos: ["screens-02", "screens-03"], cat: "screens"
    },
    {
      id: "waterfront-glass", spec: "Pool fencing · Residential",
      title: "Waterfront glass pool fence",
      text: "Frameless glass on spigots keeps the water view open from the pool area, with a glass gate to match.",
      facts: [["Scope", "Frameless glass pool fence and gate"], ["Style", "Glass on spigots"], ["Finish", "Clear glass"], ["Location", "To be confirmed"]],
      photos: ["pool-05", "pool-06"], cat: "pool"
    }
  ];

  var BLADES = [
    ["custom-05", "Custom gates", "Vertical blade sliding gate", "gates"],
    ["pool-01", "Pool fencing", "Frameless glass on the waterfront", "pool-fencing"],
    ["screens-02", "Screens", "Commercial façade screen", "screens-awnings"],
    ["slatted-01", "Gates & fencing", "Horizontal slat sliding gate", "gates"],
    ["balustrade-05", "Balustrades", "Picket deck balustrade", "balustrades"]
  ];

  var TBC = "Answer to be confirmed by Paradise Fabrication & Fencing.";
  var FAQS = [
    { id: "what", cat: "General", q: "What do you make?", a: "Custom gates (sliding, swing and pedestrian), slat and blade fencing, privacy screens and awnings, frameless glass and framed pool fencing, aluminium and glass balustrades, and custom fabrication such as complete frontages and enclosures." },
    { id: "commercial", cat: "General", q: "Do you work on commercial and apartment projects?", a: "Yes. Alongside residential work, our projects include façade screens on commercial buildings and balcony screens on multi-storey residential buildings. Get in touch with your plans and we'll talk it through." },
    { id: "area", cat: "General", q: "What areas do you service?", a: "We're based on the Gold Coast.", tbc: true },
    { id: "licence", cat: "General", q: "Are you licensed and insured?", a: TBC, tbc: true },
    { id: "match", cat: "Gates & fencing", q: "Can my gate match my fence?", a: "Yes. Some of our projects are complete frontages, where the driveway gate, pedestrian gate and fence panels share the same slat direction, spacing and colour." },
    { id: "orientation", cat: "Gates & fencing", q: "Horizontal slats or vertical blades — which should I choose?", a: "It comes down to the house. Horizontal slats feel calm and wide and suit low, long homes. Vertical blades feel taller and more contemporary. We're happy to suggest what will suit your property." },
    { id: "automation", cat: "Gates & fencing", q: "Can you automate my sliding gate?", a: TBC, tbc: true },
    { id: "colours", cat: "Gates & fencing", q: "What colours are available?", a: "Our completed projects include black, charcoal, white, silver and light grey, and a deep teal. Ask about the full colour range when you request a quote.", tbc: true },
    { id: "glass-or-alu", cat: "Pool fencing", q: "Glass or framed pool fencing — what's the difference?", a: "Frameless glass gives an open, uninterrupted view and suits waterfront and feature pools. Black framed fencing gives a strong, simple line and suits decks and garden settings. Our completed projects include both." },
    { id: "compliance", cat: "Pool fencing", q: "Will my pool fence meet Queensland pool safety requirements?", a: TBC, tbc: true },
    { id: "glass-balustrade", cat: "Balustrades & screens", q: "Do you do glass balustrades?", a: "Yes. Our balustrade work includes glass as well as aluminium, for balconies, decks, verandahs and stairs." },
    { id: "screens-use", cat: "Balustrades & screens", q: "Where can privacy screens be used?", a: "Our screens have been used on balconies, over windows, around carports and across building façades. They can manage privacy, sun and outlook at the same time." },
    { id: "quote", cat: "Quotes & timing", q: "How do I get a quote?", a: "Use the quote form or give us a call. Photos of the area, approximate sizes and the colour you have in mind help us understand the job quickly." },
    { id: "drawings", cat: "Quotes & timing", q: "Can I send plans or drawings?", a: "Yes. Architect's plans, sketches or a photo of a design you like all help. Mention them in your enquiry and we'll arrange the best way to receive them." },
    { id: "quote-cost", cat: "Quotes & timing", q: "Is there a charge for a quote?", a: TBC, tbc: true },
    { id: "timing", cat: "Quotes & timing", q: "How long does a typical project take?", a: TBC, tbc: true },
    { id: "warranty", cat: "Quotes & timing", q: "Is your work covered by a warranty?", a: TBC, tbc: true }
  ];
  var FAQ = {};
  FAQS.forEach(function (f) { FAQ[f.id] = f; });

  var CHOOSER = [
    ["Secure the driveway or entry", "gates"],
    ["Add privacy to a boundary or frontage", "slat-fencing"],
    ["Screen a balcony, window or carport", "screens-awnings"],
    ["Fence a pool", "pool-fencing"],
    ["Finish a deck, balcony or stairs", "balustrades"],
    ["Something made to order", "custom-fabrication"]
  ];

  /* ======================================================
     HELPERS
     ====================================================== */
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function icon(id) { return '<svg aria-hidden="true"><use href="#i-' + id + '"/></svg>'; }
  function img(p, opts) {
    opts = opts || {};
    var h = p.id === "balustrade-10" ? 600 : 720;
    return '<img src="' + p.src + '" alt="' + esc(p.title) + '" width="723" height="' + h + '"' + (opts.eager ? "" : ' loading="lazy"') + ' decoding="async">';
  }
  function svcLink(slug) { return "#/services/" + slug; }

  var toastTimer;
  function toast(msg) {
    var t = $(".toast");
    t.textContent = msg;
    t.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("is-visible"); }, 4200);
  }

  /* ======================================================
     STATIC RENDERS
     ====================================================== */
  function renderMega() {
    $$('[data-render="mega"]').forEach(function (el) {
      el.innerHTML = SERVICES.map(function (s) {
        var p = PHOTO[s.hero[0]];
        return '<a class="mega-card" href="' + svcLink(s.slug) + '"><img src="' + p.src + '" alt="" width="88" height="66" loading="lazy"><div><strong>' + esc(s.title) + '</strong><span>' + esc(s.summary) + "</span></div></a>";
      }).join("");
    });
    $$('[data-render="drawer-services"]').forEach(function (el) {
      el.innerHTML = '<a href="#/services">All services</a>' + SERVICES.map(function (s) { return '<a href="' + svcLink(s.slug) + '">' + esc(s.title) + "</a>"; }).join("");
    });
    $$('[data-render="footer-services"]').forEach(function (el) {
      el.innerHTML = SERVICES.map(function (s) { return '<li><a href="' + svcLink(s.slug) + '">' + esc(s.title) + "</a></li>"; }).join("");
    });
  }

  function renderServiceTiles() {
    $$('[data-render="svc-tiles"]').forEach(function (el) {
      el.innerHTML = SERVICES.map(function (s, i) {
        return '<a class="svc-tile reveal" href="' + svcLink(s.slug) + '">' +
          '<div class="svc-media">' + img(PHOTO[s.hero[0]]) + "</div>" +
          '<div class="svc-body"><div><span class="svc-index">0' + (i + 1) + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.summary) + '</p></div><span class="svc-arrow">' + icon("arrow") + "</span></div></a>";
      }).join("");
    });
  }

  function renderBlades() {
    var el = $('[data-render="blades"]');
    el.innerHTML = BLADES.map(function (b, i) {
      var p = PHOTO[b[0]];
      return '<button type="button" class="blade' + (i === 0 ? " is-active" : "") + '" data-href="' + svcLink(b[3]) + '" aria-label="' + esc(b[1] + ": " + b[2]) + '">' +
        img(p, { eager: i < 2 }) +
        '<span class="blade-num" aria-hidden="true">0' + (i + 1) + "</span>" +
        '<span class="blade-cap"><span class="spec">' + esc(b[1]) + "</span><strong>" + esc(b[2]) + "</strong></span></button>";
    }).join("");
    var blades = $$(".blade", el), idx = 0, timer = null, paused = false;
    function activate(i) {
      idx = i;
      blades.forEach(function (b, j) { b.classList.toggle("is-active", j === i); });
    }
    blades.forEach(function (b, i) {
      b.addEventListener("mouseenter", function () { activate(i); });
      b.addEventListener("focus", function () { activate(i); });
      b.addEventListener("click", function () {
        if (!b.classList.contains("is-active")) { activate(i); return; }
        location.hash = b.getAttribute("data-href");
      });
    });
    el.addEventListener("mouseenter", function () { paused = true; });
    el.addEventListener("mouseleave", function () { paused = false; });
    el.addEventListener("focusin", function () { paused = true; });
    el.addEventListener("focusout", function () { paused = false; });
    if (!reduceMotion) {
      timer = setInterval(function () {
        if (paused || document.hidden || currentView !== "home") return;
        activate((idx + 1) % blades.length);
      }, 5200);
    }
  }

  function renderFeatured() {
    var el = $('[data-render="featured"]');
    el.innerHTML = STORIES.slice(0, 3).map(function (s) {
      var p = PHOTO[s.photos[0]];
      return '<a class="fp reveal" href="#/projects?story=' + s.id + '"><div class="fp-media">' + img(p) + '<span class="fp-count">' + s.photos.length + (s.photos.length > 1 ? " PHOTOS" : " PHOTO") + '</span></div><div class="fp-body"><div><span class="spec">' + esc(s.spec) + "</span><h3>" + esc(s.title) + "</h3></div></div></a>";
    }).join("");
  }

  function renderStories() {
    var el = $('[data-render="stories"]');
    el.innerHTML = STORIES.map(function (s) {
      var shown = s.photos.slice(0, s.photos.length >= 6 ? 6 : 3);
      return '<article class="story" id="story-' + s.id + '">' +
        '<div class="story-media">' + shown.map(function (id, i) {
          return '<button type="button" data-lb-group="story-' + s.id + '" data-lb-index="' + i + '" aria-label="View photo ' + (i + 1) + " of " + s.photos.length + ": " + esc(PHOTO[id].title) + '">' + img(PHOTO[id]) + "</button>";
        }).join("") + "</div>" +
        '<div class="story-body"><span class="spec">' + esc(s.spec) + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p>" +
        '<ul class="story-facts">' + s.facts.map(function (f) {
          var v = f[1] === "To be confirmed" ? '<span class="tbc">To confirm</span>' : esc(f[1]);
          return "<li><span>" + esc(f[0]) + "</span><span>" + v + "</span></li>";
        }).join("") + "</ul>" +
        '<div class="btn-row"><button type="button" class="btn btn--outline btn--sm" data-lb-group="story-' + s.id + '" data-lb-index="0">View ' + s.photos.length + " photos</button>" +
        '<a class="link-arrow" style="align-self:center" href="#/contact?service=' + (SERVICES.filter(function (x) { return x.cat === s.cat; })[0] || SERVICES[5]).slug + '">Request a similar quote ' + icon("arrow") + "</a></div></div></article>";
    }).join("");
  }

  var activeFilter = "all";
  function renderGallery() {
    var filt = $('[data-render="filters"]');
    var cats = ["all"].concat(Object.keys(CAT_LABEL));
    filt.innerHTML = cats.map(function (c) {
      var n = c === "all" ? PHOTOS.length : PHOTOS.filter(function (p) { return p.cats.indexOf(c) > -1; }).length;
      return '<button type="button" class="chip" data-filter="' + c + '" aria-pressed="' + (c === "all") + '">' + (c === "all" ? "All work" : CAT_LABEL[c]) + ' <span class="count">' + n + "</span></button>";
    }).join("");
    var gal = $('[data-render="gallery"]');
    gal.innerHTML = PHOTOS.map(function (p) {
      var cls = p.shape === "wide" ? " is-wide" : p.shape === "tall" ? " is-tall" : "";
      return '<button type="button" class="g-item' + cls + '" data-id="' + p.id + '" data-cats="' + p.cats.join(" ") + '" aria-label="View larger: ' + esc(p.title) + '">' + img(p) +
        '<span class="g-cap"><span class="spec">' + esc(CAT_LABEL[p.cats[0]]) + " · " + esc(p.setting) + "</span><strong>" + esc(p.title) + "</strong></span></button>";
    }).join("");
    filt.addEventListener("click", function (e) {
      var b = e.target.closest("[data-filter]");
      if (b) setFilter(b.getAttribute("data-filter"));
    });
    gal.addEventListener("click", function (e) {
      var b = e.target.closest(".g-item");
      if (!b) return;
      var visible = $$(".g-item:not(.is-hidden)", gal);
      openLightbox(visible.map(function (v) { return PHOTO[v.getAttribute("data-id")]; }), visible.indexOf(b), b);
    });
    setFilter("all", true);
  }
  function setFilter(c, silent) {
    activeFilter = c;
    $$(".chip[data-filter]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === c)); });
    var n = 0;
    $$('[data-render="gallery"] .g-item').forEach(function (g) {
      var show = c === "all" || g.getAttribute("data-cats").split(" ").indexOf(c) > -1;
      g.classList.toggle("is-hidden", !show);
      if (show) n++;
    });
    $(".gallery-empty").style.display = n ? "none" : "block";
    $("[data-gallery-count]").textContent = "Showing " + n + " " + (n === 1 ? "photo" : "photos") + (c === "all" ? "" : " · " + CAT_LABEL[c]);
    if (!silent && currentView === "projects") {
      var h = "#/projects" + (c === "all" ? "" : "?cat=" + c);
      if (location.hash !== h) history.replaceState(null, "", h);
    }
  }

  function renderChooser() {
    var opts = $('[data-render="chooser-opts"]');
    opts.innerHTML = CHOOSER.map(function (c, i) {
      return '<button type="button" class="chooser-opt" data-svc="' + c[1] + '" aria-pressed="' + (i === 0) + '">' + esc(c[0]) + icon("arrow") + "</button>";
    }).join("");
    function show(slug) {
      var s = SERVICE[slug];
      $$(".chooser-opt", opts).forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-svc") === slug)); });
      $('[data-render="chooser-result"]').innerHTML = img(PHOTO[s.hero[0]]) +
        '<div class="cr-body"><div><span class="spec">We recommend</span><h3>' + esc(s.title) + "</h3><p>" + esc(s.summary) + '</p></div><div class="btn-row"><a class="btn btn--sm" href="' + svcLink(s.slug) + '">Explore ' + esc(s.nav.toLowerCase()) + '</a><a class="btn btn--outline btn--sm" href="#/contact?service=' + s.slug + '">Get a quote</a></div></div>';
    }
    opts.addEventListener("click", function (e) { var b = e.target.closest(".chooser-opt"); if (b) show(b.getAttribute("data-svc")); });
    show(CHOOSER[0][1]);
  }

  function renderCapTable() {
    var t = $('[data-render="cap-table"]');
    t.insertAdjacentHTML("beforeend", "<tbody>" + SERVICES.map(function (s) {
      return '<tr><th scope="row"><a href="' + svcLink(s.slug) + '">' + esc(s.title) + "</a></th><td>" + esc(s.options.map(function (o) { return o[0]; }).join(" · ")) + "</td></tr>";
    }).join("") + "</tbody>");
  }

  function faqItem(f) {
    var id = "faq-" + f.id + "-" + Math.random().toString(36).slice(2, 7);
    return '<div class="acc" data-faq-cat="' + esc(f.cat) + '"><h3 style="margin:0"><button class="acc-btn" type="button" id="' + id + '-b" aria-expanded="false" aria-controls="' + id + '">' + esc(f.q) + '<span class="acc-icon" aria-hidden="true"></span></button></h3>' +
      '<div class="acc-panel" id="' + id + '" role="region" aria-labelledby="' + id + '-b"><div><p>' + esc(f.a) + (f.tbc ? ' <span class="tbc">To confirm</span>' : "") + "</p></div></div></div>";
  }

  function renderFaq() {
    var cats = [];
    FAQS.forEach(function (f) { if (cats.indexOf(f.cat) < 0) cats.push(f.cat); });
    $('[data-render="faq-cats"]').innerHTML = ["All topics"].concat(cats).map(function (c, i) {
      return '<button type="button" data-cat="' + esc(c) + '" aria-pressed="' + (i === 0) + '">' + esc(c) + "<span>" + (i === 0 ? FAQS.length : FAQS.filter(function (f) { return f.cat === c; }).length) + "</span></button>";
    }).join("");
    $('[data-render="faq-list"]').innerHTML = cats.map(function (c) {
      return '<div class="faq-group" data-group="' + esc(c) + '"><h2>' + esc(c) + "</h2>" + FAQS.filter(function (f) { return f.cat === c; }).map(faqItem).join("") + "</div>";
    }).join("");
    var cat = "All topics", q = "";
    function apply() {
      var total = 0;
      $$(".faq-group").forEach(function (g) {
        var gn = 0;
        $$(".acc", g).forEach(function (a) {
          var okCat = cat === "All topics" || a.getAttribute("data-faq-cat") === cat;
          var okQ = !q || a.textContent.toLowerCase().indexOf(q) > -1;
          a.classList.toggle("is-hidden", !(okCat && okQ));
          if (okCat && okQ) gn++;
        });
        g.style.display = gn ? "" : "none";
        total += gn;
      });
      $(".faq-empty").style.display = total ? "none" : "block";
    }
    $('[data-render="faq-cats"]').addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      cat = b.getAttribute("data-cat");
      $$('[data-render="faq-cats"] button').forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      apply();
    });
    $("#faq-q").addEventListener("input", function (e) { q = e.target.value.trim().toLowerCase(); apply(); });
  }

  /* ======================================================
     SERVICE DETAIL
     ====================================================== */
  function renderService(slug) {
    var s = SERVICE[slug];
    var el = $('[data-render="service-detail"]');
    var photos = PHOTOS.filter(function (p) { return p.cats.indexOf(s.cat) > -1; });
    var others = SERVICES.filter(function (x) { return x.slug !== slug; });
    var related = others.slice(0, 3);
    if (slug === "pool-fencing") related = [SERVICE.balustrades, SERVICE["screens-awnings"], SERVICE.gates];
    var heroImgs = s.hero.map(function (id) { return PHOTO[id]; });
    var heroGroup = "hero-" + slug;
    el.innerHTML =
      '<div class="page-hero"><div class="container">' +
        '<nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">/</span><a href="#/services">Services</a><span aria-hidden="true">/</span><span aria-current="page">' + esc(s.title) + "</span></nav>" +
        '<div class="page-hero-grid" style="margin-bottom:clamp(32px,4vw,56px)"><div><span class="eyebrow">' + esc(s.title) + '</span><h1 class="display" style="font-size:clamp(2.4rem,5.2vw,4.8rem)">' + esc(s.headline) + "</h1></div>" +
        '<div><p class="lead" style="margin-bottom:24px">' + esc(s.summary) + '</p><div class="btn-row"><a class="btn" href="#/contact?service=' + slug + '" data-cta="service-hero">Request a quote ' + icon("arrow") + '</a><button type="button" class="btn btn--outline" data-scroll="svc-gallery">See examples</button></div></div></div>' +
        '<div class="svc-hero-media">' + heroImgs.map(function (p, i) {
          return '<figure><button type="button" data-lb-group="' + heroGroup + '" data-lb-index="' + i + '" aria-label="View larger: ' + esc(p.title) + '">' + img(p, { eager: true }) + "</button></figure>";
        }).join("") + "</div>" +
      "</div></div>" +
      '<section class="section" style="padding-top:clamp(24px,4vw,48px)"><div class="container svc-layout">' +
        '<aside class="svc-aside"><ul class="toc" aria-label="On this page">' +
          [["svc-overview", "Overview"], ["svc-options", "Options"], ["svc-gallery", "Examples"], ["svc-consider", "Design considerations"], ["svc-faq", "Questions"]].map(function (t) {
            return '<li><a href="' + svcLink(slug) + '" data-scroll="' + t[0] + '">' + t[1] + icon("arrow").replace("<svg", '<svg width="14" height="14"') + "</a></li>";
          }).join("") + "</ul>" +
          '<div class="aside-cta"><span class="eyebrow">' + esc(s.nav) + '</span><h2 class="h3" style="margin-bottom:10px">Planning a project?</h2><p>Send a few details and photos of the site. We\'ll come back to you to talk it through.</p><a class="btn btn--brass btn--block" href="#/contact?service=' + slug + '" data-cta="service-aside">Request a quote</a></div>' +
        "</aside>" +
        "<div>" +
          '<div class="svc-block" id="svc-overview"><span class="eyebrow">Overview</span><p class="statement" style="font-size:clamp(1.35rem,2.4vw,2rem);max-width:34ch">' + esc(s.intro) + "</p>" +
            '<ul class="app-list" aria-label="Typical applications">' + s.apps.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul></div>" +
          '<div class="svc-block" id="svc-options"><span class="eyebrow">Options</span><h2>What we offer</h2><div class="option-grid">' +
            s.options.map(function (o) { return '<div class="option"><h3>' + esc(o[0]) + "</h3><p>" + esc(o[1]) + "</p></div>"; }).join("") + "</div></div>" +
          '<div class="svc-block" id="svc-gallery"><span class="eyebrow">Examples</span><h2>From our completed work</h2><div class="gallery gallery--3">' +
            photos.map(function (p, i) {
              return '<button type="button" class="g-item" data-lb-group="svc-' + slug + '" data-lb-index="' + i + '" aria-label="View larger: ' + esc(p.title) + '">' + img(p) + '<span class="g-cap"><span class="spec">' + esc(p.setting) + "</span><strong>" + esc(p.title) + "</strong></span></button>";
            }).join("") + '</div><p style="margin-top:20px"><a class="link-arrow" href="#/projects?cat=' + s.cat + '">See all ' + esc(CAT_LABEL[s.cat].toLowerCase()) + " projects " + icon("arrow") + "</a></p></div>" +
          '<div class="svc-block" id="svc-consider"><span class="eyebrow">Before you start</span><h2>Design considerations</h2><ol class="consider">' +
            s.consider.map(function (c) { return "<li><div><strong>" + esc(c[0]) + "</strong><span>" + esc(c[1]) + "</span></div></li>"; }).join("") + "</ol></div>" +
          '<div class="svc-block" id="svc-faq"><span class="eyebrow">Questions</span><h2>Common questions</h2><div>' +
            s.faqs.map(function (id) { return faqItem(FAQ[id]); }).join("") + '</div><p style="margin-top:24px"><a class="link-arrow" href="#/faq">All questions ' + icon("arrow") + "</a></p></div>" +
        "</div>" +
      "</div></section>" +
      '<section class="section section--sand" aria-label="Related services"><div class="container"><div class="section-head" style="margin-bottom:36px"><div><span class="eyebrow">Related</span><h2 class="h2">Often paired with</h2></div></div><div class="svc-grid">' +
        related.map(function (r) {
          return '<a class="svc-tile svc-tile--third" href="' + svcLink(r.slug) + '"><div class="svc-media">' + img(PHOTO[r.hero[0]]) + '</div><div class="svc-body"><div><h3>' + esc(r.title) + "</h3><p>" + esc(r.summary) + '</p></div><span class="svc-arrow">' + icon("arrow") + "</span></div></a>";
        }).join("") + "</div></div></section>" +
      '<section class="section section--ink cta-band" aria-label="Request a quote"><div class="cta-slats" aria-hidden="true"></div><div class="container cta-grid"><div><span class="eyebrow">' + esc(s.title) + '</span><h2 class="display" style="font-size:clamp(2.2rem,4.6vw,4.2rem)">Ready to talk about your ' + esc(s.nav.toLowerCase()) + '?</h2></div><div class="cta-side"><p class="lead" style="margin:0">Tell us about the site and what you have in mind.</p><div class="btn-row"><a class="btn btn--brass" href="#/contact?service=' + slug + '" data-cta="service-final">Request a quote ' + icon("arrow") + '</a><button type="button" class="btn btn--light" data-action="call">' + icon("phone") + " Call us</button></div></div></div></section>";

    LB_GROUPS[heroGroup] = heroImgs;
    LB_GROUPS["svc-" + slug] = photos;
    initAccordions(el);
    initToc(el);
  }

  /* ======================================================
     ACCORDIONS
     ====================================================== */
  function initAccordions(root) {
    $$(".acc-btn", root).forEach(function (b) {
      if (b._acc) return; b._acc = true;
      b.addEventListener("click", function () {
        var open = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", String(!open));
        document.getElementById(b.getAttribute("aria-controls")).classList.toggle("is-open", !open);
      });
    });
  }

  function initToc(root) {
    var links = $$(".toc a", root);
    if (!("IntersectionObserver" in window) || !links.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) links.forEach(function (l) { l.classList.toggle("is-current", l.getAttribute("data-scroll") === en.target.id); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    links.forEach(function (l) { var t = document.getElementById(l.getAttribute("data-scroll")); if (t) io.observe(t); });
  }

  /* ======================================================
     LIGHTBOX
     ====================================================== */
  var LB_GROUPS = {};
  STORIES.forEach(function (s) { LB_GROUPS["story-" + s.id] = s.photos.map(function (id) { return PHOTO[id]; }); });
  var lb = { items: [], i: 0, opener: null };
  var lbEl = $(".lightbox"), lbImg = $(".lb-stage img", lbEl);
  function openLightbox(items, index, opener) {
    lb.items = items; lb.i = Math.max(0, index); lb.opener = opener || document.activeElement;
    lbShow();
    lbEl.classList.add("is-open"); lbEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(function () { $(".lb-close", lbEl).focus(); }, 30);
  }
  function lbShow() {
    var p = lb.items[lb.i];
    lbImg.style.opacity = 0;
    setTimeout(function () {
      lbImg.src = p.src; lbImg.alt = p.title; lbImg.style.opacity = 1;
    }, reduceMotion ? 0 : 120);
    $(".lb-count", lbEl).textContent = String(lb.i + 1).padStart(2, "0") + " / " + String(lb.items.length).padStart(2, "0");
    $(".lb-caption .spec", lbEl).textContent = CAT_LABEL[p.cats[0]] + " · " + p.setting;
    $(".lb-caption strong", lbEl).textContent = p.title;
    var multi = lb.items.length > 1;
    $(".lb-prev", lbEl).style.display = multi ? "" : "none";
    $(".lb-next", lbEl).style.display = multi ? "" : "none";
  }
  function lbMove(d) { lb.i = (lb.i + d + lb.items.length) % lb.items.length; lbShow(); }
  function closeLightbox() {
    lbEl.classList.remove("is-open"); lbEl.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lb.opener && lb.opener.focus) lb.opener.focus();
  }
  $(".lb-close", lbEl).addEventListener("click", closeLightbox);
  $(".lb-prev", lbEl).addEventListener("click", function () { lbMove(-1); });
  $(".lb-next", lbEl).addEventListener("click", function () { lbMove(1); });
  lbEl.addEventListener("click", function (e) { if (e.target === lbEl || e.target.classList.contains("lb-stage")) closeLightbox(); });
  var touchX = null;
  $(".lb-stage", lbEl).addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  $(".lb-stage", lbEl).addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) lbMove(dx < 0 ? 1 : -1);
    touchX = null;
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lb-group]");
    if (!b) return;
    var g = LB_GROUPS[b.getAttribute("data-lb-group")];
    if (g) openLightbox(g, +b.getAttribute("data-lb-index") || 0, b);
  });

  /* ======================================================
     MODAL
     ====================================================== */
  var modal = $(".modal"), modalOpener = null;
  function openModal() {
    modalOpener = document.activeElement;
    modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(function () { $("[data-modal-close]", modal).focus(); }, 30);
  }
  function closeModal() {
    modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (modalOpener && modalOpener.focus) modalOpener.focus();
  }
  $("[data-modal-close]", modal).addEventListener("click", closeModal);
  $("[data-modal-reset]", modal).addEventListener("click", function () { resetForm(); closeModal(); $("#f-name").focus(); });
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });

  function trapFocus(container, e) {
    var f = $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', container).filter(function (x) { return x.offsetParent !== null; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ======================================================
     NAVIGATION: header, mega menu, drawer
     ====================================================== */
  var header = $(".site-header");
  var mega = $(".nav-item--mega"), megaBtn = $(".nav-link", mega), megaTimer;
  function setMega(open) {
    mega.setAttribute("data-open", String(open));
    megaBtn.setAttribute("aria-expanded", String(open));
  }
  var megaByHover = false;
  megaBtn.addEventListener("click", function () {
    var open = mega.getAttribute("data-open") === "true";
    if (open && megaByHover) { megaByHover = false; return; } // hover already opened it: keep open
    megaByHover = false;
    setMega(!open);
  });
  mega.addEventListener("mouseenter", function () {
    clearTimeout(megaTimer);
    if (window.matchMedia("(hover: hover)").matches && mega.getAttribute("data-open") !== "true") { megaByHover = true; setMega(true); }
  });
  mega.addEventListener("mouseleave", function () { megaTimer = setTimeout(function () { setMega(false); }, 160); });
  mega.addEventListener("focusout", function (e) { if (!mega.contains(e.relatedTarget)) setMega(false); });
  document.addEventListener("click", function (e) { if (!mega.contains(e.target)) setMega(false); });

  var drawer = $("#drawer"), toggle = $(".menu-toggle");
  function setDrawer(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (open) { drawer.hidden = false; requestAnimationFrame(function () { drawer.classList.add("is-open"); }); document.body.style.overflow = "hidden"; }
    else { drawer.classList.remove("is-open"); document.body.style.overflow = ""; setTimeout(function () { if (!drawer.classList.contains("is-open")) drawer.hidden = true; }, 320); }
  }
  toggle.addEventListener("click", function () { setDrawer(toggle.getAttribute("aria-expanded") !== "true"); });
  $(".drawer-acc").addEventListener("click", function () {
    var b = this, open = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", String(!open));
    $("#drawer-svc").classList.toggle("is-open", !open);
  });
  drawer.addEventListener("click", function (e) { if (e.target.closest("a")) setDrawer(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 1024 && toggle.getAttribute("aria-expanded") === "true") setDrawer(false); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (lbEl.classList.contains("is-open")) closeLightbox();
      else if (modal.classList.contains("is-open")) closeModal();
      else if (toggle.getAttribute("aria-expanded") === "true") { setDrawer(false); toggle.focus(); }
      else if (mega.getAttribute("data-open") === "true") { setMega(false); megaBtn.focus(); }
    }
    if (lbEl.classList.contains("is-open")) {
      if (e.key === "ArrowRight") lbMove(1);
      if (e.key === "ArrowLeft") lbMove(-1);
      if (e.key === "Tab") trapFocus(lbEl, e);
      return;
    }
    if (modal.classList.contains("is-open") && e.key === "Tab") trapFocus(modal, e);
    if (toggle.getAttribute("aria-expanded") === "true" && e.key === "Tab") {
      var f = [toggle].concat($$("a, button", drawer).filter(function (x) { return x.offsetParent !== null; }));
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    var typing = /input|textarea|select/i.test((e.target.tagName || "")) || e.target.isContentEditable;
    if (!typing && !e.metaKey && !e.ctrlKey && !e.altKey && (e.key === "r" || e.key === "R")) toggleReview();
  });

  /* Smooth in-page scrolling (hash routing safe) */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-scroll]");
    if (!a) return;
    e.preventDefault();
    var t = document.getElementById(a.getAttribute("data-scroll"));
    if (t) t.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });

  /* Call / email placeholders */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-action]");
    if (!a) return;
    var act = a.getAttribute("data-action");
    if (act === "call") toast("Phone number to be confirmed. On the live site this button calls Paradise directly.");
    if (act === "email") toast("Email address to be confirmed. On the live site this opens a new email to Paradise.");
  });

  /* Review notes mode */
  var reviewBtn = $(".review-toggle");
  function toggleReview() {
    var on = !document.body.classList.contains("review-on");
    document.body.classList.toggle("review-on", on);
    reviewBtn.setAttribute("aria-pressed", String(on));
    toast(on ? "Review notes on: content is marked as verified, proposed or awaiting confirmation." : "Review notes off.");
  }
  reviewBtn.addEventListener("click", toggleReview);

  /* ======================================================
     SCROLL UI
     ====================================================== */
  var toTop = $(".to-top"), mobileCta = $(".mobile-cta");
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 8);
    toTop.classList.toggle("is-visible", y > 700);
    mobileCta.classList.toggle("is-visible", y > 360 && currentView !== "contact");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    setTimeout(function () { $(".brand").focus({ preventScroll: true }); }, reduceMotion ? 0 : 500);
  });
  document.body.classList.add("has-mobile-cta");

  /* Reveal on scroll */
  var revealIO = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); revealIO.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }) : null;
  function observeReveals() {
    $$(".reveal:not(.is-in)").forEach(function (el, i) {
      if (!revealIO) { el.classList.add("is-in"); return; }
      el.style.transitionDelay = (i % 4) * 60 + "ms";
      revealIO.observe(el);
    });
  }

  /* "Why" image swap */
  function initWhy() {
    var imgEl = $("[data-why-img]"), cap = $("[data-why-cap]");
    var items = $$("[data-why]");
    function set(li) {
      if (window.matchMedia("(max-width: 1024px)").matches) return; // image is stacked above the list
      var d = li.getAttribute("data-why").split("|");
      if (imgEl.getAttribute("src") === d[0]) return;
      imgEl.style.opacity = 0;
      setTimeout(function () { imgEl.src = d[0]; imgEl.alt = d[1]; cap.textContent = d[2]; imgEl.style.opacity = 1; }, reduceMotion ? 0 : 200);
    }
    items.forEach(function (li) { li.addEventListener("mouseenter", function () { set(li); }); });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) set(en.target); }); }, { rootMargin: "-45% 0px -45% 0px" });
      items.forEach(function (li) { io.observe(li); });
    }
  }

  /* ======================================================
     FORM
     ====================================================== */
  var form = $("#quote-form"), files = [];
  var sel = $("#f-service");
  sel.insertAdjacentHTML("beforeend", SERVICES.map(function (s) { return '<option value="' + s.slug + '">' + esc(s.title) + "</option>"; }).join("") + '<option value="other">Something else</option>');

  var rules = {
    name: function (v) { return v.trim().length >= 2; },
    phone: function (v) { var d = v.replace(/[\s()\-.]/g, ""); return /^(\+?61|0)[2-478]\d{8}$/.test(d) || /^1[38]00\d{6}$/.test(d) || /^13\d{4}$/.test(d); },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); },
    service: function (v) { return !!v; },
    suburb: function (v) { return v.trim().length >= 2; }
  };
  function validate(field, show) {
    var input = form.elements[field], ok = rules[field](input.value), wrap = input.closest(".field");
    if (show) {
      wrap.classList.toggle("has-error", !ok);
      input.setAttribute("aria-invalid", String(!ok));
    }
    wrap.classList.toggle("is-valid", ok && (field === "email" || field === "phone"));
    if (ok) { wrap.classList.remove("has-error"); input.removeAttribute("aria-invalid"); }
    return ok;
  }
  function progress() {
    var steps = $$(".form-steps span");
    var a = rules.name(form.elements.name.value) && rules.phone(form.elements.phone.value) && rules.email(form.elements.email.value);
    var b = rules.service(sel.value) && rules.suburb(form.elements.suburb.value);
    var c = form.elements.message.value.trim().length > 10 || files.length > 0 || !!form.querySelector('input[name="ptype"]:checked');
    steps[0].classList.toggle("is-done", a);
    steps[1].classList.toggle("is-done", b);
    steps[2].classList.toggle("is-done", c);
  }
  Object.keys(rules).forEach(function (k) {
    var input = form.elements[k];
    input.addEventListener("blur", function () { if (input.value) validate(k, true); });
    input.addEventListener("input", function () { if (input.closest(".field").classList.contains("has-error")) validate(k, true); progress(); });
    input.addEventListener("change", progress);
  });
  form.addEventListener("change", progress);
  var msg = form.elements.message;
  msg.addEventListener("input", function () { $("[data-count]").textContent = msg.value.length; progress(); });

  var dz = $("[data-dropzone]"), fileInput = $("#f-files"), thumbs = $("[data-thumbs]");
  function addFiles(list) {
    var added = 0, skipped = 0;
    Array.prototype.forEach.call(list, function (f) {
      if (!/^image\//.test(f.type)) { skipped++; return; }
      if (files.length >= 6) { skipped++; return; }
      files.push({ file: f, url: URL.createObjectURL(f) }); added++;
    });
    drawThumbs();
    if (skipped) toast(skipped + (skipped === 1 ? " file was" : " files were") + " skipped. Up to 6 image files can be added.");
    fileInput.value = "";
    progress();
  }
  function drawThumbs() {
    thumbs.innerHTML = files.map(function (f, i) {
      return '<div class="thumb"><img src="' + f.url + '" alt="' + esc(f.file.name) + '"><button type="button" data-remove="' + i + '" aria-label="Remove ' + esc(f.file.name) + '"><svg aria-hidden="true"><use href="#i-close"/></svg></button></div>';
    }).join("");
  }
  thumbs.addEventListener("click", function (e) {
    var b = e.target.closest("[data-remove]"); if (!b) return;
    var i = +b.getAttribute("data-remove");
    URL.revokeObjectURL(files[i].url); files.splice(i, 1); drawThumbs(); progress();
    fileInput.focus();
  });
  fileInput.addEventListener("change", function () { addFiles(fileInput.files); });
  ["dragenter", "dragover"].forEach(function (t) { dz.addEventListener(t, function (e) { e.preventDefault(); dz.classList.add("is-over"); }); });
  ["dragleave", "drop"].forEach(function (t) { dz.addEventListener(t, function (e) { e.preventDefault(); dz.classList.remove("is-over"); }); });
  dz.addEventListener("drop", function (e) { if (e.dataTransfer && e.dataTransfer.files) addFiles(e.dataTransfer.files); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var bad = Object.keys(rules).filter(function (k) { return !validate(k, true); });
    var status = $(".form-status", form);
    if (bad.length) {
      status.innerHTML = '<span style="color:#a1321f">Please check the ' + bad.length + (bad.length === 1 ? " highlighted field." : " highlighted fields.") + "</span>";
      form.elements[bad[0]].focus();
      return;
    }
    status.textContent = "";
    if (form.elements.company.value) return; // honeypot
    var pt = form.querySelector('input[name="ptype"]:checked');
    var rows = [
      ["Name", form.elements.name.value],
      ["Phone", form.elements.phone.value],
      ["Email", form.elements.email.value],
      ["Service", sel.options[sel.selectedIndex].text],
      ["Suburb", form.elements.suburb.value],
      ["Property", pt ? pt.value : "Not specified"],
      ["Photos", files.length ? files.length + " attached" : "None"]
    ];
    $("[data-summary]").innerHTML = rows.map(function (r) { return "<li><span>" + esc(r[0]) + "</span><span>" + esc(r[1]) + "</span></li>"; }).join("");
    openModal();
  });
  function resetForm() {
    form.reset();
    files.forEach(function (f) { URL.revokeObjectURL(f.url); }); files = []; drawThumbs();
    $$(".field", form).forEach(function (f) { f.classList.remove("has-error", "is-valid"); });
    $$("[aria-invalid]", form).forEach(function (i) { i.removeAttribute("aria-invalid"); });
    $("[data-count]").textContent = "0"; $(".form-status", form).textContent = "";
    progress();
  }

  /* ======================================================
     ROUTER
     ====================================================== */
  var currentView = null;
  var TITLES = {
    home: "Paradise Fabrication & Fencing | Custom Gates, Fencing, Screens & Balustrades",
    services: "Services | Paradise Fabrication & Fencing",
    projects: "Projects | Paradise Fabrication & Fencing",
    about: "About | Paradise Fabrication & Fencing",
    faq: "FAQ | Paradise Fabrication & Fencing",
    contact: "Request a Quote | Paradise Fabrication & Fencing",
    notfound: "Page not found | Paradise Fabrication & Fencing"
  };
  function parse() {
    var h = location.hash.replace(/^#/, "") || "/";
    var parts = h.split("?"), path = parts[0].replace(/\/+$/, "") || "/", query = {};
    (parts[1] || "").split("&").forEach(function (kv) { if (!kv) return; var p = kv.split("="); query[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ""); });
    return { path: path, query: query };
  }
  function route() {
    var r = parse(), view = "notfound", title, segs = r.path.split("/").filter(Boolean);
    if (r.path === "/") view = "home";
    else if (segs[0] === "services" && segs.length === 1) view = "services";
    else if (segs[0] === "services" && SERVICE[segs[1]]) { view = "service"; renderService(segs[1]); title = SERVICE[segs[1]].title + " | Paradise Fabrication & Fencing"; }
    else if (["projects", "about", "faq", "contact"].indexOf(segs[0]) > -1 && segs.length === 1) view = segs[0];

    var changed = view !== currentView || view === "service";
    $$(".view").forEach(function (v) { v.classList.toggle("is-active", v.getAttribute("data-view") === view); });
    currentView = view;
    document.title = title || TITLES[view];

    $$("[data-route-match]").forEach(function (a) {
      var m = a.getAttribute("data-route-match");
      var on = m === segs[0];
      if (a.tagName === "A") { if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); }
      else a.classList.toggle("is-current", on);
    });
    setMega(false);
    if (toggle.getAttribute("aria-expanded") === "true") setDrawer(false);

    if (view === "projects") {
      if (r.query.cat && CAT_LABEL[r.query.cat]) setFilter(r.query.cat, true); else if (!r.query.story) setFilter("all", true);
    }
    if (view === "contact" && r.query.service) {
      if (SERVICE[r.query.service] || r.query.service === "other") { sel.value = r.query.service; progress(); }
    }

    if (changed) {
      window.scrollTo(0, 0);
      var focusTarget = $(".view.is-active h1") || $("#main");
      if (focusTarget && currentView !== "home" && !firstRoute) {
        focusTarget.setAttribute("tabindex", "-1");
        focusTarget.focus({ preventScroll: true });
      }
    }
    if (view === "projects" && (r.query.story || r.query.cat)) {
      var target = r.query.story ? document.getElementById("story-" + r.query.story) : document.getElementById("gallery");
      if (target) setTimeout(function () { target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }); }, 80);
    }
    observeReveals();
    onScroll();
    firstRoute = false;
  }
  var firstRoute = true;
  window.addEventListener("hashchange", route);

  /* ======================================================
     INIT
     ====================================================== */
  renderMega();
  renderServiceTiles();
  renderBlades();
  renderFeatured();
  renderStories();
  renderGallery();
  renderChooser();
  renderCapTable();
  renderFaq();
  initAccordions(document);
  initWhy();
  $$("[data-year]").forEach(function (y) { y.textContent = new Date().getFullYear(); });
  route();
})();
