export const locales = ['en', 'he', 'pl', 'de'] as const;
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
  pl: {
    htmlLang: 'pl',
    dir: 'ltr' as const,
    ogLocale: 'pl_PL',
    hreflang: 'pl',
    dateLocale: 'pl-PL',
  },
  de: {
    htmlLang: 'de',
    dir: 'ltr' as const,
    ogLocale: 'de_DE',
    hreflang: 'de',
    dateLocale: 'de-DE',
  },
} as const;

const LOCALIZED_PREFIXES = ['he', 'pl', 'de'] as const;
type LocalizedPrefix = (typeof LOCALIZED_PREFIXES)[number];

const LOCALIZED_ENGLISH_PATHS = new Set(['/', '/undetected/']);

export function stripHash(path: string): [string, string] {
  const [pathname = '/', hash] = path.split('#');
  return [pathname, hash ? `#${hash}` : ''];
}

export function withTrailingSlash(path: string): string {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

function matchingPrefix(path: string): LocalizedPrefix | null {
  for (const prefix of LOCALIZED_PREFIXES) {
    if (path === `/${prefix}` || path === `/${prefix}/` || path.startsWith(`/${prefix}/`)) {
      return prefix;
    }
  }
  return null;
}

export function localeFromPath(pathname: string): Locale {
  const [path] = stripHash(normalizeFilePath(pathname));
  return matchingPrefix(path) ?? 'en';
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
  const prefix = matchingPrefix(path);
  if (prefix) {
    if (path === `/${prefix}` || path === `/${prefix}/`) path = '/';
    else path = path.slice(prefix.length + 1);
  }
  return `${withTrailingSlash(path)}${hash}`;
}

export function localizedPrefixPath(pathname: string, prefix: LocalizedPrefix): string {
  const [enPath, hash] = stripHash(englishPath(pathname));
  const localized = enPath === '/' ? `/${prefix}/` : `/${prefix}${enPath}`;
  return `${localized}${hash}`;
}

export function hebrewPath(pathname: string): string {
  return localizedPrefixPath(pathname, 'he');
}

export function localizePath(pathname: string, locale: Locale): string {
  if (locale === 'en') return englishPath(pathname);
  return localizedPrefixPath(pathname, locale);
}

export function hasLocalePair(pathname: string): boolean {
  const [enPath] = stripHash(englishPath(pathname));
  return LOCALIZED_ENGLISH_PATHS.has(enPath);
}

export function switcherHref(pathname: string, locale: Locale): string {
  if (!hasLocalePair(pathname)) {
    return locale === 'en' ? '/' : `/${locale}/`;
  }
  return localizePath(pathname, locale);
}
