// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site';
import { englishPath } from './src/i18n/locale';

export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          he: 'he-IL',
        },
      },
      serialize(item) {
        const page = new URL(item.url);
        const english = new URL(englishPath(page.pathname), `${site.url}/`).href;
        const links = [...(item.links ?? [])];
        if (!links.some((link) => link.lang === 'x-default')) {
          links.push({ url: english, lang: 'x-default' });
        }
        return { ...item, links };
      },
    }),
  ],
});
