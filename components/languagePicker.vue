<template>
  <USelectMenu
    v-model="locale"
    :options="languages"
    @update:model-value="updateLocale"
  />
</template>

<script setup lang="ts">
const { locale: i18nLocale, availableLocales, setLocale } = useI18n();

const languages = availableLocales.map(availableLocale => ({
  label: availableLocale.toUpperCase(),
  value: availableLocale,
}));

const locale = ref(languages.find(
  ({ value }) => value === i18nLocale.value) ?? languages[0]);

function updateLocale (newLocale: { label: string, value: string }) {
  setLocale(newLocale.value);
};

</script>
