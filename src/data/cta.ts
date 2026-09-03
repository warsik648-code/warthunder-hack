/**
 * Single commercial purchase destination.
 * Every checkout / buy CTA must import this constant.
 */
export const PURCHASE_URL =
  'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fwar-thunder';

export const cta = {
  purchaseUrl: PURCHASE_URL,
  primaryLabel: 'Get Access',
  secondaryLabel: 'View Plans',
} as const;
