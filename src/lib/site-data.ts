import stretchLimo from "@/assets/fleet-stretch-limo.jpg";
import partyBus from "@/assets/fleet-party-bus.jpg";
import hummer from "@/assets/fleet-hummer.jpg";
import suv from "@/assets/fleet-suv.jpg";
import sedan from "@/assets/fleet-sedan.jpg";
import interior from "@/assets/interior-detail.jpg";

export const COMPANY = {
  name: "USA Limo Vibes",
  phone: "(916) 555-0147",
  phoneHref: "tel:+19165550147",
  email: "reservations@usalimovibes.com",
  city: "Sacramento, California",
  address: "1201 J Street, Suite 200, Sacramento, CA 95814",
  hours: "Reservations answered 24 hours a day, 7 days a week",
  tcp: "TCP #XXXXXXX-P",
  dot: "US DOT #XXXXXXX",
  yearsInBusiness: 15,
};

export type Vehicle = {
  slug: string;
  name: string;
  image: string;
  gallery: string[];
  capacity: string;
  short: string;
  description: string;
  amenities: string[];
};

export const FLEET: Vehicle[] = [
  {
    slug: "stretch-limousine",
    name: "Stretch Limousines",
    image: stretchLimo,
    gallery: [stretchLimo, interior],
    capacity: "Up to 10 passengers",
    short: "The timeless classic for weddings, galas and milestone evenings.",
    description:
      "Our stretch limousines pair a mirror-black finish with a hand-finished cabin — the definitive choice for weddings, anniversaries and black-tie arrivals in downtown Sacramento.",
    amenities: [
      "Fiber-optic LED lighting",
      "Premium surround sound",
      "Stocked bar with ice wells",
      "Full leather seating",
      "Privacy partition",
      "Flat-screen TV",
    ],
  },
  {
    slug: "party-bus",
    name: "Party Buses",
    image: partyBus,
    gallery: [partyBus, interior],
    capacity: "Up to 30 passengers",
    short: "A nightclub on wheels for birthdays, bachelorettes and wine tours.",
    description:
      "Wraparound leather perimeter seating, a laser-lit ceiling and a sound system built for the drive from Midtown to Napa. The party starts the moment the door opens.",
    amenities: [
      "Color-changing LED ceiling",
      "Club-grade subwoofer system",
      "Dance pole & wraparound seating",
      "Multiple bars & coolers",
      "Bluetooth & aux control",
      "Tinted privacy glass",
    ],
  },
  {
    slug: "hummer-limo",
    name: "Hummer Limos",
    image: hummer,
    gallery: [hummer, interior],
    capacity: "Up to 20 passengers",
    short: "Maximum presence for prom, quinceañeras and big entrances.",
    description:
      "Nothing turns heads like a stretched Hummer at the curb. Available in white or black with a fully mirrored, LED-drenched interior built for photographs.",
    amenities: [
      "Mirrored LED interior",
      "Laser & strobe lighting",
      "Concert-level audio",
      "Twin bars",
      "Leather bench seating",
      "Multiple TV screens",
    ],
  },
  {
    slug: "luxury-suv",
    name: "Luxury SUVs",
    image: suv,
    gallery: [suv, interior],
    capacity: "Up to 7 passengers",
    short: "Airport transfers and executive travel with room for luggage.",
    description:
      "Escalade-class SUVs for SMF pickups, corporate roadshows and family transfers — generous luggage capacity with a quiet, climate-controlled cabin.",
    amenities: [
      "Captain's chair seating",
      "Generous luggage space",
      "Bottled water service",
      "USB charging",
      "Rear climate control",
      "Flight tracking on airport runs",
    ],
  },
  {
    slug: "executive-sedan",
    name: "Executive Sedans",
    image: sedan,
    gallery: [sedan, interior],
    capacity: "Up to 3 passengers",
    short: "Discreet, punctual chauffeur service for one to three guests.",
    description:
      "Our sedans are the workhorse of executive travel: a professionally attired chauffeur, a spotless cabin and a fixed, all-inclusive rate to any Sacramento-area address.",
    amenities: [
      "Leather rear cabin",
      "Bottled water & mints",
      "Quiet ride for calls",
      "USB charging",
      "Newspaper on request",
      "Meet-and-greet service",
    ],
  },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    slug: "weddings",
    title: "Weddings",
    description:
      "Bridal party transport, red-carpet arrivals and a decorated getaway car, coordinated to your timeline down to the minute.",
  },
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    description:
      "Sacramento International (SMF), Oakland, SFO and private terminals. We track your flight and wait curbside or in baggage claim.",
  },
  {
    slug: "prom-homecoming",
    title: "Prom & Homecoming",
    description:
      "Chaperone-approved, strictly no-alcohol packages with parent check-in calls and direct venue-to-door service.",
  },
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    description:
      "Account billing, roadshows, client entertainment and conference shuttles with chauffeurs who understand discretion.",
  },
  {
    slug: "wine-tours",
    title: "Wine Tours",
    description:
      "Curated Napa, Amador and Lodi itineraries with tasting-room introductions, coolers and a relaxed all-day rate.",
  },
  {
    slug: "bachelor-bachelorette",
    title: "Bachelor & Bachelorette Parties",
    description:
      "Party bus or Hummer limo, multi-stop routes, and a chauffeur who keeps the whole group together and safe.",
  },
  {
    slug: "concerts-sports",
    title: "Concerts & Sporting Events",
    description:
      "Golden 1 Center, Sutter Health Park and Toyota Amphitheatre drop-offs at the door — no parking, no rideshare surge.",
  },
  {
    slug: "quinceaneras",
    title: "Quinceañeras",
    description:
      "Photo-ready vehicles, family-sized capacity and bilingual chauffeurs for the celebration and the church.",
  },
  {
    slug: "anniversaries",
    title: "Anniversaries",
    description:
      "Dinner reservations, riverfront drives and champagne service for the evening you have been planning all year.",
  },
  {
    slug: "night-out",
    title: "Night Out & Club Hopping",
    description:
      "Midtown, K Street and Old Sacramento on one flat hourly rate, with your chauffeur on call between every stop.",
  },
];

