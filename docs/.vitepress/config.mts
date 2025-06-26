import { defineConfig } from 'vitepress'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItFoo from 'markdown-it-foo'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Album!',
  description: "A photo album taken mainly by iPhone12 mini.",
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
    math:true,
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
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
            ]
          },
          { 
            text: 'Switzerland', 
            link: '/ch/' ,
            items: [
              { text: 'Lausanne', link: '/ch/Lausanne' },
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
    }
  }
})
