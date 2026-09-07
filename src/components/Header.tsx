import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { COMPANY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/fleet", label: "Fleet" },
  { to: "/services", label: "Services" },
  { to: "/locations", label: "Areas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 transition-colors duration-300",
        scrolled ? "bg-ink/95 backdrop-blur-md" : "bg-ink",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-gold/60 font-display text-sm text-gold">
            UL
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight text-ink-foreground sm:text-xl">
              USA Limo Vibes
            </span>
            <span className="hidden text-[0.65rem] uppercase tracking-[0.25em] text-ink-muted sm:block">
              Sacramento Chauffeur Service
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-gold" }}
                inactiveProps={{ className: "text-ink-muted hover:text-ink-foreground" }}
                className="text-sm font-medium uppercase tracking-[0.12em] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={COMPANY.phoneHref}
            className="ml-2 hidden items-center gap-3 rounded-sm bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition-colors hover:bg-gold-soft hover:text-gold-foreground md:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="flex flex-col leading-tight">
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-gold-foreground/80">
                Reservations 24/7
              </span>
              <span>{COMPANY.phone}</span>
            </span>
          </a>

          <a
            href={COMPANY.phoneHref}
            aria-label={`Call ${COMPANY.phone}`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-gold text-gold-foreground shadow-gold md:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-white/15 text-ink-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink px-4 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-gold" }}
                  inactiveProps={{ className: "text-ink-foreground" }}
                  className="block border-b border-white/5 py-4 text-base font-medium uppercase tracking-[0.12em]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-gold text-sm font-semibold uppercase tracking-[0.12em] text-gold-foreground hover:bg-gold-soft"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {COMPANY.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
