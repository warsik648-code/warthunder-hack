export const locales = ['en', 'he'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeConfig = {
  en: {
    htmlLang: 'en',
    dir: 'ltr' as const,
    ogLocale: 'en_US',
    hreflang: 'en',
    dateLocale: 'en-US',
  },
  he: {
    htmlLang: 'he',
    dir: 'rtl' as const,
    ogLocale: 'he_IL',
    hreflang: 'he-IL',
    dateLocale: 'he-IL',
  },
} as const;

const LOCALIZED_ENGLISH_PATHS = new Set(['/', '/undetected/']);

export function stripHash(path: string): [string, string] {
  const [pathname = '/', hash] = path.split('#');
  return [pathname, hash ? `#${hash}` : ''];
}

export function withTrailingSlash(path: string): string {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

export function localeFromPath(pathname: string): Locale {
  const [path] = stripHash(normalizeFilePath(pathname));
  if (path === '/he' || path === '/he/' || path.startsWith('/he/')) return 'he';
  return 'en';
}

function normalizeFilePath(pathname: string): string {
  const [path, hash] = stripHash(pathname);
  let clean = path;
  if (clean.endsWith('/index.html')) {
    clean = clean.slice(0, -10) || '/';
  } else if (clean === '/index.html') {
    clean = '/';
  }
  return `${clean}${hash}`;
}

export function englishPath(pathname: string): string {
  const [raw, hash] = stripHash(normalizeFilePath(pathname));
  let path = raw;
  if (path === '/he' || path === '/he/') path = '/';
  else if (path.startsWith('/he/')) path = path.slice(3);
  return `${withTrailingSlash(path)}${hash}`;
}

export function hebrewPath(pathname: string): string {
  const [enPath, hash] = stripHash(englishPath(pathname));
  const he = enPath === '/' ? '/he/' : `/he${enPath}`;
  return `${he}${hash}`;
}

export function localizePath(pathname: string, locale: Locale): string {
  return locale === 'he' ? hebrewPath(pathname) : englishPath(pathname);
}

export function hasLocalePair(pathname: string): boolean {
  const [enPath] = stripHash(englishPath(pathname));
  return LOCALIZED_ENGLISH_PATHS.has(enPath);
}

export function switcherHref(pathname: string, locale: Locale): string {
  if (!hasLocalePair(pathname)) {
    return locale === 'he' ? '/he/' : '/';
  }
  return localizePath(pathname, locale);
}
