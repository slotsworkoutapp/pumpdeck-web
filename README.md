# PumpDeck — Marketing Website

Static marketing site for the PumpDeck iOS app, built with
[Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).

This is a **separate project** from the iOS app. It shares nothing with the
Swift codebase — the only thing the two have in common is the brand.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static files to ./dist
npm run preview  # serve the production build locally
```

## Structure

```
src/
  layouts/Layout.astro     shared shell: <head>, header, footer, SEO meta
  pages/
    index.astro            landing page (hero, features, how-it-works, CTA)
    privacy.astro          Privacy Policy (App Store requires a privacy URL)
    terms.astro            Terms of Service
    support.astro          Support page + FAQ (App Store requires a support URL)
  styles/global.css        Tailwind import + brand color tokens
public/
  favicon.svg, robots.txt
```

## Before you publish — replace the placeholders

- **Domain** — set `site` in `astro.config.mjs` and the `Sitemap:` line in
  `public/robots.txt` to your real domain.
- **App Store URL** — `appStoreUrl` in `src/pages/index.astro` (currently `#`).
- **Contact email** — `contactEmail` in `privacy.astro`, `terms.astro`,
  `support.astro` (currently `support@pumpdeck.app`).
- **Screenshots** — drop real app screenshots into the hero/feature mockups.
- **Social image** — add `public/og.png` (1200×630) for link previews.
- **Legal copy** — the Privacy/Terms text is a starting template; have it
  reviewed so it matches exactly what the app collects and does.

## Deploy

The build is fully static (`./dist`), so it works on any static host:

- **Vercel** — import the repo, framework preset "Astro", deploy. Zero config.
- **Cloudflare Pages** — build command `npm run build`, output dir `dist`.
- **Netlify** — build command `npm run build`, publish dir `dist`.
