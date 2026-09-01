import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { TrustBar } from "@/components/TrustBar";
import { COMPANY } from "@/lib/site-data";
import hero from "@/assets/hero-limo-night.jpg";

const title = "About USA Limo Vibes | Sacramento Chauffeur Company";
const description =
  "Family-operated since 2011, USA Limo Vibes runs a 20-vehicle Sacramento fleet with background-checked chauffeurs, full commercial insurance and TCP licensing.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="section-dark py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-4 max-w-3xl text-4xl text-ink-foreground sm:text-5xl">
            {COMPANY.yearsInBusiness} years of driving Sacramento's biggest nights
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">
            What started in 2011 with a single Lincoln stretch and a phone line is now a 20-vehicle
            fleet, a full-time dispatch team and thousands of weddings, flights and celebrations
            delivered on time.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Our story</h2>
            <span className="gold-rule mt-5" />
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                USA Limo Vibes is family-owned and Sacramento-based. We built the company around a
                simple promise our founder made to his first client: the car will be early, spotless,
                and driven by someone who treats your guests like family.
              </p>
              <p>
                Today we operate stretch limousines, party buses, Hummer limos, luxury SUVs and
                executive sedans out of a single Sacramento facility, where every vehicle is washed,
                detailed and inspected between reservations rather than at the end of the week.
              </p>
              <p>
                Our chauffeurs complete defensive-driving certification, DOT physicals and
                hospitality training before their first solo run, and every one of them is
                background-checked and drug-tested on an ongoing schedule.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={hero}
              alt="USA Limo Vibes stretch limousine at night in downtown Sacramento"
              loading="lazy"
              width={1920}
              height={1088}
              className="aspect-4/3 w-full rounded-sm object-cover shadow-luxe"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            ["20+", "Vehicles in the fleet"],
            [`${COMPANY.yearsInBusiness}+`, "Years serving Sacramento"],
            ["12,000+", "Reservations completed"],
            ["5.0", "Average customer rating"],
          ].map(([stat, label], i) => (
            <Reveal key={label} delay={i * 70}>
              <p className="font-display text-4xl text-burgundy">{stat}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <TrustBar />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl">Licensing, insurance &amp; safety</h2>
          <span className="gold-rule mt-5" />
          <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              USA Limo Vibes operates as a charter-party carrier licensed by the California Public
              Utilities Commission under {COMPANY.tcp}, and holds {COMPANY.dot} for interstate
              charters. Certificates of insurance are available on request for corporate and venue
              accounts.
            </p>
            <p>
              We carry commercial liability coverage well above the state minimum, maintain a
              zero-tolerance alcohol and drug policy for chauffeurs, and enforce strictly
              alcohol-free service for all school and minor-passenger bookings.
            </p>
            <p>
              Vehicles are inspected on a preventative maintenance schedule, sanitized between every
              reservation, and equipped with first-aid kits and fire extinguishers.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
