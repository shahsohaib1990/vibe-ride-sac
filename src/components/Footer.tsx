import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="section-dark border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-ink-foreground">USA Limo Vibes</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Luxury limousine, party bus and executive chauffeur service for Sacramento and the
            surrounding Valley since 2011.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 text-ink-muted transition-colors hover:border-gold/60 hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-ink-muted">
            <li>
              <a href={COMPANY.phoneHref} className="flex items-start gap-3 hover:text-gold">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 hover:text-gold">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {COMPANY.address}
            </li>
            <li className="pl-7">{COMPANY.hours}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-ink-muted">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Company</h2>
          <ul className="mt-5 space-y-3 text-sm text-ink-muted">
            <li>
              <Link to="/fleet" className="hover:text-gold">
                Our Fleet
              </Link>
            </li>
            <li>
              <Link to="/locations" className="hover:text-gold">
                Service Areas
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Book Now
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-ink-muted/80">
            {COMPANY.tcp}
            <br />
            {COMPANY.dot}
            <br />
            Fully licensed &amp; insured in the State of California.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} USA Limo Vibes. All rights reserved.</p>
          <p>Sacramento · Elk Grove · Roseville · Folsom · Davis · Rocklin</p>
        </div>
      </div>
    </footer>
  );
}
