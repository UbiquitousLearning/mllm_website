import { defineConfig } from 'astro/config';

import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({}), starlight({
    title: 'MLLM', 
    social: {
      github: 'https://github.com/UbiquitousLearning/mllm'
    },locales: {
      // English docs in `src/content/docs/en/`
      root:{
        label: 'English',
        lang: 'en',
      },
      // Simplified Chinese docs in `src/content/docs/zh-cn/`
      zh: {
        label: '简体中文',
        lang: 'zh-CN',
      },},
      defaultLocale: 'root',
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
  })]
});