import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wwwto.com - Find your way online",
  description: "Full-Stack Development Technologies",
  head: [
    ['link', { rel: 'icon', href: '/logo/favicon.svg' }], // 引用 favicon.ico
    // 添加 Google Analytics 代码
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-KF5QQXRKX4' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KF5QQXRKX4');
    `]
  ],
  themeConfig: {
    siteTitle: false,
    logo: '/logo/logo.svg',
    logoLink: '/',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    editLink: {
      pattern: 'https://github.com/iwwwto/wwwto.com/edit/dev/:path',
      text: 'Edit this page on GitHub'
    },

    sidebar: {
      '/javascript/': [
        {
          text: 'JavaScript',
          items: [
            { text: 'Introduction', link: '/javascript/index.md' },
            { text: 'Primitive Data Types', link: '/javascript/primitive_data_types.md' },
            { text: 'Variables', link: '/javascript/variables.md' },
            { text: 'Control Flow Statements', link: '/javascript/control_flow_statements.md' },
            { text: 'Functions', link: '/javascript/functions.md' },
            { text: 'Objects', link: '/javascript/objects.md' },
            { text: 'DOM', link: '/javascript/document_object_model.md' },
            { text: 'Collections', link: '/javascript/collections.md' },
            { text: 'Modules', link: '/javascript/modules.md' },
            { text: 'External libraries', link: '/javascript/external_libraries.md' },
            { text: 'Testing', link: '/javascript/testing.md' },
            { text: 'OOP', link: '/javascript/object_oriented_programming.md' },
            { text: 'Asynchronization', link: '/javascript/asynchronization.md' },
          ]
        }
      ],
      '/typescript/': [
        {
          text: 'TypeScript',
          items: [
            { text: 'Introduction', link: '/typescript/index.md' }
          ]
        }
      ],
      '/nodejs/': [
        {
          text: 'Node.js',
          items: [
            { text: 'Introduction', link: '/nodejs/index.md' }
          ]
        }
      ],
      '/css/': [
        {
          text: 'CSS',
          items: [
            { text: 'Introduction', link: '/css/index.md' }
          ]
        }
      ],
      '/html/': [
        {
          text: 'HTML',
          items: [
            { text: 'Introduction', link: '/html/index.md' }
          ]
        }
      ]
    },

    outline: 'deep',

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iwwwto' }
    ],

    footer: {
      message: 'Find your way online',
      copyright: 'Copyright © 2005-2024 wwwto.com'
    }
  }
})
