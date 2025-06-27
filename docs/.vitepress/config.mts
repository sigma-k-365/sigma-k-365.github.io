import { defineConfig } from 'vitepress'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItFoo from 'markdown-it-foo'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ' ',
  locales:{
    root:{
      label:'English',
      lang: 'en',
      link: '/'
    }
    /*,
    ja:{
      label:'日本語',
      lang: 'ja',
      link: '/ja/'
    },
    de:{
      label:'Deutsch',
      lang: 'de',
      link: '/de/'
    }
    */
  },

  markdown : { 
    // want to use LateX?
    math:true,
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  },

  // configulations of the uppermost navigation bar
  themeConfig: {
    logo: {
      light: '/img/logo_nav_light.svg', dark: '/img/logo_nav_dark.svg', alt: 'log sigma Album!'
    },
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'DE', 
        items: [
          { text: 'Braunschweig', link: '/de/Braunschweig' },
          { text: 'Dresden', link: '/de/Dresden/' },
          { text: 'Heidelberg', link: '/de/Heidelberg/' },
            /*
            { text: 'Rhein', link: '/de/Rhein/' },
            { text: 'Frankfurt', link: '/de/Frankfurt/' },
            { text: 'Berlin', link: '/de/Berlin/' },
            { text: 'Mainz', link: '/de/Mainz/' },
            { text: 'Duesseldorf', link: '/de/Duesseldorf/' },
            { text: 'Freiburg', link: '/de/Freiburg/' },
            { text: 'Bonn', link: '/de/Bonn/' },
            { text: 'Goettingen', link: '/de/Goettingen/' },
            */
            { text: 'Köln', link: '/de/Koeln/' },
            { text: 'Leibzig', link: '/de/Leibzig/' },
            { text: 'Münster', link: '/de/Muenster/' },
            { text: 'Potsdam', link: '/de/Potsdam/' },
            { text: 'Wuppertal', link: '/de/Wuppertal' }
        ]
      },
      { 
        text: 'NL', 
        items: [
          { text: 'Amsterdam', link: '/nl/Amsterdam' },
        ]
      },
      { 
        text: 'CH', 
        items: [
          /*
          { text: 'Basel', link: '/ch/Basel' },
          */
          { text: 'Bern', link: '/ch/Bern' },
          { text: 'Lausanne', link: '/ch/Lausanne' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Country',
        items: [
          { 
            text: 'Germany', 
            base: '/de/',
            link: 'index',
            items: [
              { text: 'Braunschweig', link: 'Braunschweig' },
              { text: 'Dresden', link: 'Dresden' },
              { text: 'Heidelberg', link: 'Heidelberg' },
              /*
              { text: 'Rhein', link: 'Rhein' },
              { text: 'Frankfurt', link: 'Frankfurt' },
              { text: 'Berlin', link: 'Berlin' },
              { text: 'Mainz', link: 'Mainz' },
              { text: 'Duesseldorf', link: 'Duesseldorf' },
              { text: 'Freiburg', link: 'Freiburg' },
              { text: 'Bonn', link: 'Bonn' },
              { text: 'Goettingen', link: 'Goettingen' },
               */
              { text: 'Köln', link: 'Koeln' },
              { text: 'Leibzig', link: 'Leibzig' },
              { text: 'Münster', link: 'Muenster' },
              { text: 'Potsdam', link: 'Potsdam' },
              { text: 'Wuppertal', link: 'Wuppertal' }
            ]
          },
          { 
            text: 'Netherlands', 
            base: '/nl/' ,
            link: 'index',
            items: [
              { text: 'Amsterdam', link: 'Amsterdam' }
            ]
          },
          { 
            text: 'Switzerland', 
            base: '/ch/',
            link: 'index',
            items: [
              /*
              { text: 'Basel', link: 'Basel' },
              */
              { text: 'Bern', link: 'Bern' },
              { text: 'Lausanne', link: 'Lausanne' }
            ]
          }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          ja: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '検索',
              },
              modal: {
                displayDetails: '詳細を表示',
                resetButtonTitle: '検索ワードを削除',
                noResultsText: '検索がヒットしません。',
                footer: {
                  selectText: '決定',
                  navigateText: '選択',
                  navigateUpKeyAriaLabel: '上',
                  navigateDownKeyAriaLabel: '下',
                  closeText: '閉じる',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          },
          
          de: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: 'Suchen',
              },
              modal: {
                displayDetails: 'Detail',
                resetButtonTitle: 'Löschen',
                noResultsText: 'Kein Ergebnis',
                footer: {
                  selectText: 'Wählen',
                  navigateText: 'Navigation',
                  navigateUpKeyAriaLabel: 'oben',
                  navigateDownKeyAriaLabel: 'unter',
                  closeText: 'Schließen',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/sigma-k-365/sigma-k-365.github.io'}
    ],

    footer : {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present sigma-k-365'
    }
  }
})
