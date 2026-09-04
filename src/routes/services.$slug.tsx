import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FleetCard } from "@/components/FleetCard";
import { BookingForm } from "@/components/BookingForm";
import { CtaBanner } from "@/components/CtaBanner";
import { FLEET, LOCATIONS, SERVICE_DETAILS, SERVICES } from "@/lib/site-data";
import heroImage from "@/assets/hero-limo-night.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    const detail = SERVICE_DETAILS[params.slug];
    if (!service || !detail) throw notFound();
    return { service, detail };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service Not Found | USA Limo Vibes" }, { name: "robots", content: "noindex" }] };
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
        { property: "og:url", content: `/services/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetailPage,
});

function ServiceNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl sm:text-4xl">Service not found</h1>
      <p className="mt-4 text-muted-foreground">
        That service page does not exist. Browse everything we offer instead.
      </p>
      <Link
        to="/services"
        className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-gold hover:underline"
      >
        All services
      </Link>
    </div>
  );
}

function ServiceDetailPage() {
  const { service, detail } = Route.useLoaderData();
  const vehicles = detail.vehicles
    .map((slug) => FLEET.find((v) => v.slug === slug))
    .filter((v): v is (typeof FLEET)[number] => Boolean(v));

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_minmax(0,440px)] lg:items-start lg:py-24">
          <div>
            <p className="eyebrow">
              <Link to="/services" className="hover:text-gold">
                Services
              </Link>{" "}
              / {service.title}
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl leading-[1.12] text-ink-foreground sm:text-4xl lg:text-5xl">
              {detail.h1}
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">{detail.intro}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {detail.highlights.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ink-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <BookingForm defaultEvent={service.title} />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="eyebrow">Recommended Vehicles</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Best fit for {service.title.toLowerCase()}</h2>
            <span className="gold-rule mt-6" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle, i) => (
              <Reveal key={vehicle.slug} delay={i * 70}>
                <FleetCard vehicle={vehicle} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
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

      <CtaBanner />
    </>
  );
}
