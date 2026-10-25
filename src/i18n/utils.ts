import { ui, defaultLang, type Lang } from './ui';

export type { Lang };

/** Derive the current language from the URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment === 'es' || segment === 'en') return segment;
  return defaultLang;
}

/** Return the translation object for a given language. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Canonical URL helpers for hreflang. */
export const langPaths: Record<Lang, string> = {
  ca: '/',
  es: '/es/',
  en: '/en/',
};

export const langLabels: Record<Lang, string> = {
  ca: 'CA',
  es: 'ES',
  en: 'EN',
};

export const locales: Lang[] = ['ca', 'es', 'en'];
