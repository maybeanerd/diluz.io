import type { NuxtI18nOptions } from '@nuxtjs/i18n/dist/module';
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';

export const locales: Array<LocaleObject> = [
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

const defaultLocale = 'en';

export const i18n: NuxtI18nOptions = {
  locales,
  strategy: 'prefix',
  detectBrowserLanguage: {
    fallbackLocale: defaultLocale,
  },
  langDir: 'locales',
  defaultLocale,
};
