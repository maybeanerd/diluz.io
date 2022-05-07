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
        theme: {
          dark: true,
        },
      },
    ],
    '@nuxt/image',
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
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'white',
  },

  // customize nuxt/image
  image: {
    image: {
      dir: 'assets/images',
    },
    provider: 'static',
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
  modules: ['@nuxtjs/axios'],
  // override purgecss settings: not done here

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
    extend(/* conf /* , ctx */) {
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