export const TRUST_POINTS = [
  { label: "Licensed & Insured", detail: "CPUC/TCP certified with full commercial coverage" },
  { label: "Professional Chauffeurs", detail: "Background-checked, uniformed, locally trained" },
  { label: "24/7 Availability", detail: "Live dispatch every hour of every day" },
  { label: "On-Time Guarantee", detail: "Early arrival standard on every reservation" },
  { label: `${COMPANY.yearsInBusiness}+ Years in Business`, detail: "Serving the Sacramento Valley since 2011" },
  { label: "Clean & Sanitized", detail: "Every vehicle detailed before it leaves the yard" },
];

export const TESTIMONIALS = [
  {
    name: "Marissa T.",
    location: "Roseville, CA",
    rating: 5,
    quote:
      "Our wedding day ran perfectly because of them. The chauffeur arrived early, the limo was immaculate, and he handled every timeline change without a word of complaint.",
  },
  {
    name: "Devin K.",
    location: "Sacramento, CA",
    rating: 5,
    quote:
      "Booked the party bus for a bachelorette run through Midtown. Lights, sound, and a driver who genuinely looked out for the group all night. Worth every dollar.",
  },
  {
    name: "Alan R.",
    location: "Folsom, CA",
    rating: 5,
    quote:
      "I use them for SMF runs almost weekly. Flight delayed by two hours and my chauffeur was still waiting with no drama and no surprise charges.",
  },
  {
    name: "Priya S.",
    location: "Davis, CA",
    rating: 5,
    quote:
      "The Amador wine tour was flawless — thoughtful route, cold water waiting, and a driver who knew every tasting room manager by name.",
  },
  {
    name: "Hector M.",
    location: "Elk Grove, CA",
    rating: 5,
    quote:
      "We hired the Hummer limo for my daughter's quinceañera. The photos are unbelievable and the family was treated like royalty.",
  },
];

