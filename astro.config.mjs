import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

export default defineConfig({
  server: {
    port: 1337
  },
  integrations: [
    tailwind(),
    svelte(),
  ],
});