import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { FLEET } from "@/lib/site-data";

const title = "Limousine, Party Bus & SUV Fleet in Sacramento | USA Limo Vibes";
const description =
  "Browse the USA Limo Vibes fleet: stretch limousines, party buses, Hummer limos, luxury SUVs and executive sedans with capacities from 3 to 30 passengers.";

export const Route = createFileRoute("/fleet/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fleet" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <>
      <section className="section-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow">Our Fleet</p>
          <h1 className="mt-4 max-w-3xl text-4xl text-ink-foreground sm:text-5xl">
            Five vehicle classes, one standard of luxury
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">
            Every vehicle is detailed, sanitized and safety-inspected before dispatch, and driven by
            a uniformed chauffeur who knows the Sacramento region street by street.
          </p>
        </div>
      </section>

      {FLEET.map((vehicle, index) => (
        <section
          key={vehicle.slug}
          id={vehicle.slug}
          className={index % 2 === 1 ? "scroll-mt-24 bg-secondary py-16 lg:py-20" : "scroll-mt-24 py-16 lg:py-20"}
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <Reveal className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="grid gap-4">
                <img
                  src={vehicle.gallery[0]}
                  alt={`${vehicle.name} exterior`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-4/3 w-full rounded-sm object-cover shadow-luxe"
                />
                <div className="grid grid-cols-2 gap-4">
                  {vehicle.gallery.slice(1).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${vehicle.name} interior detail`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="aspect-3/2 w-full rounded-sm object-cover"
                    />
                  ))}
                  <div className="grid aspect-3/2 place-items-center rounded-sm border border-dashed border-border text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    More photos
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <span className="inline-flex items-center gap-2 rounded-sm bg-ink px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                <Users className="h-3.5 w-3.5" aria-hidden="true" />
                {vehicle.capacity}
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl">{vehicle.name}</h2>
              <span className="gold-rule mt-5" />
              <p className="mt-6 leading-relaxed text-muted-foreground">{vehicle.description}</p>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                Amenities
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {vehicle.amenities.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="mt-8 h-13 bg-gold px-8 text-base font-semibold text-gold-foreground hover:bg-gold-soft"
              >
                <Link to="/fleet/$slug" params={{ slug: vehicle.slug }}>
                  View {vehicle.name} Details
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBanner />
    </>
  );
}
