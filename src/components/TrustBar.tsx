import { TRUST_POINTS } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { Award, Clock, ShieldCheck, Sparkles, Timer, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "Licensed & Insured": ShieldCheck,
  "Professional Chauffeurs": UserCheck,
  "24/7 Availability": Clock,
  "On-Time Guarantee": Timer,
  "15+ Years in Business": Award,
  "Clean & Sanitized": Sparkles,
};

export function TrustBar() {
  return (
    <section className="section-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink-foreground sm:text-4xl">
            The difference is in the details
          </h2>
          <span className="gold-rule mt-6" />
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((point, i) => {
            const Icon = ICONS[point.label] ?? ShieldCheck;
            return (
              <Reveal as="li" key={point.label} delay={i * 60}>
                <div className="group h-full rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-gold/50 hover:bg-white/[0.05]">
                  <span className="grid h-12 w-12 place-items-center rounded-sm border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg text-ink-foreground">{point.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
