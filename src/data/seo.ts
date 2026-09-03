import { PURCHASE_URL } from './cta';
import { site } from './site';

export type JsonLd = Record<string, unknown>;

export type BreadcrumbEntry = {
  name: string;
  path: string;
};

export type PageSeoInput = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: JsonLd | JsonLd[];
};

export type ResolvedSeo = {
  title: string;
  description: string;
  canonical: string;
  ogType: 'website' | 'article';
  ogImage: string;
  robots: string;
  jsonLd: JsonLd[];
};

export function withTrailingSlash(path: string): string {
  if (!path || path === '/') return '/';
  const [pathname, hash] = path.split('#');
  const isAsset = /\.[a-z0-9]+$/i.test(pathname);
  const normalized = isAsset || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

export function absoluteUrl(path = '/'): string {
  return new URL(withTrailingSlash(path), `${site.url}/`).toString();
}

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle || pageTitle === site.defaultTitle) {
    return pageTitle || site.defaultTitle;
  }

  if (pageTitle.includes(site.name) || pageTitle.includes(site.titleSeparator)) {
    return pageTitle;
  }

  return `${pageTitle}${site.titleSeparator}${site.name}`;
}

export function organizationJsonLd(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': `${absoluteUrl('/')}#organization`,
    name: site.legalName,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/favicon.svg'),
    email: site.contact.email,
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    name: site.name,
    url: absoluteUrl('/'),
    description: site.description,
    publisher: { '@id': `${absoluteUrl('/')}#organization` },
    inLanguage: site.language,
  };
}

export function webpageJsonLd(input: {
  title: string;
  description: string;
  canonical: string;
}): JsonLd {
  return {
    '@type': 'WebPage',
    '@id': `${input.canonical}#webpage`,
    url: input.canonical,
    name: input.title,
    description: input.description,
    isPartOf: { '@id': `${absoluteUrl('/')}#website` },
    inLanguage: site.language,
  };
}

export function breadcrumbJsonLd(items: readonly BreadcrumbEntry[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function softwareApplicationJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    applicationCategory: 'GameApplication',
    operatingSystem: site.product.platforms.join(', '),
    url: absoluteUrl('/'),
    description: site.description,
    featureList: ['ESP', 'Aimbot', 'Radar', 'Wallhack'],
    offers: {
      '@type': 'Offer',
      url: PURCHASE_URL,
      availability: 'https://schema.org/OnlineOnly',
    },
  };
}

export function faqPageJsonLd(
  items: readonly { question: string; answer: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function resolveSeo(
  input: PageSeoInput | undefined,
  currentUrl: URL,
  breadcrumbs: readonly BreadcrumbEntry[] = [],
): ResolvedSeo {
  const path = input?.canonicalPath ?? currentUrl.pathname;
  const canonical = absoluteUrl(path);
  const title = buildTitle(input?.title);
  const description = input?.description ?? site.description;
  const graph: JsonLd[] = [
    {
      '@context': 'https://schema.org',
      '@graph': [
        organizationJsonLd(),
        websiteJsonLd(),
        webpageJsonLd({ title, description, canonical }),
        ...(breadcrumbs.length > 0 ? [breadcrumbJsonLd(breadcrumbs)] : []),
      ],
    },
  ];

  const extra = input?.jsonLd
    ? Array.isArray(input.jsonLd)
      ? input.jsonLd
      : [input.jsonLd]
    : [];

  return {
    title,
    description,
    canonical,
    ogType: input?.ogType ?? 'website',
    ogImage: absoluteUrl(input?.ogImage ?? site.ogImage),
    robots: input?.noindex ? 'noindex, nofollow' : 'index, follow',
    jsonLd: [...graph, ...extra],
  };
}
