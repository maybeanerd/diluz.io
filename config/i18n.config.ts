import { defaultLocale, locales } from '~/config/i18n';

export default defineI18nConfig(() => {
  return {
    legacy: false,
    availableLocales: locales.map(l => l.code),
    fallbackLocale: defaultLocale,
    fallbackWarn: true,
    missingWarn: true,
  };
});
