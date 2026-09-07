import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  Building2,
  Cake,
  GlassWater,
  GraduationCap,
  Heart,
  Music,
  PartyPopper,
  Plane,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  weddings: Heart,
  "airport-transfers": Plane,
  "prom-homecoming": GraduationCap,
  "corporate-travel": Briefcase,
  "wine-tours": GlassWater,
  "bachelor-bachelorette": PartyPopper,
  "concerts-sports": Music,
  quinceaneras: Sparkles,
  anniversaries: Cake,
  "night-out": Building2,
};

export function ServiceCard({ service, tone = "light" }: { service: Service; tone?: "light" | "dark" }) {
  const Icon = ICONS[service.slug] ?? Sparkles;
  const dark = tone === "dark";

  return (
    <article
      id={service.slug}
      className={
        dark
          ? "group h-full scroll-mt-28 overflow-hidden rounded-sm border border-white/10 bg-white/[0.03] transition-all hover:border-gold/50 hover:bg-white/[0.05]"
          : "group h-full scroll-mt-28 overflow-hidden rounded-sm border border-border bg-card transition-all hover:border-gold/50 hover:shadow-luxe"
      }
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1024}
          height={576}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span
          className={
            dark
              ? "grid h-11 w-11 place-items-center rounded-sm border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-ink"
              : "grid h-11 w-11 place-items-center rounded-sm bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink"
          }
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className={dark ? "mt-5 text-lg text-ink-foreground" : "mt-5 text-lg text-foreground"}>
          {service.title}
        </h3>
        <p
          className={
            dark
              ? "mt-3 text-sm leading-relaxed text-ink-muted"
              : "mt-3 text-sm leading-relaxed text-muted-foreground"
          }
        >
          {service.description}
        </p>
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:underline"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
