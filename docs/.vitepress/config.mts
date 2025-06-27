import { defineConfig } from 'vitepress'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItFoo from 'markdown-it-foo'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'album!',
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
      light: '/img/logo_light.svg', dark: '/img/logo_dark.svg', alt: 'log sigma'
    },
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DE', 
        items: [
          { text: 'Braunschweig', link: '/de/Braunschweig' },
            /*
            { text: 'Rhein', link: '/de/Rhein/' },
            { text: 'Koeln', link: '/de/Koeln/' },
            { text: 'Frankfurt', link: '/de/Frankfurt/' },
            { text: 'Berlin', link: '/de/Berlin/' },
            { text: 'Potsdam', link: '/de/Potsdam/' },
            { text: 'Mainz', link: '/de/Mainz/' },
            { text: 'Dresden', link: '/de/Dresden/' },
            { text: 'Leibzig', link: '/de/Leibzig/' },
            { text: 'Duesseldorf', link: '/de/Duesseldorf/' },
            { text: 'Heidelberg', link: '/de/Heidelberg/' },
            { text: 'Freiburg', link: '/de/Freiburg/' },
            { text: 'Muenster', link: '/de/Muenster/' },
            { text: 'Bonn', link: '/de/Bonn/' },
            { text: 'Goettingen', link: '/de/Goettingen/' },
            */
            { text: 'Wuppertal', link: '/de/Wuppertal' }
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
          },
          { 
            text: 'NL', 
            items: [
              { text: 'Amsterdam', link: '/nl/Amsterdam' },
            ]
          }
    ],

    sidebar: [
      {
        text: 'Country',
        items: [
          { 
            text: 'Germany', 
            link: '/de/' ,
            items: [
              { text: 'Braunschweig', link: '/de/Braunschweig' },
              /*
              { text: 'Rhein', link: '/de/Rhein/' },
              { text: 'Koeln', link: '/de/Koeln/' },
              { text: 'Frankfurt', link: '/de/Frankfurt/' },
              { text: 'Berlin', link: '/de/Berlin/' },
              { text: 'Potsdam', link: '/de/Potsdam/' },
              { text: 'Mainz', link: '/de/Mainz/' },
              { text: 'Dresden', link: '/de/Dresden/' },
              { text: 'Leibzig', link: '/de/Leibzig/' },
              { text: 'Duesseldorf', link: '/de/Duesseldorf/' },
              { text: 'Heidelberg', link: '/de/Heidelberg/' },
              { text: 'Freiburg', link: '/de/Freiburg/' },
              { text: 'Muenster', link: '/de/Muenster/' },
              { text: 'Bonn', link: '/de/Bonn/' },
              { text: 'Goettingen', link: '/de/Goettingen/' },
               */
              { text: 'Wuppertal', link: '/de/Wuppertal' }
            ]
          },
          { 
            text: 'Switzerland', 
            link: '/ch/' ,
            items: [
              /*
              { text: 'Basel', link: '/ch/Basel' },
              */
              { text: 'Bern', link: '/ch/Bern' },
              { text: 'Lausanne', link: '/ch/Lausanne' }
            ]
          },
          { 
            text: 'Netherlands', link: '/nl/' ,
            items: [
              { text: 'Amsterdam', link: '/nl/Amsterdam' },
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
      copyright: 'Copyright © 2025-present'
    }
  }
})
