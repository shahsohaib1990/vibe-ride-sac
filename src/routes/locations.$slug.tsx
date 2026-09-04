import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Landmark, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FleetCard } from "@/components/FleetCard";
import { BookingForm } from "@/components/BookingForm";
import { CtaBanner } from "@/components/CtaBanner";
import { COMPANY, FLEET, LOCATIONS, SERVICES } from "@/lib/site-data";
import heroImage from "@/assets/hero-limo-night.jpg";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = LOCATIONS.find((l) => l.slug === params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Area Not Found | USA Limo Vibes" }, { name: "robots", content: "noindex" }] };
    }
    const { city } = loaderData.location;
    const title = `${city} Limo Service & Party Bus Rental | USA Limo Vibes`;
    const description = `Chauffeured limousines, party buses, Hummer limos, SUVs and sedans in ${city}, CA. Licensed, insured and available 24/7 for weddings, airport transfers and nights out.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/locations/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/locations/${params.slug}` }],
    };
  },
  notFoundComponent: LocationNotFound,
  component: LocationDetailPage,
});

function LocationNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl sm:text-4xl">Area not found</h1>
      <p className="mt-4 text-muted-foreground">See every city we serve across the Sacramento Valley.</p>
      <Link
        to="/locations"
        className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-gold hover:underline"
      >
        All service areas
      </Link>
    </div>
  );
}

function LocationDetailPage() {
  const { location } = Route.useLoaderData();
  const nearby = LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img src={heroImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_minmax(0,440px)] lg:items-start lg:py-24">
          <div>
            <p className="eyebrow">
              <Link to="/locations" className="hover:text-gold">
                Service Areas
              </Link>{" "}
              / {location.city}
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl leading-[1.12] text-ink-foreground sm:text-4xl lg:text-5xl">
              Limousine &amp; Party Bus Service in {location.city}, CA
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">{location.intro}</p>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-muted">
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                {location.county}
              </li>
              <li className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                {location.driveTime}
              </li>
            </ul>
          </div>
          <BookingForm title={`Quote for ${location.city}`} />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Popular in {location.city}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Services we run here most</h2>
            <span className="gold-rule mt-6" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="block rounded-sm border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-gold"
                  >
                    {service.title} in {location.city}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Landmarks &amp; Venues</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Where we drop off</h2>
            <span className="gold-rule mt-6" />
            <ul className="mt-8 space-y-3">
              {location.landmarks.map((mark) => (
                <li key={mark} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Landmark className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {mark}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {COMPANY.hours}. Every {location.city} reservation is quoted flat, with gratuity and
              fuel explained up front.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Fleet available in {location.city}</h2>
            <span className="gold-rule mt-5" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET.slice(0, 3).map((vehicle, i) => (
              <Reveal key={vehicle.slug} delay={i * 70}>
                <FleetCard vehicle={vehicle} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12">
              <p className="eyebrow">Nearby Areas</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {nearby.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      to="/locations/$slug"
                      params={{ slug: loc.slug }}
                      className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-gold"
                    >
                      <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                      {loc.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
