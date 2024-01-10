import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({}), starlight({
    title: 'MLLM', 
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
  })]
});