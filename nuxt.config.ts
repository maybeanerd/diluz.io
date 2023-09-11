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
    '@bg-dev/nuxt-naiveui',
  ],
  pwa: {},
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: profiles.map(
        profile => `/${profile.person.name.first.toLowerCase()}`,
      ),
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
  tailwindcss: {
    exposeConfig: true,
  },
  i18n: {
  },
});
