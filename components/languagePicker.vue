<template>
  <NSelect
    v-model="locale"
    :options="languages"
    default-value="en"
    class="w-16"
    @update:value="updateLocale"
  />
</template>

<script setup lang="ts">
const { locale, availableLocales } = useI18n();

const languages = availableLocales.map(locale => ({
  label: locale.toUpperCase(),
  value: locale,
}));

function updateLocale (newLocale:string) {
  locale.value = newLocale;
}
</script>
