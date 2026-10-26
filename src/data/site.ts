// Central place for identity data — keep name, links and per-language metadata
// consistent across the page, the <head> and the structured data.

import type { Lang } from '../i18n/utils';

export const SITE = {
  url: 'https://laiaxarau.com', // update astro.config.mjs to match
  name: 'Laia Xarau',
  phone: '615084681',
  email: 'laiaxarau@gmail.com',
  linkedin: 'https://www.linkedin.com/in/laiaxarau/',
  seoAmbTalons: 'https://www.seoambtalons.cat',

  jobTitle: {
    ca: 'Consultora SEO — SEO tècnic i Estratègia digital',
    es: 'Consultora SEO — SEO técnico y Estrategia digital',
    en: 'SEO Consultant — Technical SEO & Digital Strategy',
  } satisfies Record<Lang, string>,

  title: {
    ca: 'Consultoria SEO Tècnica i Estratègia | Laia Xarau',
    es: 'Consultoría SEO Técnica y Estrategia | Laia Xarau',
    en: 'Technical SEO Consulting & Strategy | Laia Xarau',
  } satisfies Record<Lang, string>,

  description: {
    ca: 'Consultora SEO especialitzada en SEO tècnic, arquitectura web i migracions. Anàlisi, criteri i accions orientades al negoci.',
    es: 'Consultora SEO especializada en SEO técnico, arquitectura web y migraciones. Análisis, criterio y acciones orientadas al negocio.',
    en: 'SEO consultant specialising in technical SEO, web architecture and migrations. Analysis, judgement and business-oriented actions.',
  } satisfies Record<Lang, string>,
};
