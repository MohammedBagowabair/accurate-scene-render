import { createFileRoute } from "@tanstack/react-router";
import { site, whatsappLink } from "@/content/site";

const description =
  "Contact Mukalla Design — enquire about residential, commercial or consultation interior design work. Studio in Al Mukalla, Hadhramaut.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      { name: "description", content: description },
      { property: "og:title", content: `Contact — ${site.name}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-olive focus:outline-none";

function Contact() {
  return (
    <>
      <section className="section-y">
        <div className="shell grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Contact</p>
            <h1 className="display-xl mt-6">Let's begin.</h1>
            <p className="prose-editorial mt-8 max-w-md">
              Tell us a little about the space, the timeline and how you would like it to feel. We
              reply to every enquiry within two working days.
            </p>

            <dl className="mt-12 space-y-6 text-sm">
              <div>
                <dt className="eyebrow">Studio</dt>
                <dd className="mt-1">{site.address}</dd>
              </div>
              <div>
                <dt className="eyebrow">Hours</dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="link-quiet">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-quiet"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Follow</dt>
                <dd className="mt-1 flex flex-wrap gap-5">
                  {site.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-quiet"
                    >
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {/* Formspree — no backend needed. Replace formspreeId in src/content/site.ts */}
          <div className="md:col-span-6 md:col-start-7">
            <form
              action={`https://formspree.io/f/${site.formspreeId}`}
              method="POST"
              className="space-y-8"
            >
              <div>
                <label htmlFor="name" className="eyebrow">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="service" className="eyebrow">
                  Type of project
                </label>
                <select id="service" name="service" className={fieldClass} defaultValue="Residential">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Consultation</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="eyebrow">
                  About the space
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Location, size, timeline and how you would like it to feel."
                  className={`${fieldClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="eyebrow w-full bg-olive px-8 py-4 text-olive-foreground transition-opacity duration-300 hover:opacity-90 sm:w-auto"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <iframe
          title={`Map showing ${site.name} studio location`}
          src={site.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[380px] w-full border-0 grayscale-[35%] md:h-[460px]"
        />
      </section>
    </>
  );
}
