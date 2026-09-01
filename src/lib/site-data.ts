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
