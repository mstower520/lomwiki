import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "白塔百科",
  description: "一款内容不一定准确的《诡秘之主》百科",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '人物介绍', link: '/character/home' },
      { text: '历史神话', link: '/history/home' },
      { text: '地理人文', link: '/geography/home' },
      { text: '神秘学识', link: '/mysterious/home' },
      { text: '神之途径', link: '/pathway/home' },
      { text: '博物杂学', link: '/natural/home' }
    ],

    sidebar: {
        'pathway':[
          {
            text: '途径信息',
            items:[
              { text: '基础介绍', link: '/pathway/home' },
              {
                text: '地球途径',
                items:[
                  { text: '占卜家途径', link: '/pathway/earth/fool' },
                  { text: '偷盗者途径', link: '/pathway/earth/error' },
                  { text: '学徒途径', link: '/pathway/earth/door' },
                  { text: '观众途径', link: '/pathway/earth/visionary' },
                  { text: '歌颂者途径', link: '/pathway/earth/sun' },
                  { text: '阅读者途径', link: '/pathway/earth/tower' },
                  { text: '水手途径', link: '/pathway/earth/tyrant' },
                  { text: '秘祈人途径', link: '/pathway/earth/hanged' },
                  { text: '收尸人途径', link: '/pathway/earth/death' },
                  { text: '不眠者途径', link: '/pathway/earth/darkness' },
                  { text: '战士途径', link: '/pathway/earth/twilight' },
                  { text: '猎人途径', link: '/pathway/earth/priest' },
                  { text: '刺客途径', link: '/pathway/earth/demoness' },
                  { text: '耕种者途径', link: '/pathway/earth/mother' },
                  { text: '药师途径', link: '/pathway/earth/moon' },
                  { text: '律师途径', link: '/pathway/earth/black' },
                  { text: '仲裁人途径', link: '/pathway/earth/justiciar' },
                  { text: '罪犯途径', link: '/pathway/earth/abyss' },
                  { text: '囚犯途径', link: '/pathway/earth/chained' },
                  { text: '窥秘人途径', link: '/pathway/earth/hermit' },
                  { text: '通识者途径', link: '/pathway/earth/paragon' },
                  { text: '怪物途径', link: '/pathway/earth/wheel' }
                ]
              },{
                text: '外神途径',
                items:[
                  { text: '舞蹈家途径', link: '/pathway/outside/aeon' },
                  { text: '恶棍途径', link: '/pathway/outside/chaos' },
                  { text: '吝啬鬼途径', link: '/pathway/outside/patriarch' },
                  { text: '掮客途径', link: '/pathway/outside/mist' },
                  { text: '流浪汉途径', link: '/pathway/outside/tail' },
                  { text: '天文爱好者途径', link: '/pathway/outside/condenser' },
                  { text: '入门者途径', link: '/pathway/outside/everlasting' },
                  { text: '病患途径', link: '/pathway/outside/second' },
                  { text: '萨满途径', link: '/pathway/outside/eye' },
                  { text: '失梦人途径', link: '/pathway/outside/edict' }
                ]
              },
            ]
          }
        ]
      },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mstower520/lomwik' }
    ]
  }
})
