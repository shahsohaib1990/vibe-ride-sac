import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FleetCard } from "@/components/FleetCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { COMPANY, FLEET, LOCATIONS, SERVICE_AREA, SERVICES } from "@/lib/site-data";

const title = "Sacramento Limousine & Party Bus Service | USA Limo Vibes";
const description =
  "Luxury limousines, party buses, Hummer limos, SUVs and sedans in Sacramento. Licensed, insured chauffeurs available 24/7. Get an instant quote.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LimousineService",
          name: COMPANY.name,
          telephone: COMPANY.phone,
          email: COMPANY.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "1201 J Street, Suite 200",
            addressLocality: "Sacramento",
            addressRegion: "CA",
            postalCode: "95814",
            addressCountry: "US",
          },
          areaServed: SERVICE_AREA,
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "400" },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="eyebrow">Our Fleet</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              Impeccably maintained vehicles for every occasion
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET.map((vehicle, i) => (
              <Reveal key={vehicle.slug} delay={i * 70}>
                <FleetCard vehicle={vehicle} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="eyebrow">Services We Offer</p>
            <h2 className="mt-3 max-w-2xl text-3xl text-ink-foreground sm:text-4xl">
              From the aisle to the after-party
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 70}>
                <ServiceCard service={service} tone="dark" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">Service Area</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Serving Sacramento and the greater Valley</h2>
            <span className="gold-rule mt-6" />
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              We pick up throughout Sacramento County, Placer County and Yolo County, and travel to
              Napa, Sonoma, Amador, Lake Tahoe and the Bay Area for full-day charters.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to="/locations/$slug"
                    params={{ slug: loc.slug }}
                    className="flex items-center gap-2 rounded-sm border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-gold"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="truncate">{loc.city}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
