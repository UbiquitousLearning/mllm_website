import { defineConfig } from 'astro/config';

import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  base:"/mllm/",
  integrations: [tailwind({}), starlight({
    title: 'mllm', 
    components:{Head:'./src/components/Head.astro'},
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
    ],sidebar:[
      {
        label: 'Introduction',
        autogenerate:{directory:'Introduction'}
      },{
        label: 'Customization',
        autogenerate:{directory:'Customization'}
      },{
        label: 'Contributing',
        autogenerate:{directory:'Contributing'}
      },{
        label: 'Roadmap',
        autogenerate:{directory:'Roadmap'}
      }
    ]
  })]
});