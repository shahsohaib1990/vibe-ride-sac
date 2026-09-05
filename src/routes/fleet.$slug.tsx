import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingForm } from "@/components/BookingForm";
import { CtaBanner } from "@/components/CtaBanner";
import { FLEET, LOCATIONS, SERVICES, VEHICLE_DETAILS } from "@/lib/site-data";

export const Route = createFileRoute("/fleet/$slug")({
  loader: ({ params }) => {
    const vehicle = FLEET.find((v) => v.slug === params.slug);
    const detail = VEHICLE_DETAILS[params.slug];
    if (!vehicle || !detail) throw notFound();
    return { vehicle, detail };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Vehicle Not Found | USA Limo Vibes" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.detail.h1} | USA Limo Vibes`;
    const description = loaderData.detail.intro.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/fleet/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/fleet/${params.slug}` }],
    };
  },
  notFoundComponent: VehicleNotFound,
  component: VehicleDetailPage,
});

function VehicleNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl sm:text-4xl">Vehicle not found</h1>
      <p className="mt-4 text-muted-foreground">That vehicle page does not exist. Browse the full fleet instead.</p>
      <Link
        to="/fleet"
        className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-gold hover:underline"
      >
        View the fleet
      </Link>
    </div>
  );
}

function VehicleDetailPage() {
  const { vehicle, detail } = Route.useLoaderData();
  const services = detail.services
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));
  const others = FLEET.filter((v) => v.slug !== vehicle.slug);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={vehicle.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_minmax(0,440px)] lg:items-start lg:py-24">
          <div>
            <p className="eyebrow">
              <Link to="/fleet" className="hover:text-gold">
                Fleet
              </Link>{" "}
              / {vehicle.name}
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl leading-[1.12] text-ink-foreground sm:text-4xl lg:text-5xl">
              {detail.h1}
            </h1>
            <span className="mt-6 inline-flex items-center gap-2 rounded-sm bg-ink/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold ring-1 ring-gold/30">
              <Users className="h-3.5 w-3.5" aria-hidden="true" />
              {vehicle.capacity}
            </span>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">{detail.intro}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {detail.specs.map((spec) => (
                <div key={spec.label} className="rounded-sm border border-ink-foreground/15 px-4 py-3">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-gold">{spec.label}</dt>
                  <dd className="mt-1 text-sm text-ink-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <BookingForm />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
          <Reveal>
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
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">What's Included</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Inside the {vehicle.name.replace(/s$/, "")}</h2>
            <span className="gold-rule mt-5" />
            <p className="mt-6 leading-relaxed text-muted-foreground">{vehicle.description}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {detail.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Best for</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {detail.bestFor.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {services.length > 0 && (
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <p className="eyebrow">Popular With</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Services this vehicle is booked for</h2>
              <span className="gold-rule mt-6" />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.slug} delay={i * 70}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Common questions</h2>
            <span className="gold-rule mt-5" />
            <dl className="mt-8 space-y-6">
              {detail.faqs.map((faq) => (
                <div key={faq.q}>
                  <dt className="font-semibold">{faq.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-4xl">Where we pick up</h2>
            <span className="gold-rule mt-5" />
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {LOCATIONS.slice(0, 8).map((loc) => (
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

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl">Other vehicles in the fleet</h2>
          <span className="gold-rule mt-5" />
          <div className="mt-8 flex flex-wrap gap-3">
            {others.map((v) => (
              <Link
                key={v.slug}
                to="/fleet/$slug"
                params={{ slug: v.slug }}
                className="rounded-sm border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-gold"
              >
                {v.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
