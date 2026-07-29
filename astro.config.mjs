// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to your real domain before deploying — it's used for
// canonical URLs, the sitemap, and Open Graph tags.
export default defineConfig({
  site: 'https://slotsworkout.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
