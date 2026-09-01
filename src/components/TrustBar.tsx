import { TRUST_POINTS } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { Check } from "lucide-react";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="sr-only">Why choose USA Limo Vibes</h2>
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((point, i) => (
            <Reveal as="li" key={point.label} delay={i * 60} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-gold">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                  {point.label}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{point.detail}</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
