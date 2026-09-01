import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { COMPANY, SERVICE_AREA } from "@/lib/site-data";

const title = "Book a Limo in Sacramento | Contact USA Limo Vibes";
const description =
  "Reserve a limousine, party bus or executive sedan in Sacramento. Call 24/7 or submit the booking form for a flat, all-inclusive quote within 15 minutes.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="section-dark py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow">Contact &amp; Book</p>
          <h1 className="mt-4 max-w-3xl text-4xl text-ink-foreground sm:text-5xl">
            Reserve your vehicle
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">
            Send your itinerary below or call live dispatch any hour of the day. Same-day requests are
            welcome — availability is confirmed in writing before payment.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-13 bg-gold px-8 text-base font-semibold text-gold-foreground hover:bg-gold-soft"
          >
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {COMPANY.phone}
            </a>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <BookingForm
            variant="page"
            withSpecialRequests
            title="Full Booking Request"
            subtitle="All fields help us quote accurately the first time."
          />

          <aside className="space-y-8">
            <div className="rounded-sm border border-border bg-card p-6">
              <h2 className="text-xl">Reach us</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a href={COMPANY.phoneHref} className="flex items-start gap-3 hover:text-burgundy">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="font-semibold">{COMPANY.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-start gap-3 break-all hover:text-burgundy"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {COMPANY.address}
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {COMPANY.hours}
                </li>
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-card p-6">
              <h2 className="text-xl">Service area</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {SERVICE_AREA.join(" · ")} and surrounding communities.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {COMPANY.tcp} · {COMPANY.dot}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl">Where we operate</h2>
          <span className="gold-rule mt-5" />
          <div className="mt-8 overflow-hidden rounded-sm border border-border shadow-luxe">
            <iframe
              title="Map of the USA Limo Vibes Sacramento service area"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-121.75%2C38.35%2C-121.15%2C38.80&layer=mapnik&marker=38.5816%2C-121.4944"
              loading="lazy"
              className="h-[420px] w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
