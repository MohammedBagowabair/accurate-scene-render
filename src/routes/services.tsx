import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/content/site";

const description =
  "Residential interior design, commercial interiors and design consultation from Mukalla Design — full-service interiors from concept to styling.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — ${site.name}` },
      { name: "description", content: description },
      { property: "og:title", content: `Services — ${site.name}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    number: "I",
    title: "Residential",
    lead: "Whole homes, apartments and single rooms designed around the way you actually live.",
    items: [
      "Interior architecture & space planning",
      "Bespoke joinery and millwork design",
      "Material, finish and lighting schemes",
      "Furniture procurement and final styling",
    ],
    image: "/images/project-villa.jpg",
  },
  {
    number: "II",
    title: "Commercial",
    lead: "Workplaces, retail and intimate hospitality interiors with the composure of a private residence.",
    items: [
      "Concept development & brand-aligned interiors",
      "Technical documentation for trades",
      "Custom furniture and fit-out design",
      "Site supervision through handover",
    ],
    image: "/images/project-office.jpg",
  },
  {
    number: "III",
    title: "Consultation",
    lead: "A focused engagement for clients who want direction rather than a full commission.",
    items: [
      "Half-day studio or on-site consultation",
      "Palette, material and lighting guidance",
      "Layout review and furniture planning",
      "Written recommendations and sourcing list",
    ],
    image: "/images/project-restaurant.jpg",
  },
];

function Services() {
  return (
    <>
      <section className="section-y">
        <div className="shell grid gap-12 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Services</p>
          <div className="md:col-span-9">
            <h1 className="display-xl max-w-3xl">What we take on.</h1>
            <p className="prose-editorial mt-10 max-w-2xl">
              We work on a small number of projects each year, at whichever depth suits the space —
              from a single consultation to a complete interior delivered and styled.
            </p>
          </div>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.title}
          className={`border-t border-border/60 py-16 md:py-24 ${i % 2 === 1 ? "bg-secondary/40" : ""}`}
        >
          <div className="shell grid items-center gap-12 md:grid-cols-2">
            <div className={`image-hover bg-muted ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img
                src={service.image}
                alt={`${service.title} interior design by ${site.name}`}
                loading="lazy"
                width={1200}
                height={1200}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow">{service.number}</p>
              <h2 className="display-lg mt-4">{service.title}</h2>
              <p className="prose-editorial mt-5">{service.lead}</p>
              <ul className="mt-8 divide-y divide-border/70 border-t border-border/70">
                {service.items.map((item) => (
                  <li key={item} className="py-3 text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="section-y bg-olive text-olive-foreground">
        <div className="shell text-center">
          <h2 className="display-lg mx-auto max-w-xl">Not sure which you need?</h2>
          <p className="mt-5 text-olive-foreground/80">
            Send us a note about the space and we'll suggest the right scope.
          </p>
          <Link to="/contact" className="eyebrow link-quiet mt-10 inline-block">
            Contact the studio
          </Link>
        </div>
      </section>
    </>
  );
}
