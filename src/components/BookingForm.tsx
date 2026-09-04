import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EVENT_TYPES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Props = {
  /** Compact hero variant (dark card) vs full page variant (light card). */
  variant?: "hero" | "page";
  withSpecialRequests?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
  /** Preselects the event type dropdown (must match an EVENT_TYPES entry). */
  defaultEvent?: string;
};

export function BookingForm({
  variant = "hero",
  withSpecialRequests = false,
  className,
  title = "Get an Instant Quote",
  subtitle = "Reply within 15 minutes, 24/7.",
  defaultEvent,
}: Props) {
  const presetEvent = defaultEvent && EVENT_TYPES.includes(defaultEvent) ? defaultEvent : "";
  const dark = variant === "hero";
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Quote request received", {
        description: "A reservation specialist will contact you shortly to confirm details.",
      });
    }, 600);
  };

  const fieldClass = cn(
    "h-12 rounded-sm",
    dark
      ? "border-white/15 bg-white/5 text-ink-foreground placeholder:text-ink-muted/70 focus-visible:border-gold"
      : "border-border bg-background",
  );
  const labelClass = cn(
    "text-xs font-semibold uppercase tracking-[0.16em]",
    dark ? "text-ink-muted" : "text-muted-foreground",
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-sm border p-6 shadow-luxe sm:p-8",
        dark ? "border-white/10 bg-ink/85 backdrop-blur-md" : "border-border bg-card",
        className,
      )}
    >
      <h2
        className={cn(
          "font-display text-2xl",
          dark ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-1 text-sm", dark ? "text-ink-muted" : "text-muted-foreground")}>
        {subtitle}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="bf-date" className={labelClass}>
            Pickup Date
          </Label>
          <Input id="bf-date" name="date" type="date" required className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bf-time" className={labelClass}>
            Pickup Time
          </Label>
          <Input id="bf-time" name="time" type="time" required className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bf-pickup" className={labelClass}>
            Pickup Location
          </Label>
          <Input
            id="bf-pickup"
            name="pickup"
            required
            placeholder="Address, hotel or SMF terminal"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bf-dropoff" className={labelClass}>
            Drop-off Location
          </Label>
          <Input
            id="bf-dropoff"
            name="dropoff"
            required
            placeholder="Venue or destination"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bf-event" className={labelClass}>
            Event Type
          </Label>
          <select
            id="bf-event"
            name="eventType"
            required
            defaultValue={presetEvent}
            className={cn(
              "w-full appearance-none rounded-sm border px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-gold/30",
              fieldClass,
            )}
          >
            <option value="" disabled>
              Select an event
            </option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t} className="text-foreground">
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bf-passengers" className={labelClass}>
            Passengers
          </Label>
          <Input
            id="bf-passengers"
            name="passengers"
            type="number"
            min={1}
            max={40}
            required
            placeholder="e.g. 12"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bf-name" className={labelClass}>
            Your Name
          </Label>
          <Input id="bf-name" name="name" required placeholder="Full name" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bf-phone" className={labelClass}>
            Phone
          </Label>
          <Input
            id="bf-phone"
            name="phone"
            type="tel"
            required
            placeholder="(916) 000-0000"
            className={fieldClass}
          />
        </div>

        {withSpecialRequests && (
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="bf-notes" className={labelClass}>
              Special Requests
            </Label>
            <Textarea
              id="bf-notes"
              name="notes"
              rows={4}
              placeholder="Decorations, multiple stops, car seats, champagne service…"
              className={cn(
                "rounded-sm",
                dark
                  ? "border-white/15 bg-white/5 text-ink-foreground placeholder:text-ink-muted/70"
                  : "border-border bg-background",
              )}
            />
          </div>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="mt-6 h-13 w-full bg-gold text-base font-semibold text-gold-foreground shadow-gold hover:bg-gold-soft"
      >
        {submitting ? "Sending…" : "Get My Quote"}
      </Button>
      <p className={cn("mt-3 text-center text-xs", dark ? "text-ink-muted" : "text-muted-foreground")}>
        No obligation. Flat, all-inclusive pricing — never surge rates.
      </p>
    </form>
  );
}
