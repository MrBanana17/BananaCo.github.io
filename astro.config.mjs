// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://MrBanana17.github.io',
  base: '/BananaCo.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
