import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { LOCATIONS } from "@/lib/site-data";

const title = "Service Areas | Sacramento Valley Limo Service | USA Limo Vibes";
const description =
  "Limousine, party bus and chauffeur service across Sacramento, Elk Grove, Roseville, Folsom, Davis, Rocklin, West Sacramento and the greater Sacramento Valley.";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/locations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <section className="section-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow">Service Areas</p>
          <h1 className="mt-4 max-w-3xl text-4xl text-ink-foreground sm:text-5xl">
            Where we pick up across the Sacramento Valley
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">
            Flat-rate chauffeur service throughout Sacramento, Placer and Yolo counties, with
            full-day charters to Napa, Sonoma, Amador and Lake Tahoe.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.slug} delay={(i % 3) * 70}>
                <Link
                  to="/locations/$slug"
                  params={{ slug: loc.slug }}
                  className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-colors hover:border-gold"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {loc.county}
                  </span>
                  <h2 className="mt-4 text-xl">{loc.city}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {loc.blurb}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
                    View {loc.city} service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
