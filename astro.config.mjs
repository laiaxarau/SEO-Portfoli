// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://laiaxarau.com',
  integrations: [],
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en'],
    routing: {
      prefixDefaultLocale: false, // / → ca  |  /es/ → es  |  /en/ → en
    },
  },
});
