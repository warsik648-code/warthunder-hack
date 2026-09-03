export type RouteStatus = 'live' | 'planned';

export type NavItem = {
  label: string;
  href: string;
  status: RouteStatus;
};

/**
 * Planned information architecture.
 * Pages stay unpublished until they are built with real content.
 */
export const routes = {
  home: '/',
  cheats: '/war-thunder-cheats/',
  hacks: '/war-thunder-hacks/',
  esp: '/features/esp/',
  aimbot: '/features/aimbot/',
  radar: '/features/radar/',
  wallhack: '/features/wallhack/',
  undetected: '/undetected/',
  pricing: '/pricing/',
  reviews: '/reviews/',
  faq: '/faq/',
  guides: '/guides/',
  blog: '/blog/',
  support: '/support/',
  privacy: '/privacy/',
  terms: '/terms/',
} as const;

export type RouteKey = keyof typeof routes;

export const headerNav: NavItem[] = [
  { label: 'Home', href: routes.home, status: 'live' },
  { label: 'Features', href: '/#features', status: 'live' },
  { label: 'Get Started', href: '/#start', status: 'live' },
  { label: 'FAQ', href: '/#faq', status: 'live' },
  { label: 'Cheats', href: routes.cheats, status: 'planned' },
  { label: 'Hacks', href: routes.hacks, status: 'planned' },
  { label: 'Pricing', href: routes.pricing, status: 'planned' },
  { label: 'Reviews', href: routes.reviews, status: 'planned' },
  { label: 'Guides', href: routes.guides, status: 'planned' },
];

export const footerNav = {
  product: [
    { label: 'War Thunder Cheats', href: routes.home, status: 'live' },
    { label: 'War Thunder Hacks', href: routes.hacks, status: 'planned' },
    { label: 'Pricing', href: routes.pricing, status: 'planned' },
    { label: 'Reviews', href: routes.reviews, status: 'planned' },
  ] satisfies NavItem[],
  features: [
    { label: 'ESP', href: '/#esp', status: 'live' },
    { label: 'Aimbot', href: '/#aimbot', status: 'live' },
    { label: 'Radar', href: '/#radar', status: 'live' },
    { label: 'Wallhack', href: '/#features', status: 'live' },
  ] satisfies NavItem[],
  resources: [
    { label: 'How to Get Started', href: '/#start', status: 'live' },
    { label: 'Compatibility', href: '/#compatibility', status: 'live' },
    { label: 'FAQ', href: '/#faq', status: 'live' },
    { label: 'Undetected Status', href: routes.undetected, status: 'planned' },
    { label: 'Guides', href: routes.guides, status: 'planned' },
    { label: 'Blog', href: routes.blog, status: 'planned' },
    { label: 'Support', href: routes.support, status: 'planned' },
  ] satisfies NavItem[],
  legal: [
    { label: 'Privacy', href: routes.privacy, status: 'planned' },
    { label: 'Terms', href: routes.terms, status: 'planned' },
  ] satisfies NavItem[],
};

export function liveItems(items: readonly NavItem[]): NavItem[] {
  return items.filter((item) => item.status === 'live');
}
