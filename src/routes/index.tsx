import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { assetUrl } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Quiet Luxury Interior Design Studio` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — Interior Design Studio` },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero — brand first, one headline, one line, CTAs, full-bleed image */}
      <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={assetUrl("/images/hero.jpg")}
          alt="Sunlit living room with olive linen sofa, travertine table and arched window"
          width={1920}
          height={1200}
          className="hero-media absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-charcoal/10" />
        <div className="shell relative flex h-full flex-col justify-end pb-16 md:pb-20">
          <p className="fade-up font-serif text-3xl tracking-[0.22em] uppercase text-background md:text-5xl md:tracking-[0.28em]">
            Mukalla
          </p>
          <p className="fade-up-delay-1 eyebrow mt-3 text-background/75">Design Studio · Al Mukalla</p>
          <h1 className="fade-up-delay-2 display-lg mt-8 max-w-2xl text-background md:mt-10">
            Interiors that hold their quiet.
          </h1>
          <p className="fade-up-delay-3 mt-5 max-w-md text-background/85 md:mt-6">
            Warm stone, soft linen and long light — rooms made to settle in.
          </p>
          <div className="fade-up-delay-3 mt-8 flex flex-wrap gap-8 md:mt-10">
            <Link to="/portfolio" className="eyebrow link-quiet text-background">
              View projects
            </Link>
            <Link to="/contact" className="eyebrow link-quiet text-background/80">
              Begin a project
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="shell grid gap-12 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">The Studio</p>
          <div className="md:col-span-8">
            <h2 className="display-lg">
              We design rooms the way a house breathes — slowly, and with intention.
            </h2>
            <p className="prose-editorial mt-8 max-w-2xl">
              Mukalla Design is a small studio of designers and makers. We work on a handful of
              projects each year so that each one receives the attention it asks for: the fall of
              afternoon light, the grain of a single plank, the exact weight of a door as it closes.
            </p>
            <p className="prose-editorial mt-5 max-w-2xl">
              Our palette is deliberately restrained — warm neutrals, lime plaster, olive linen,
              aged brass — so the interiors remain calm long after the trends have passed.
            </p>
            <Link to="/about" className="eyebrow link-quiet mt-10 inline-block text-foreground">
              Read our philosophy
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border/60">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display-lg">Selected work</h2>
            <Link to="/portfolio" className="eyebrow link-quiet text-foreground">
              All projects
            </Link>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <Link
                key={project.slug}
                to="/portfolio/$slug"
                params={{ slug: project.slug }}
                className="group block"
              >
                <div className="image-hover bg-muted">
                  <img
                    src={project.cover}
                    alt={`${project.title} — ${project.category} interior by ${site.name}`}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <p className="eyebrow mt-6">
                  {project.category} · {project.location}
                </p>
                <h3 className="display-md mt-2">{project.title}</h3>
                <p className="prose-editorial mt-2 text-sm">{project.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-olive text-olive-foreground">
        <div className="shell text-center">
          <p className="eyebrow text-olive-foreground/70">Commissions</p>
          <h2 className="display-lg mx-auto mt-6 max-w-2xl">
            Tell us about the space you would like to feel differently in.
          </h2>
          <Link to="/contact" className="eyebrow link-quiet mt-10 inline-block">
            Enquire with the studio
          </Link>
        </div>
      </section>
    </>
  );
}
