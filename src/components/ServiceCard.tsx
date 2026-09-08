import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service, tone = "light" }: { service: Service; tone?: "light" | "dark" }) {
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
        <h3 className={dark ? "text-lg text-ink-foreground" : "text-lg text-foreground"}>
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