export const SERVICE_AREA = [
  "Sacramento",
  "Elk Grove",
  "Roseville",
  "Folsom",
  "Davis",
  "Rocklin",
  "Citrus Heights",
  "Rancho Cordova",
  "West Sacramento",
  "Natomas",
  "Lincoln",
  "Woodland",
];

export const EVENT_TYPES = [
  "Wedding",
  "Airport Transfer",
  "Prom / Homecoming",
  "Corporate Travel",
  "Wine Tour",
  "Bachelor / Bachelorette",
  "Concert / Sporting Event",
  "Quinceañera",
  "Anniversary",
  "Night Out / Club Hopping",
  "Other",
];

export type ServiceDetail = {
  slug: string;
  h1: string;
  intro: string;
  highlights: string[];
  vehicles: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  weddings: {
    slug: "weddings",
    h1: "Wedding Limousine & Party Bus Service in Sacramento",
    intro:
      "From the first-look photos to the last dance, we keep your wedding day moving on schedule with immaculate vehicles, uniformed chauffeurs and a coordinator who knows your timeline as well as you do.",
    highlights: [
      "Bridal party transport between salon, ceremony and reception",
      "Decorated getaway car with champagne service on request",
      "Red-carpet and umbrella service in any weather",
      "Guest shuttles between hotel blocks and the venue",
      "Complimentary walkthrough of your timeline with dispatch",
      "Written flat-rate agreement — no surge pricing on your date",
    ],
    vehicles: ["stretch-limousine", "party-bus", "luxury-suv"],
    faqs: [
      { q: "How far in advance should we book?", a: "Peak Saturdays in Sacramento book 6-9 months out. We can often accommodate short notice midweek." },
      { q: "Can we decorate the vehicle?", a: "Yes — magnetic signs, ribbon and non-adhesive decor are welcome. Our team can install them before pickup." },
    ],
  },
  "airport-transfers": {
    slug: "airport-transfers",
    h1: "Sacramento Airport (SMF) Car Service & Airport Transfers",
    intro:
      "Flat-rate, flight-tracked transfers to and from Sacramento International (SMF), plus Oakland, SFO, San Jose and private terminals at Sacramento Executive and McClellan.",
    highlights: [
      "Live flight tracking with automatic pickup adjustments",
      "Curbside or in-terminal meet-and-greet with name board",
      "Complimentary wait time on all arriving flights",
      "Generous luggage capacity in SUVs and vans",
      "Corporate account billing with monthly invoicing",
      "24/7 dispatch for red-eye and pre-dawn departures",
    ],
    vehicles: ["executive-sedan", "luxury-suv"],
    faqs: [
      { q: "What if my flight is delayed?", a: "We monitor your flight number and adjust automatically. There is no charge for airline-caused delays." },
      { q: "Do you serve SFO and OAK?", a: "Yes. Long-distance transfers are quoted as a flat rate including tolls." },
    ],
  },
  "prom-homecoming": {
    slug: "prom-homecoming",
    h1: "Prom & Homecoming Limo Rentals in Sacramento",
    intro:
      "Chaperone-approved, strictly alcohol-free prom packages with parent check-in calls, verified itineraries and direct door-to-venue service.",
    highlights: [
      "Zero-tolerance alcohol policy, enforced by the chauffeur",
      "Parent confirmation call before departure and after drop-off",
      "Fixed itinerary with named pickup and drop-off addresses",
      "Photo-ready stretch limos and Hummer limos",
      "Group rates for 10 to 30 students",
      "Background-checked, uniformed chauffeurs only",
    ],
    vehicles: ["stretch-limousine", "hummer-limo", "party-bus"],
    faqs: [
      { q: "Do parents need to sign anything?", a: "Yes — a parent or guardian signs the itinerary and conduct agreement for every student group." },
      { q: "Can the route include dinner?", a: "Absolutely. Multi-stop prom routes with a dinner reservation are our most popular package." },
    ],
  },
  "corporate-travel": {
    slug: "corporate-travel",
    h1: "Corporate Car Service & Executive Chauffeurs in Sacramento",
    intro:
      "Discreet executive transportation for roadshows, client entertainment, capitol meetings and conference shuttles — with account billing and a single point of contact.",
    highlights: [
      "Corporate accounts with consolidated monthly invoicing",
      "Dedicated dispatch line for assistants and travel managers",
      "Quiet cabins for calls, with Wi-Fi hotspots on request",
      "Multi-vehicle conference and event shuttles",
      "NDA-friendly chauffeurs trained in discretion",
      "Capitol, Downtown Commons and Aerojet-area expertise",
    ],
    vehicles: ["executive-sedan", "luxury-suv", "party-bus"],
    faqs: [
      { q: "Can we set up billing?", a: "Yes. We open net-15 or net-30 corporate accounts with itemized trip reporting." },
      { q: "Do you handle multi-city roadshows?", a: "We coordinate Sacramento legs and partner with vetted operators in other markets." },
    ],
  },
  "wine-tours": {
    slug: "wine-tours",
    h1: "Napa, Amador & Lodi Wine Tours from Sacramento",
    intro:
      "All-day chauffeured wine tours with curated itineraries, tasting-room introductions and a relaxed hourly rate so nobody has to watch the clock — or the road.",
    highlights: [
      "Curated Napa, Sonoma, Amador, Lodi and Clarksburg routes",
      "Tasting appointments booked on your behalf",
      "Coolers, ice and glassware provided",
      "Case storage and secure transport of your purchases",
      "Lunch stop coordination at winery restaurants",
      "6, 8 and 10-hour packages with flat pricing",
    ],
    vehicles: ["party-bus", "luxury-suv", "stretch-limousine"],
    faqs: [
      { q: "Can we bring food and drinks?", a: "Yes — outside food and beverages are welcome for guests 21 and over." },
      { q: "How many wineries fit in a day?", a: "Three to four is the sweet spot for an 8-hour tour, including lunch." },
    ],
  },
  "bachelor-bachelorette": {
    slug: "bachelor-bachelorette",
    h1: "Bachelor & Bachelorette Party Bus Rentals in Sacramento",
    intro:
      "Party bus and Hummer limo packages built for multi-stop nights through Midtown, K Street and Old Sacramento — with a chauffeur who keeps the group together.",
    highlights: [
      "Club-grade sound, LED lighting and wraparound seating",
      "Multi-stop routes with the chauffeur on call between venues",
      "Bar and cooler space stocked to your list",
      "Groups from 10 to 30 guests in one vehicle",
      "Late-night and after-hours returns available",
      "Flat hourly rate with no surprise stop fees",
    ],
    vehicles: ["party-bus", "hummer-limo", "stretch-limousine"],
    faqs: [
      { q: "Is there a minimum booking?", a: "Weekend party bus rentals carry a four-hour minimum; weekdays are three." },
      { q: "Can we pick the playlist?", a: "Yes — Bluetooth and aux control are handed to the group." },
    ],
  },
  "concerts-sports": {
    slug: "concerts-sports",
    h1: "Concert & Sporting Event Transportation in Sacramento",
    intro:
      "Door-drop service at Golden 1 Center, Sutter Health Park, Toyota Amphitheatre and Chase Center — no parking hunt, no rideshare surge after the final whistle.",
    highlights: [
      "Pre-arranged drop-off and pickup points at every major venue",
      "Chauffeur waits on site for the entire event",
      "Tailgate-friendly vehicles with cooler space",
      "Group rates for suites and season-ticket parties",
      "Bay Area and Reno event runs quoted flat",
      "Post-event departure timing coordinated by text",
    ],
    vehicles: ["party-bus", "luxury-suv", "hummer-limo"],
    faqs: [
      { q: "Where do we meet after the show?", a: "Your chauffeur texts a fixed meeting point before the event and stays there until your group arrives." },
      { q: "Do you charge for wait time?", a: "Event bookings are hourly, so the wait is already included." },
    ],
  },
  quinceaneras: {
    slug: "quinceaneras",
    h1: "Quinceañera Limousine Rentals in Sacramento",
    intro:
      "Photo-ready vehicles with family-sized capacity and bilingual chauffeurs for the church, the photo session and the salón — treated with the care the day deserves.",
    highlights: [
      "White and black stretch limos and Hummer limos",
      "Bilingual (English/Spanish) chauffeurs on request",
      "Court of honor transport for up to 20 guests",
      "Photo-stop coordination at Capitol Park and Old Sacramento",
      "Multi-vehicle packages for extended family",
      "Decor installation before pickup",
    ],
    vehicles: ["hummer-limo", "stretch-limousine", "party-bus"],
    faqs: [
      { q: "Can we book more than one vehicle?", a: "Yes — multi-vehicle quinceañera packages are discounted." },
      { q: "How long do you hold the vehicle?", a: "Most families book 5-6 hours to cover church, photos and arrival at the salón." },
    ],
  },
  anniversaries: {
    slug: "anniversaries",
    h1: "Anniversary & Date Night Limousine Service in Sacramento",
    intro:
      "A quiet, elegant evening: riverfront drives, dinner reservations along the Kay and champagne waiting on ice when you step in.",
    highlights: [
      "Champagne and glassware service on arrival",
      "Dinner reservation assistance downtown and in Midtown",
      "Scenic riverfront and Old Sacramento drives",
      "Discreet, formally attired chauffeurs",
      "Three-hour date-night packages",
      "Surprise pickups coordinated in advance",
    ],
    vehicles: ["executive-sedan", "stretch-limousine", "luxury-suv"],
    faqs: [
      { q: "Can you keep it a surprise?", a: "Yes — we confirm details with you only and arrive unannounced at your chosen time." },
      { q: "Is champagne included?", a: "Glassware and ice are included; we can provide the bottle on request." },
    ],
  },
  "night-out": {
    slug: "night-out",
    h1: "Night Out & Club Hopping Limo Service in Sacramento",
    intro:
      "One flat hourly rate for the whole night through Midtown, K Street, R Street and Old Sacramento — your chauffeur on call between every stop.",
    highlights: [
      "Unlimited stops within the reserved hours",
      "Chauffeur on standby, reachable by text",
      "Party bus, Hummer limo or stretch limo options",
      "Safe rides home for every guest",
      "Birthday and group-celebration packages",
      "Late-night availability seven nights a week",
    ],
    vehicles: ["party-bus", "hummer-limo", "executive-sedan"],
    faqs: [
      { q: "Is there a limit on stops?", a: "No. Within your reserved hours you can stop as often as you like." },
      { q: "How late can we run?", a: "Our dispatch is staffed 24/7 and we regularly run until 3am." },
    ],
  },
};

