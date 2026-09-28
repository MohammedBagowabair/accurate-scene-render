import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

const description =
  "Selected interior design projects by Mukalla Design — residential villas, apartments, workplaces and hospitality interiors.";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: `Projects — ${site.name}` },
      { name: "description", content: description },
      { property: "og:title", content: `Projects — ${site.name}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <section className="section-y">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Projects</p>
          <div className="md:col-span-9">
            <h1 className="display-xl max-w-3xl">A record of quiet rooms.</h1>
            <p className="prose-editorial mt-10 max-w-2xl">
              Residential, commercial and hospitality interiors, photographed as they are lived in.
            </p>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="mt-20 columns-1 gap-8 sm:columns-2 lg:columns-3 [&>a]:mb-14">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to="/portfolio/$slug"
              params={{ slug: project.slug }}
              className="group block break-inside-avoid"
            >
              <div className="image-hover bg-muted">
                <img
                  src={project.cover}
                  alt={`${project.title} — ${project.category} interior in ${project.location}`}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
              <p className="eyebrow mt-6">
                {project.category} · {project.location} · {project.year}
              </p>
              <h2 className="display-md mt-2">{project.title}</h2>
              <p className="prose-editorial mt-2 text-sm">{project.excerpt}</p>
              <span className="eyebrow link-quiet mt-4 inline-block text-foreground">
                View project
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
