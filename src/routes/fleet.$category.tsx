import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FleetCard } from "@/components/FleetCard";
import { CtaBanner } from "@/components/CtaBanner";
import { FLEET, vehiclesByCategory } from "@/lib/site-data";

export const Route = createFileRoute("/fleet/$category")({
  loader: ({ params }) => {
    const category = FLEET.find((v) => v.slug === params.category);
    if (!category) throw notFound();
    return { category, vehicles: vehiclesByCategory(category.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Fleet Category Not Found | USA Limo Vibes" }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    const title = `${category.name} Rentals in Sacramento | USA Limo Vibes`;
    const description = category.description.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/fleet/${params.category}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/fleet/${params.category}` }],
    };
  },
  notFoundComponent: CategoryNotFound,
  component: FleetCategoryPage,
});

function CategoryNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl sm:text-4xl">Fleet category not found</h1>
      <p className="mt-4 text-muted-foreground">That page does not exist. Browse the full fleet instead.</p>
      <Link
        to="/fleet"
        className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-gold hover:underline"
      >
        View the fleet
      </Link>
    </div>
  );
}

function FleetCategoryPage() {
  const { category, vehicles } = Route.useLoaderData();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={category.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="eyebrow">
            <Link to="/fleet" className="hover:text-gold">
              Fleet
            </Link>{" "}
            / {category.name}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.12] text-ink-foreground sm:text-5xl">
            {category.name} in Sacramento
          </h1>
          <span className="mt-6 inline-flex items-center gap-2 rounded-sm bg-ink/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold ring-1 ring-gold/30">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            {category.capacity}
          </span>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">{category.description}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="eyebrow">Choose Your Vehicle</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              {vehicles.length} {category.name.replace(/s$/, "")} option{vehicles.length === 1 ? "" : "s"} available
            </h2>
            <span className="gold-rule mt-6" />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle, i) => (
              <Reveal key={vehicle.slug} delay={i * 70}>
                <FleetCard vehicle={vehicle} linkTo="vehicle" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl">Standard on every {category.name.replace(/s$/, "").toLowerCase()}</h2>
          <span className="gold-rule mt-5" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {category.amenities.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
