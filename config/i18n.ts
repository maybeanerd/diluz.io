import type { NuxtConfig } from 'nuxt/schema';

export const locales: Array<{ code: string, file: `${string}.json`, name: string }> = [
  {
    code: 'en',
    file: 'en.json',
    name: 'EN',
  },
  {
    code: 'de',
    file: 'de.json',
    name: 'DE',
  },
];

export type Locales = 'en' | 'de';

export const defaultLocale = 'en';

export const i18n: NuxtConfig['i18n'] = {
  locales,
  strategy: 'prefix_and_default',
  detectBrowserLanguage: {
    fallbackLocale: defaultLocale,
  },
  langDir: 'locales',
  defaultLocale,
  vueI18n: './config/i18n.config.ts',
};
