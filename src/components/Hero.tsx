import { Link } from "@tanstack/react-router";
import { ShieldCheck, Star } from "lucide-react";
import heroImage from "@/assets/hero-limo-night.jpg";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="Black stretch limousine on a Sacramento street at night with Tower Bridge lit in the background"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_minmax(0,460px)] lg:items-center lg:py-24">
        <div>
          <p className="eyebrow">Sacramento · Since 2011</p>
          <h1 className="mt-4 text-4xl leading-[1.08] text-ink-foreground sm:text-5xl lg:text-6xl">
            Sacramento's Premier Limousine &amp; Party Bus Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Chauffeur-driven stretch limos, party buses, Hummers, SUVs and executive sedans for
            weddings, airport transfers, wine tours and unforgettable nights out.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 border-white/25 bg-transparent px-8 text-base font-semibold text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
            >
              <Link to="/fleet">Explore the Fleet</Link>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-muted">
            <li className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
              5.0 average from 400+ reviews
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
              Licensed, insured &amp; TCP certified
            </li>
          </ul>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
