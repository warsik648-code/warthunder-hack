import { routes } from './navigation';

export type KeywordOwner = {
  path: string;
  primary: string;
  supports?: readonly string[];
  intent: string;
  status: 'live' | 'planned';
};

/**
 * One primary URL per major search intent.
 * Do not create a new page until its intent is recorded here.
 */
export const keywordOwnership = [
  {
    path: routes.home,
    primary: 'War Thunder cheats',
    supports: ['War Thunder hacks'],
    intent:
      'Commercial hub: what the product is, core features, conversion. Hacks is a supporting variant, not the page’s main heading strategy.',
    status: 'live',
  },
  {
    path: routes.cheats,
    primary: 'War Thunder cheats',
    intent:
      'Long-form commercial/supporting page. Must be clearly distinct from `/` (depth, comparisons, setup, or a narrower commercial angle — not a second homepage).',
    status: 'planned',
  },
  {
    path: routes.hacks,
    primary: 'War Thunder hacks',
    intent: 'Primary page for the hacks query; do not target this as the homepage H1.',
    status: 'planned',
  },
  {
    path: routes.esp,
    primary: 'War Thunder ESP',
    intent: 'Feature-intent page for ESP / visibility overlays.',
    status: 'planned',
  },
  {
    path: routes.aimbot,
    primary: 'War Thunder aimbot',
    intent: 'Feature-intent page for aimbot / targeting.',
    status: 'planned',
  },
  {
    path: routes.radar,
    primary: 'War Thunder radar',
    intent: 'Feature-intent page for radar / battlefield awareness.',
    status: 'planned',
  },
  {
    path: routes.wallhack,
    primary: 'War Thunder wallhack',
    intent: 'Feature-intent page for wallhack / occlusion.',
    status: 'planned',
  },
] as const satisfies readonly KeywordOwner[];

export function ownerForPath(path: string): KeywordOwner | undefined {
  return keywordOwnership.find((item) => item.path === path);
}
