import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="bg-burgundy py-16 text-burgundy-foreground lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-4xl">Ready to ride in style?</h2>
          <p className="mt-4 text-base text-burgundy-foreground/85">
            Live dispatch answers 24/7. Call for immediate availability or request a written quote in
            under a minute.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-13 bg-gold px-8 text-base font-semibold text-gold-foreground hover:bg-gold-soft"
          >
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-13 border-burgundy-foreground/40 bg-transparent px-8 text-base font-semibold text-burgundy-foreground hover:bg-white/10 hover:text-burgundy-foreground"
          >
            <Link to="/contact">Get Instant Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
