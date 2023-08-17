import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'en-US',
  title: 'OldVis',
  description: 'Documentation for OldVis',
  themeConfig: {
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
          text: 'Docs',
          link: '/introduction/what-is-the-oldvis-project'
      },
      {
          text: 'Resources',
          items: [
            { text: 'Gallery', link: 'https://github.com/oldvis/gallery' },
            { text: 'Dataset', link: 'https://github.com/oldvis/dataset' },
            { text: 'Downloader', link: 'https://github.com/oldvis/oldvis' },
            { text: 'Querier', link: 'https://github.com/oldvis/libquery' },
            { text: 'Processor', link: 'https://github.com/oldvis/libprocess' }
          ]
      },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is the OldVis project', link: '/introduction/what-is-the-oldvis-project' },
        ]
      },
      {
        text: 'Repositories',
        items: [
          { text: 'Gallery', link: '/implementation/gallery' },
          { text: 'Dataset', link: '/implementation/dataset' },
          { text: 'Downloader', link: '/implementation/downloader' },
          { text: 'Querier', link: '/implementation/querier' },
          { text: 'Processor', link: '/implementation/processor' }
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Data curation', link: '/advanced/data-curation' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oldvis/oldvis.github.io' }
    ],

    search: {
      provider: 'local'
    }
  }
})
