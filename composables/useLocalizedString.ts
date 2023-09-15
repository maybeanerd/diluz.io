import type { Locales } from '~/config/i18n';
import { LocalizedString } from '~/server/profile.types';

export function useLocalizedString (localizedString: LocalizedString): ComputedRef<string> {
  const { locale } = useI18n();
  const localizedResult = computed(() => {
    return localizedString[unref(locale) as Locales] ?? localizedString.en;
  });
  return localizedResult;
}
