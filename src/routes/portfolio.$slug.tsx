import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: `Project not found — ${site.name}` }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — ${site.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: project.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: project.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${params.slug}` }],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="pt-16 md:pt-20">
        <div className="shell">
          <Link to="/portfolio" className="eyebrow link-quiet text-foreground">
            ← All projects
          </Link>
          <h1 className="display-xl mt-8 max-w-3xl">{project.title}</h1>
          <p className="prose-editorial mt-6 max-w-2xl">{project.intro}</p>
        </div>
      </section>

      <section className="mt-12">
        <img
          src={project.cover}
          alt={`${project.title} interior — ${project.category} project in ${project.location}`}
          className="h-[55vh] min-h-[340px] w-full object-cover md:h-[80vh]"
        />
      </section>

      <section className="section-y">
        <div className="shell grid gap-12 md:grid-cols-12">
          <dl className="space-y-6 md:col-span-3">
            <div>
              <dt className="eyebrow">Category</dt>
              <dd className="mt-1 text-sm">{project.category}</dd>
            </div>
            <div>
              <dt className="eyebrow">Location</dt>
              <dd className="mt-1 text-sm">{project.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Year</dt>
              <dd className="mt-1 text-sm">{project.year}</dd>
            </div>
            <div>
              <dt className="eyebrow">Scope</dt>
              <dd className="mt-1 space-y-1 text-sm">
                {project.scope.map((s) => (
                  <p key={s}>{s}</p>
                ))}
              </dd>
            </div>
          </dl>

          <div className="md:col-span-8 md:col-start-5">
            {project.story.map((para, i) => (
              <p key={i} className="prose-editorial mb-6 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="shell grid gap-8 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <div key={src + i} className="image-hover bg-muted">
                <img
                  src={src}
                  alt={`${project.title} interior detail ${i + 1}`}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section-y border-t border-border/60 bg-secondary/40">
        <div className="shell flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Next project</p>
            <h2 className="display-lg mt-3">{next.title}</h2>
          </div>
          <Link
            to="/portfolio/$slug"
            params={{ slug: next.slug }}
            className="eyebrow link-quiet text-foreground"
          >
            View project →
          </Link>
        </div>
      </section>
    </>
  );
}
