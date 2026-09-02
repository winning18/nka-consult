// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://winning18.github.io',
  base: '/nka-consult/',
  vite: {
    plugins: [tailwindcss()]
  }
});