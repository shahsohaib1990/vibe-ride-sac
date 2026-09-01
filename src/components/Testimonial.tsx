import { Star } from "lucide-react";

export type TestimonialData = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

export function Testimonial({ data }: { data: TestimonialData }) {
  return (
    <figure className="flex h-full flex-col rounded-sm border border-white/10 bg-white/[0.03] p-7">
      <div className="flex gap-1" aria-label={`${data.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={i < data.rating ? "h-4 w-4 fill-gold text-gold" : "h-4 w-4 text-ink-muted"}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-ink-foreground">
        “{data.quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm text-ink-muted">
        <span className="font-semibold text-gold">{data.name}</span> · {data.location}
      </figcaption>
    </figure>
  );
}
