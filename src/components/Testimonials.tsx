import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@/components/Testimonial";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="section-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">Reviews</p>
        <h2 className="mt-3 max-w-2xl text-3xl text-ink-foreground sm:text-4xl">
          Rated five stars across the Sacramento Valley
        </h2>
        <span className="gold-rule mt-6" />

        <Carousel opts={{ align: "start", loop: true }} className="mt-10">
          <CarouselContent className="-ml-4">
            {TESTIMONIALS.map((t) => (
              <CarouselItem key={t.name} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <Testimonial data={t} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex gap-3">
            <CarouselPrevious className="static translate-y-0 border-gold/40 bg-transparent text-gold hover:bg-gold hover:text-gold-foreground" />
            <CarouselNext className="static translate-y-0 border-gold/40 bg-transparent text-gold hover:bg-gold hover:text-gold-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
