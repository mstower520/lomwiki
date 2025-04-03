import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "白塔百科",
  description: "一款内容不一定准确的《诡秘之主》百科",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '人物', link: '/character/home' },
      { text: '历史', link: '/history/home' },
      { text: '地理', link: '/geography/home' },
      { text: '神话', link: '/mythology/home' },
      { text: '神秘', link: '/mysterious/home' },
      { text: '途径', link: '/pathway/home' },
      { text: '博物', link: '/natural/home' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mstower520/lomwik' }
    ]
  }
})