export type Location = {
  slug: string;
  city: string;
  county: string;
  blurb: string;
  intro: string;
  landmarks: string[];
  driveTime: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "sacramento",
    city: "Sacramento",
    county: "Sacramento County",
    blurb: "Downtown, Midtown, Land Park and Natomas — our home base.",
    intro:
      "Our chauffeurs work Sacramento every night of the week: Capitol events, Golden 1 Center concerts, Midtown dinners and SMF runs from every neighborhood between Land Park and Natomas.",
    landmarks: ["Golden 1 Center", "State Capitol", "Old Sacramento Waterfront", "Sutter Health Park", "Sacramento International (SMF)"],
    driveTime: "0-15 minutes to downtown",
  },
  {
    slug: "elk-grove",
    city: "Elk Grove",
    county: "Sacramento County",
    blurb: "Family celebrations, quinceañeras and SMF transfers.",
    intro:
      "Elk Grove is one of our busiest pickup areas for weddings, quinceañeras and early-morning airport transfers, with flat rates from every neighborhood south of Highway 99.",
    landmarks: ["Elk Grove Regional Park", "District56", "Sheldon high schools", "Laguna Ridge"],
    driveTime: "20-30 minutes to downtown Sacramento",
  },
  {
    slug: "roseville",
    city: "Roseville",
    county: "Placer County",
    blurb: "Weddings, wine tours and corporate travel in Placer County.",
    intro:
      "From Westfield Galleria dinners to Placer County vineyard weddings, we cover Roseville with the same flat-rate pricing and 15-minute-early arrival standard.",
    landmarks: ["Westfield Galleria", "Maidu Regional Park", "Roseville Golfland", "Kaiser Roseville"],
    driveTime: "25-35 minutes to downtown Sacramento",
  },
  {
    slug: "folsom",
    city: "Folsom",
    county: "Sacramento County",
    blurb: "Historic Folsom nights out and Amador wine runs.",
    intro:
      "Folsom clients book us for Sutter Street evenings, lakeside weddings and Amador County wine tours that start before the tasting rooms open.",
    landmarks: ["Historic Sutter Street", "Folsom Lake", "Palladio at Broadstone", "Folsom Powerhouse"],
    driveTime: "30-40 minutes to downtown Sacramento",
  },
  {
    slug: "davis",
    city: "Davis",
    county: "Yolo County",
    blurb: "UC Davis events, formals and airport runs.",
    intro:
      "We serve Davis for UC Davis formals and graduations, Mondavi Center evenings and Clarksburg wine routes, plus SMF and SFO transfers on university schedules.",
    landmarks: ["UC Davis campus", "Mondavi Center", "Downtown Davis", "Clarksburg wine trail"],
    driveTime: "20-25 minutes to downtown Sacramento",
  },
  {
    slug: "rocklin",
    city: "Rocklin",
    county: "Placer County",
    blurb: "Proms, corporate shuttles and group charters.",
    intro:
      "Rocklin and Loomis groups use our party buses for proms and Tahoe day trips, and our sedans for weekday Sierra College and corporate-park pickups.",
    landmarks: ["Quarry Park Amphitheatre", "Sierra College", "Whitney Ranch", "Blue Oaks"],
    driveTime: "30-40 minutes to downtown Sacramento",
  },
  {
    slug: "citrus-heights",
    city: "Citrus Heights",
    county: "Sacramento County",
    blurb: "Night-out packages and airport transfers.",
    intro:
      "Citrus Heights sits minutes from our yard, which makes it one of our most affordable pickup areas for hourly night-out charters and SMF transfers.",
    landmarks: ["Sunrise Mall", "Rusch Park", "Sylvan Corners", "Birdcage Centre"],
    driveTime: "20-25 minutes to downtown Sacramento",
  },
  {
    slug: "rancho-cordova",
    city: "Rancho Cordova",
    county: "Sacramento County",
    blurb: "Corporate campuses and Highway 50 corridor service.",
    intro:
      "We handle Rancho Cordova's corporate campuses and hotel corridor with executive sedans, SUV airport runs and conference shuttles along Highway 50.",
    landmarks: ["Mather Airport", "Hagan Community Park", "Zinfandel corridor", "Aerojet campus"],
    driveTime: "15-25 minutes to downtown Sacramento",
  },
  {
    slug: "west-sacramento",
    city: "West Sacramento",
    county: "Yolo County",
    blurb: "Riverfront weddings and ballpark drop-offs.",
    intro:
      "West Sacramento riverfront venues and Sutter Health Park games are a short hop across Tower Bridge — ideal for hourly charters and wedding shuttles.",
    landmarks: ["Sutter Health Park", "Bridge District", "Tower Bridge", "River Walk Park"],
    driveTime: "5-15 minutes to downtown Sacramento",
  },
  {
    slug: "woodland",
    city: "Woodland",
    county: "Yolo County",
    blurb: "Barn weddings, harvest events and airport transfers.",
    intro:
      "Woodland's barn and vineyard wedding venues are a favorite of ours, and we run flat-rate SMF and SFO transfers from every part of town.",
    landmarks: ["Historic Downtown Woodland", "Yolo County Fairgrounds", "Woodland Opera House", "County Road wedding venues"],
    driveTime: "25-35 minutes to downtown Sacramento",
  },
  {
    slug: "lincoln",
    city: "Lincoln",
    county: "Placer County",
    blurb: "Sun City events, golf outings and casino nights.",
    intro:
      "Lincoln and Sun City clients book us for group dinners, Thunder Valley evenings and golf outings, with sedans and SUVs on standby for airport runs.",
    landmarks: ["Thunder Valley Casino", "Sun City Lincoln Hills", "Twelve Bridges", "Downtown Lincoln"],
    driveTime: "35-45 minutes to downtown Sacramento",
  },
  {
    slug: "natomas",
    city: "Natomas",
    county: "Sacramento County",
    blurb: "Minutes from SMF — our fastest airport pickups.",
    intro:
      "Natomas is closer to Sacramento International than anywhere else we serve, which makes it our quickest and lowest-cost airport transfer zone.",
    landmarks: ["Sacramento International (SMF)", "North Natomas Regional Park", "Natomas Marketplace", "Sleep Train Arena site"],
    driveTime: "10 minutes to SMF",
  },
];

