import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  buildModules: [
    '@nuxt/typescript-build',
    [
      '@nuxtjs/vuetify',
      {
        defaultAssets: {
          font: {
            family: 'Roboto',
          },
          icons: 'mdi',
        },
        /*           treeShake: true,         */
        theme: {
          dark: true,
        },
      },
    ],
  ],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },

  target: 'static',

  /*
   ** Headers of the page
   */
  head: {
    title: 'diluz.io',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'theme-color',
        content: '#1f222a',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Computer Scientist. Games Engineer. Geek.',
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Sebastian Di Luzio',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'white',
  },

  /*
   ** Global CSS
   */
  // css: ['~/assets/style/normalize.css', '~/assets/style/app.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  // plugins: ['~/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],
  // override purgecss settings: not done here

  // pwa options
  pwa: {
    manifest: {
      name: 'Sebastian Di Luzio',
      lang: 'en',
    },
  },
  // endof pwa options

  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ] /*
      presets: [
        [
          '@nuxt/babel-preset-app',
          {
            modules: 'commonjs'
          }
        ]
      ] */,
    },
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(conf /* , ctx */) {
      /* conf.module!.rules.push({
        test: /\.vue$/,
        loader: 'vue-svg-inline-loader',
        options: {
          svgo: {
            plugins: [
              {
                prefixIds: true
              }
            ]
          }
        }
      }); */
    },
  },
};
// module.exports = config;
export default config;
