import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { assetUrl } from "@/lib/utils";

const description =
  "The story behind Mukalla Design — a small interior design studio working in restrained materials, natural light and slow, considered detail.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About the Studio — ${site.name}` },
      { name: "description", content: description },
      { property: "og:title", content: `About the Studio — ${site.name}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const principles = [
  {
    title: "Material honesty",
    body: "Plaster that shows the hand that troweled it, stone with its own history, timber left close to its grain.",
  },
  {
    title: "Light before colour",
    body: "We plan daylight first and layer artificial light to low, warm pools. Colour follows quietly behind.",
  },
  {
    title: "Fewer, better",
    body: "A restrained palette and a small number of well-made pieces will outlast a room full of decisions.",
  },
  {
    title: "Built to age",
    body: "Every surface is chosen for how it will look in ten years of daily use, not on the day of handover.",
  },
];

const process = [
  { step: "01", title: "Conversation", body: "We listen to how you live, then survey the space and its light." },
  { step: "02", title: "Concept", body: "Plans, material boards and mood — the direction agreed before detail begins." },
  { step: "03", title: "Design & documentation", body: "Joinery, lighting and finish drawings prepared for trades." },
  { step: "04", title: "Delivery & styling", body: "Site supervision, procurement and the final layer of objects." },
];

function About() {
  return (
    <>
      <section className="section-y">
        <div className="shell grid gap-12 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">About the studio</p>
          <div className="md:col-span-9">
            <h1 className="display-xl max-w-3xl">A studio built on restraint.</h1>
            <p className="prose-editorial mt-10 max-w-2xl">
              Mukalla Design was founded in Al Mukalla with one conviction: that a room should feel
              settled the moment you enter it. Our founder trained between architecture and
              furniture making, and that double habit still shapes the studio — we draw plans and we
              hold materials.
            </p>
            <p className="prose-editorial mt-5 max-w-2xl">
              Today we are a small team of designers, drafters and long-standing craftspeople,
              working across private homes, workplaces and intimate hospitality spaces in Yemen and
              the Gulf.
            </p>
          </div>
        </div>
      </section>

      <section>
        <img
          src={assetUrl("/images/studio.jpg")}
          alt="Designer arranging limestone, olive linen and oak material samples on a plaster table"
          loading="lazy"
          width={1408}
          height={1008}
          className="h-[45vh] min-h-[320px] w-full object-cover md:h-[70vh]"
        />
      </section>

      <section className="section-y">
        <div className="shell grid gap-12 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Philosophy</p>
          <div className="grid gap-12 sm:grid-cols-2 md:col-span-9">
            {principles.map((p) => (
              <div key={p.title}>
                <h2 className="display-md">{p.title}</h2>
                <p className="prose-editorial mt-3 text-base">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border/60 bg-secondary/40">
        <div className="shell grid gap-12 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">How we work</p>
          <div className="md:col-span-9">
            <div className="divide-y divide-border/70">
              {process.map((s) => (
                <div key={s.step} className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr] sm:gap-10">
                  <span className="eyebrow">{s.step}</span>
                  <div>
                    <h3 className="display-md">{s.title}</h3>
                    <p className="prose-editorial mt-2 text-base">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="eyebrow link-quiet mt-10 inline-block text-foreground">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