export type VehicleDetail = {
  slug: string;
  h1: string;
  intro: string;
  specs: { label: string; value: string }[];
  bestFor: string[];
  included: string[];
  services: string[];
  faqs: { q: string; a: string }[];
};

export const VEHICLE_DETAILS: Record<string, VehicleDetail> = {
  "stretch-limousine": {
    slug: "stretch-limousine",
    h1: "Stretch Limousine Rental in Sacramento",
    intro:
      "A mirror-black stretch limousine is still the most photographed arrival in Sacramento. Hand-finished leather, fiber-optic lighting and a chauffeur in full uniform make it the default choice for weddings, anniversaries and black-tie evenings.",
    specs: [
      { label: "Capacity", value: "6-10 passengers" },
      { label: "Luggage", value: "3-4 carry-on bags" },
      { label: "Colors", value: "Black or white" },
      { label: "Minimum booking", value: "3 hours (4 on Saturdays)" },
    ],
    bestFor: ["Weddings", "Anniversaries", "Prom & formals", "Theatre and gala nights", "Marriage proposals"],
    included: [
      "Uniformed, background-checked chauffeur",
      "Fiber-optic LED cabin lighting",
      "Stocked bar with ice wells and glassware",
      "Premium surround sound with Bluetooth",
      "Privacy partition and flat-screen TV",
      "Red-carpet and umbrella service",
    ],
    services: ["weddings", "prom-homecoming", "corporate-travel"],
    faqs: [
      { q: "How many people really fit comfortably?", a: "Ten fit legally, but eight is the comfortable number once everyone is in formal wear." },
      { q: "Can we bring our own champagne?", a: "Yes. Ice, coolers and glassware are provided; every passenger must be 21 or older." },
    ],
  },
  "party-bus": {
    slug: "party-bus",
    h1: "Party Bus Rental in Sacramento",
    intro:
      "Our party buses are built like a nightclub on wheels: wraparound leather perimeter seating, a color-changing laser ceiling and a subwoofer system tuned for the run from Midtown to Napa. Stand up, move around and keep the night going between stops.",
    specs: [
      { label: "Capacity", value: "18-30 passengers" },
      { label: "Standing room", value: "Full walk-around height" },
      { label: "Sound", value: "Club-grade amp and subwoofers" },
      { label: "Minimum booking", value: "4 hours on Fri/Sat" },
    ],
    bestFor: ["Birthdays", "Bachelor & bachelorette parties", "Wine tours", "Concerts and Kings games", "Club hopping in Midtown"],
    included: [
      "Color-changing LED and laser ceiling",
      "Wraparound leather perimeter seating",
      "Dance pole and open floor space",
      "Multiple bars, coolers and ice",
      "Bluetooth and aux control for your playlist",
      "Tinted privacy glass throughout",
    ],
    services: ["wine-tours", "bachelor-bachelorette", "concerts-sporting-events"],
    faqs: [
      { q: "Can we drink on board?", a: "Yes, if every passenger is 21 or older. For under-21 groups the bars are emptied and sealed before pickup." },
      { q: "Is there a restroom?", a: "Our largest coaches have one. We plan comfort stops into every wine tour itinerary either way." },
    ],
  },
  "hummer-limo": {
    slug: "hummer-limo",
    h1: "Hummer Limo Rental in Sacramento",
    intro:
      "Nothing turns heads at the curb like a stretched Hummer. Available in white or black with a fully mirrored, LED-drenched interior, it is the vehicle groups pick when the photos matter as much as the ride.",
    specs: [
      { label: "Capacity", value: "14-20 passengers" },
      { label: "Colors", value: "White or black" },
      { label: "Lighting", value: "Mirrored LED, laser and strobe" },
      { label: "Minimum booking", value: "3 hours" },
    ],
    bestFor: ["Prom and homecoming", "Quinceañeras", "Sweet sixteens", "Bachelorette parties", "Big group entrances"],
    included: [
      "Mirrored LED interior with strobes",
      "Concert-level audio system",
      "Twin bars with coolers",
      "Wraparound leather bench seating",
      "Multiple TV screens",
      "Chaperone-friendly under-21 setup",
    ],
    services: ["prom-homecoming", "weddings", "bachelor-bachelorette"],
    faqs: [
      { q: "Do you serve high school events?", a: "Yes. Under-21 bookings run a sealed-bar, no-alcohol policy with a parent or chaperone contact on file." },
      { q: "Can it reach our street?", a: "Most Sacramento neighborhoods are fine. Send the address and dispatch will confirm turning room before your date." },
    ],
  },
  "luxury-suv": {
    slug: "luxury-suv",
    h1: "Luxury SUV Service in Sacramento",
    intro:
      "Escalade-class SUVs for SMF pickups, corporate roadshows and family transfers. Quiet, climate-controlled and roomy enough for a full set of luggage without splitting the group into two cars.",
    specs: [
      { label: "Capacity", value: "5-7 passengers" },
      { label: "Luggage", value: "5-6 full-size bags" },
      { label: "Best route", value: "10-25 minutes to SMF" },
      { label: "Minimum booking", value: "Point-to-point, no minimum" },
    ],
    bestFor: ["Airport transfers to SMF", "Executive and corporate travel", "Family trips", "Golf and ski runs", "Napa day trips"],
    included: [
      "Captain's chair seating",
      "Generous luggage capacity",
      "Complimentary bottled water",
      "USB charging at every seat",
      "Rear climate control",
      "Live flight tracking on airport runs",
    ],
    services: ["airport-transfers", "corporate-travel", "wine-tours"],
    faqs: [
      { q: "Will you wait if my flight is late?", a: "Yes. We track your flight and adjust pickup automatically, with 60 minutes of free wait time on domestic arrivals." },
      { q: "Do you have child seats?", a: "Infant, toddler and booster seats are available free of charge — just request them when you book." },
    ],
  },
  "executive-sedan": {
    slug: "executive-sedan",
    h1: "Executive Sedan & Chauffeur Service in Sacramento",
    intro:
      "The workhorse of executive travel: a professionally attired chauffeur, a spotless quiet cabin and a fixed, all-inclusive rate to any Sacramento-area address. Ideal for solo travelers and small teams who need to work en route.",
    specs: [
      { label: "Capacity", value: "1-3 passengers" },
      { label: "Luggage", value: "2-3 bags" },
      { label: "Rate", value: "Fixed, all-inclusive quote" },
      { label: "Minimum booking", value: "Point-to-point, no minimum" },
    ],
    bestFor: ["Airport runs", "Business meetings", "Court and medical appointments", "Date nights", "Hourly as-directed service"],
    included: [
      "Leather rear cabin",
      "Bottled water and mints",
      "Quiet ride for calls and email",
      "USB charging",
      "Newspaper on request",
      "Meet-and-greet with name board",
    ],
    services: ["airport-transfers", "corporate-travel"],
    faqs: [
      { q: "Is gratuity included?", a: "Your quote includes gratuity, fuel and tolls. There are no surprise line items at drop-off." },
      { q: "Can I book by the hour?", a: "Yes — as-directed hourly service is available with a two-hour minimum." },
    ],
  },
};
