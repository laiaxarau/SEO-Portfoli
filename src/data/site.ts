// Central place for identity data — keep name, links and per-language metadata
// consistent across the page, the <head> and the structured data.
// TODO: replace the placeholder values marked below before publishing.

import type { Lang } from '../i18n/utils';

export const SITE = {
  url: 'https://example.com', // TODO: real domain (also update astro.config.mjs)
  name: 'Laia Xarau',

  jobTitle: {
    ca: 'Consultora SEO',
    es: 'Consultora SEO',
    en: 'SEO Consultant',
  } satisfies Record<Lang, string>,

  title: {
    ca: 'Laia Xarau | Consultora SEO Tècnic',
    es: 'Laia Xarau | Consultora SEO Técnico',
    en: 'Laia Xarau | SEO Consultant & Technical SEO',
  } satisfies Record<Lang, string>,

  description: {
    ca: 'Consultora SEO especialitzada en SEO tècnic, amb perspectiva de desenvolupadora i orientació estratègica.',
    es: 'Consultora SEO especializada en SEO técnico, con perspectiva de desarrolladora y orientación estratégica.',
    en: 'SEO consultant with a technical background, a strategic mindset and a curiosity for how the web works.',
  } satisfies Record<Lang, string>,

  linkedin: 'https://www.linkedin.com/in/laiaxarau/',
  email: 'TODO@example.com', // TODO: contact email

  links: {
    seoAmbTalons: 'https://seoambtalons.cat',
    madrid: 'https://madrid.laiaxarau.com',
    frontendPortfolio: 'https://frontend.laiaxarau.com',
  },
};
