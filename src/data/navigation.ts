import type { Locale } from '../i18n/locale';
import { en } from './he/en';

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
  heHome: '/he/',
  heUndetected: '/he/undetected/',
  plHome: '/pl/',
  plUndetected: '/pl/undetected/',
  deHome: '/de/',
  deUndetected: '/de/undetected/',
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
  { label: 'Status', href: routes.undetected, status: 'live' },
  { label: 'FAQ', href: '/#faq', status: 'live' },
  { label: 'Cheats', href: routes.cheats, status: 'planned' },
  { label: 'Hacks', href: routes.hacks, status: 'planned' },
  { label: 'Pricing', href: routes.pricing, status: 'planned' },
  { label: 'Reviews', href: routes.reviews, status: 'planned' },
  { label: 'Guides', href: routes.guides, status: 'planned' },
];

export const headerNavHe: NavItem[] = [
  { label: 'דף הבית', href: routes.heHome, status: 'live' },
  { label: "פיצ'רים", href: `${routes.heHome}#features`, status: 'live' },
  { label: 'איך מתחילים', href: `${routes.heHome}#start`, status: 'live' },
  { label: 'סטטוס', href: routes.heUndetected, status: 'live' },
  { label: 'שאלות', href: `${routes.heHome}#faq`, status: 'live' },
];

export const headerNavPl: NavItem[] = [
  { label: 'Strona główna', href: routes.plHome, status: 'live' },
  { label: 'Funkcje', href: `${routes.plHome}#features`, status: 'live' },
  { label: 'Jak zacząć', href: `${routes.plHome}#start`, status: 'live' },
  { label: 'Status', href: routes.plUndetected, status: 'live' },
  { label: 'FAQ', href: `${routes.plHome}#faq`, status: 'live' },
];

export const headerNavDe: NavItem[] = [
  { label: 'Startseite', href: routes.deHome, status: 'live' },
  { label: 'Funktionen', href: `${routes.deHome}#features`, status: 'live' },
  { label: 'Erste Schritte', href: `${routes.deHome}#start`, status: 'live' },
  { label: 'Status', href: routes.deUndetected, status: 'live' },
  { label: 'FAQ', href: `${routes.deHome}#faq`, status: 'live' },
];

const headerNavByLocale = {
  en: headerNav,
  he: headerNavHe,
  pl: headerNavPl,
  de: headerNavDe,
} as const;

export function headerNavFor(locale: Locale): readonly NavItem[] {
  return headerNavByLocale[locale];
}

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
    { label: 'Undetected Status', href: routes.undetected, status: 'live' },
    { label: 'Guides', href: routes.guides, status: 'planned' },
    { label: 'Blog', href: routes.blog, status: 'planned' },
    { label: 'Support', href: routes.support, status: 'planned' },
  ] satisfies NavItem[],
  legal: [
    { label: 'Privacy', href: routes.privacy, status: 'planned' },
    { label: 'Terms', href: routes.terms, status: 'planned' },
  ] satisfies NavItem[],
};

export const footerNavHe = {
  product: [
    { label: `צ'יטים ל-${en('War Thunder')}`, href: routes.heHome, status: 'live' },
  ] satisfies NavItem[],
  features: [
    { label: 'ESP', href: `${routes.heHome}#esp`, status: 'live' },
    { label: 'Aimbot', href: `${routes.heHome}#aimbot`, status: 'live' },
    { label: 'Radar', href: `${routes.heHome}#radar`, status: 'live' },
    { label: 'Wallhack', href: `${routes.heHome}#features`, status: 'live' },
  ] satisfies NavItem[],
  resources: [
    { label: 'איך מתחילים', href: `${routes.heHome}#start`, status: 'live' },
    { label: 'תאימות', href: `${routes.heHome}#compatibility`, status: 'live' },
    { label: 'שאלות', href: `${routes.heHome}#faq`, status: 'live' },
    { label: 'סטטוס זיהוי', href: routes.heUndetected, status: 'live' },
  ] satisfies NavItem[],
  legal: [] satisfies NavItem[],
};

export const footerNavPl = {
  product: [
    { label: 'Cheaty do War Thunder', href: routes.plHome, status: 'live' },
  ] satisfies NavItem[],
  features: [
    { label: 'ESP', href: `${routes.plHome}#esp`, status: 'live' },
    { label: 'Aimbot', href: `${routes.plHome}#aimbot`, status: 'live' },
    { label: 'Radar', href: `${routes.plHome}#radar`, status: 'live' },
    { label: 'Wallhack', href: `${routes.plHome}#features`, status: 'live' },
  ] satisfies NavItem[],
  resources: [
    { label: 'Jak zacząć', href: `${routes.plHome}#start`, status: 'live' },
    { label: 'Zgodność', href: `${routes.plHome}#compatibility`, status: 'live' },
    { label: 'FAQ', href: `${routes.plHome}#faq`, status: 'live' },
    { label: 'Status wykrywalności', href: routes.plUndetected, status: 'live' },
  ] satisfies NavItem[],
  legal: [] satisfies NavItem[],
};

export const footerNavDe = {
  product: [
    { label: 'Cheats für War Thunder', href: routes.deHome, status: 'live' },
  ] satisfies NavItem[],
  features: [
    { label: 'ESP', href: `${routes.deHome}#esp`, status: 'live' },
    { label: 'Aimbot', href: `${routes.deHome}#aimbot`, status: 'live' },
    { label: 'Radar', href: `${routes.deHome}#radar`, status: 'live' },
    { label: 'Wallhack', href: `${routes.deHome}#features`, status: 'live' },
  ] satisfies NavItem[],
  resources: [
    { label: 'Erste Schritte', href: `${routes.deHome}#start`, status: 'live' },
    { label: 'Kompatibilität', href: `${routes.deHome}#compatibility`, status: 'live' },
    { label: 'FAQ', href: `${routes.deHome}#faq`, status: 'live' },
    { label: 'Status unerkannt', href: routes.deUndetected, status: 'live' },
  ] satisfies NavItem[],
  legal: [] satisfies NavItem[],
};

const footerNavByLocale = {
  en: footerNav,
  he: footerNavHe,
  pl: footerNavPl,
  de: footerNavDe,
} as const;

export function footerNavFor(locale: Locale): (typeof footerNavByLocale)[Locale] {
  return footerNavByLocale[locale];
}

export function liveItems(items: readonly NavItem[]): NavItem[] {
  return items.filter((item) => item.status === 'live');
}
