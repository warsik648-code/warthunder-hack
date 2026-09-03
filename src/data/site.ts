/**
 * Global site identity. Swap `domain` and `url` before launch.
 * Do not scatter the commercial hostname through components.
 */
export const site = {
  name: 'War Thunder Hacks',
  legalName: 'War Thunder Hacks',
  tagline: 'Tactical overlays for War Thunder',
  domain: 'example.com',
  url: 'https://example.com',
  locale: 'en_US',
  language: 'en',
  defaultTitle: 'War Thunder Hacks | War Thunder Cheats',
  titleSeparator: ' | ',
  description:
    'War Thunder Hacks is an undetected, unbanned, and safe War Thunder cheat suite with ESP, aimbot, radar, and wallhack for PC and consoles.',
  themeColor: '#0d0a14',
  ogImage: '/og-default.svg',
  twitter: {
    handle: '',
    card: 'summary_large_image' as const,
  },
  brand: {
    markAlt: 'War Thunder Hacks mark',
    shortName: 'War Thunder Hacks',
    category: 'War Thunder overlay software',
  },
  product: {
    claims: ['Undetected', 'Unbanned', 'Safe'] as const,
    platforms: ['Windows PC', 'PlayStation', 'Xbox'] as const,
  },
  contact: {
    email: 'support@example.com',
  },
} as const;

export type Site = typeof site;
