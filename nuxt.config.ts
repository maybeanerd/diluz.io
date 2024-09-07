import gitCommitInfo from 'git-commit-info';
import { profiles } from './server/profiles';
import { i18n, locales } from './config/i18n';

const routesToPrerender: Array<string> = ['/'];
profiles.forEach((profile) => {
  routesToPrerender.push(
  `/${profile.person.name.first.toLowerCase()}`,
  );
  locales.forEach((locale) => {
    routesToPrerender.push(
      `/${locale.code}/${profile.person.name.first.toLowerCase()}`,
    );
  });
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
    '@nuxt/ui',
  ],
  pwa: {},
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: routesToPrerender,
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
    provider: 'ipx',
  },
  tailwindcss: {
    exposeConfig: true,
  },
  i18n,
  // TODO move to nuxt4 compatability at some point
  compatibilityDate: '2024-09-05',
});
