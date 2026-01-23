// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hollowsense.github.io/',
  integrations: [mdx(), sitemap(), vue()],

  vite: {
    plugins: [tailwindcss()],
  },
});
