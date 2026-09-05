import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES } from "@/lib/site-data";
import interior from "@/assets/interior-detail.jpg";

const title = "Limo Services in Sacramento: Weddings, SMF, Wine Tours | USA Limo Vibes";
const description =
  "Wedding transportation, Sacramento International (SMF) airport transfers, prom, corporate travel, Napa and Amador wine tours, quinceañeras and night-out packages.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="section-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl text-ink-foreground sm:text-5xl">
            Chauffeured transportation for every occasion in Sacramento
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">
            Hourly charters, point-to-point transfers and full-day itineraries — all quoted flat, with
            gratuity and fuel options explained up front.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={interior}
              alt="Limousine interior with leather seating, ambient lighting and a stocked bar"
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-4/3 w-full rounded-sm object-cover shadow-luxe"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-4xl">How booking works</h2>
            <span className="gold-rule mt-5" />
            <ol className="mt-8 space-y-6">
              {[
                ["Share your itinerary", "Date, times, stops and headcount — a quote follows within 15 minutes."],
                ["Confirm your vehicle", "We hold your vehicle with a card on file and email a written agreement."],
                ["Meet your chauffeur", "Your driver texts on the way and arrives 15 minutes early, every time."],
              ].map(([heading, body], i) => (
                <li key={heading} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-ink font-display text-gold">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold">{heading}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
