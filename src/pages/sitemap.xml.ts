import type { APIRoute } from 'astro';
import { absoluteUrl, hreflangLinks } from '../data/seo';

export const prerender = true;

const INDEXABLE_PATHS = ['/', '/undetected/', '/he/', '/he/undetected/'] as const;

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function urlEntry(path: (typeof INDEXABLE_PATHS)[number]): string {
  const loc = absoluteUrl(path);
  const alternates = hreflangLinks(path)
    .map(
      (link) =>
        `    <xhtml:link rel="alternate" hreflang="${escapeXml(link.hreflang)}" href="${escapeXml(link.href)}" />`,
    )
    .join('\n');

  return ['  <url>', `    <loc>${escapeXml(loc)}</loc>`, alternates, '  </url>'].join('\n');
}

export const GET: APIRoute = () => {
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...INDEXABLE_PATHS.map(urlEntry),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
