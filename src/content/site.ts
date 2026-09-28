/**
 * Site-wide settings. Edit the values below — nothing else needs to change.
 */
export const site = {
  name: "Mukalla Design",
  tagline: "Interior design studio",
  /* Used in page titles and social previews */
  description:
    "Mukalla Design is an interior design studio creating calm, enduring residential and commercial interiors in warm, restrained materials.",

  /* WhatsApp number in international format, digits only (no +, no spaces). */
  whatsappNumber: "967783964784",
  whatsappMessage: "Hello Mukalla Design, I would like to discuss a project.",

  email: "mr.bagowabair@gmail.com",
  phone: "+967 783 964 784",
  address: "Al Mukalla, Hadhramaut, Yemen",
  hours: "Sunday – Thursday, 9am – 6pm",

  /* Optional: Formspree form ID. Leave empty to send enquiries via email. */
  formspreeId: "",

  /* Google Maps embed URL (Google Maps → Share → Embed a map → copy src) */
  mapEmbedUrl:
    "https://www.google.com/maps?q=Mukalla,Hadhramaut,Yemen&output=embed",

  /* Only include socials with real profile URLs. Empty = section hidden. */
  socials: [] as ReadonlyArray<{ label: string; href: string }>,
} as const;

export const phoneHref = `tel:+${site.whatsappNumber}`;

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
