import gitCommitInfo from 'git-commit-info';
import { profiles } from './server/profiles';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  pwa: {},
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: profiles.map(profile => `/${profile.person.name.first.toLowerCase()}`),
    },
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer',
          ]
        : ['@juggle/resize-observer'],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : [],
    },
  },
  runtimeConfig: {
    public: {
      commitHash: gitCommitInfo().shortHash,
      buildDate: new Date().toISOString(),
    },
  },
  image: {
    format: ['avif', 'webp', 'png'],
    dir: 'assets/images',
  },
});
