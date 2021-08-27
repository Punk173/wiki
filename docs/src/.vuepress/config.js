const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "People's Punk",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    
    '/': {
      lang: 'en-US',
      title: "People's Punk",
      description: "People's Punk | Punk173 Wiki | $DDDD Token How To",
    },
    '/zh/': {
      lang: 'zh-CN',
      title: "People's Punk",
      description: "People's Punk | Punk173 Wiki | $DDDD Token How To",
    },
  },
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo:"/image/logo.png",
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      // {
      //   text: 'Q&A',
      //   link: '/',
      // },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // }
    ],
    sidebar: {
      '/zh/': [
        {
          // title: 'Q&A',
          collapsable: false,
          children: [
            '',
           
          ]
        }
      ],
      '/': [
        {
          // title: 'Q&A',
          collapsable: false,
          children: [
            '',
            
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    
  ],
  head: [ 
    ['script', {
    async:true,
    src:"https://www.googletagmanager.com/gtag/js?id=G-BXPDVV72L8"
  },"" ],
  ['script', 
  {}, 
  `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BXPDVV72L8');
  `]
  ]
}
