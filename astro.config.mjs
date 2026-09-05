// @ts-check
import { defineConfig } from 'astro/config';
import { site } from './src/data/site';

export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
});
