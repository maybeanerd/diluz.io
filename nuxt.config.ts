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
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 128,
          height: 128,
          fit: 'inside',
        },
      },
      miniAvatar: {
        modifiers: {
          format: 'webp',
          width: 26,
          height: 26,
          fit: 'inside',
        },
      },
      project: {
        modifiers: {
          format: 'webp',
          width: 432,
          height: 256,
          fit: 'inside',
        },
      },
      dvd: {
        modifiers: {
          format: 'webp',
          width: 200,
          height: 200,
          fit: 'inside',
        },
      },
      techIcon: {
        modifiers: {
          format: 'webp',
          width: 16,
          height: 16,
          fit: 'inside',
        },
      },
      githubRepo: {
        modifiers: {
          format: 'webp',
          width: 96,
          height: 96,
          fit: 'inside',
        },
      },
    },
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
