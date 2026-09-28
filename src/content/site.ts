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
  whatsappNumber: "9670000000",
  whatsappMessage: "Hello Mukalla Design, I would like to discuss a project.",

  email: "studio@mukalladesign.com",
  phone: "+967 000 0000",
  address: "Al Mukalla, Hadhramaut, Yemen",
  hours: "Sunday – Thursday, 9am – 6pm",

  /* Replace with your Formspree form ID: https://formspree.io */
  formspreeId: "your-form-id",

  /* Google Maps embed URL (Google Maps → Share → Embed a map → copy src) */
  mapEmbedUrl:
    "https://www.google.com/maps?q=Mukalla,Hadhramaut,Yemen&output=embed",

  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Pinterest", href: "https://pinterest.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
} as const;

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
