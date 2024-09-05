<template>
  <USelect
    v-model="locale"
    :options="languages"
    @update:value="updateLocale"
  />
</template>

<script setup lang="ts">
const { locale, availableLocales } = useI18n();
const { push } = useRouter();
const localePath = useSwitchLocalePath();

const languages = availableLocales.map(locale => ({
  label: locale.toUpperCase(),
  value: locale,
}));

async function updateLocale (newLocale: string) {
  await push(localePath(newLocale));
}
</script>
