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
  component: Contact;
});

function Contact() {
  return null;
}
