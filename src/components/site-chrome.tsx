import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site, whatsappLink, phoneHref } from "@/content/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Studio" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="shell flex h-20 items-center justify-between">
        <Link to="/" className="group" onClick={() => setOpen(false)}>
          <span className="block font-serif text-xl tracking-[0.18em] uppercase transition-opacity duration-300 group-hover:opacity-70">
            Mukalla
          </span>
          <span className="eyebrow block leading-none">Design Studio</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link eyebrow hover:text-foreground"
              activeProps={{ className: "nav-link eyebrow text-foreground is-active" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="animate-menu border-t border-border/60 bg-background md:hidden">
          <div className="shell flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-4 font-serif text-2xl last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a href={phoneHref} className="eyebrow mt-6 text-foreground">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="eyebrow mt-3 text-foreground">
              {site.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40 pb-24 md:pb-8">
      <div className="shell grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl tracking-[0.08em] uppercase">{site.name}</p>
          <p className="prose-editorial mt-3 max-w-xs text-sm">
            {site.tagline} — calm, enduring interiors for homes and considered commercial spaces.
          </p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="eyebrow mb-4">Studio</p>
          <p>{site.address}</p>
          <p>{site.hours}</p>
          <a href={`mailto:${site.email}`} className="link-quiet block hover:text-foreground">
            {site.email}
          </a>
          <a href={phoneHref} className="link-quiet block hover:text-foreground">
            {site.phone}
          </a>
          <a href={whatsappLink} className="link-quiet block hover:text-foreground">
            WhatsApp
          </a>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="eyebrow mb-4">Enquire</p>
          <Link to="/contact" className="link-quiet block hover:text-foreground">
            Send a project enquiry
          </Link>
          <Link to="/portfolio" className="link-quiet block hover:text-foreground">
            View selected work
          </Link>
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="link-quiet block hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-border/50 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Al Mukalla · Aden · Dubai</p>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-olive text-olive-foreground shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.15-.149.347-.372.52-.57.174-.198.232-.34.348-.567.116-.226.058-.422-.018-.57-.075-.15-.668-1.612-.916-2.207-.24-.58-.486-.487-.667-.487h-.573c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.073.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.8 11.8 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0 0 20.463 3.49" />
      </svg>
    </a>
  );
}
