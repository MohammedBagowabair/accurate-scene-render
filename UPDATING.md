# Updating the Mukalla Design site

No database, no backend. Everything lives in files.

## 1. Add or edit a project

1. Drop the photos into `public/images/` (for example `public/images/my-project.jpg`).
2. Open `src/content/projects.json` and copy an existing block, then edit it:

```json
{
  "slug": "my-project",                     // becomes /portfolio/my-project
  "title": "My Project",
  "category": "Residential",
  "location": "Al Mukalla",
  "year": "2026",
  "cover": "/images/my-project.jpg",        // grid + hero image
  "excerpt": "One short line for the grid.",
  "intro": "One or two sentences at the top of the project page.",
  "scope": ["Interior design", "Joinery"],
  "story": ["First paragraph.", "Second paragraph."],
  "gallery": ["/images/my-project-2.jpg"]
}
```

The project page, grid card and "next project" link are created automatically.
Add the new URL to `public/sitemap.xml` as well.

## 2. Studio details, WhatsApp, map

All in `src/content/site.ts`:

- `whatsappNumber` — international format, digits only (e.g. `967712345678`). The floating button uses it.
- `email`, `phone`, `address`, `hours`, `socials`
- `mapEmbedUrl` — in Google Maps: Share → Embed a map → copy the `src` value
- `description` — used for search results and link previews

## 3. Contact form (Formspree, no backend)

1. Create a free form at https://formspree.io and copy its form ID (e.g. `xyzabcd`).
2. Paste it into `formspreeId` in `src/content/site.ts`.

That's it — submissions go straight to your Formspree inbox/email.

## 4. Page text

Each page is one file in `src/routes/`: `index.tsx` (home), `about.tsx`,
`services.tsx`, `portfolio.index.tsx`, `contact.tsx`. Text sits in plain
quotes — edit between the quotes and leave the tags alone.

## 5. Colours and fonts

`src/styles.css` — the colour tokens at the top (`--background`, `--primary`,
`--olive`, `--sand`, `--charcoal`) drive the whole site. Fonts are loaded in
`src/routes/__root.tsx`.

## 6. Logo

Drop your logo in `public/images/logo.svg` (or `.png`) and swap the wordmark in
`src/components/site-chrome.tsx` for an `<img src="/images/logo.svg" alt="Mukalla Design" />`.
Replace `public/favicon.ico` with your own icon.
