import { Link } from "@tanstack/react-router";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Vehicle } from "@/lib/site-data";

export function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card shadow-luxe/50">
      <div className="relative overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} available from USA Limo Vibes in Sacramento`}
          loading="lazy"
          width={1024}
          height={768}
          className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-sm bg-ink/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          {vehicle.capacity}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-foreground">{vehicle.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{vehicle.short}</p>
        <Button
          asChild
          variant="outline"
          className="mt-6 h-12 justify-between rounded-sm border-burgundy/30 text-sm font-semibold uppercase tracking-[0.12em] text-burgundy hover:bg-burgundy hover:text-burgundy-foreground"
        >
          <Link to="/fleet" hash={vehicle.slug}>
            View Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
