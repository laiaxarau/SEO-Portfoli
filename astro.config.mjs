// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // TODO: real domain (keep in sync with src/data/site.ts)
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en'],
    routing: {
      prefixDefaultLocale: false, // / → ca  |  /es/ → es  |  /en/ → en
    },
  },
});
