// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // TODO: real domain (keep in sync with src/data/site.ts)
  integrations: [sitemap()],
});
