import { Link } from "@tanstack/react-router";
import { CalendarCheck, Phone } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-ink/95 backdrop-blur-md lg:hidden">
      <a
        href={COMPANY.phoneHref}
        className="flex min-h-14 items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink-foreground"
      >
        <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex min-h-14 items-center justify-center gap-2 bg-gold text-sm font-semibold uppercase tracking-[0.14em] text-gold-foreground"
      >
        <CalendarCheck className="h-4 w-4" aria-hidden="true" />
        Book Now
      </Link>
    </div>
  );
}
