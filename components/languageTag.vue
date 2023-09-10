<template>
  <CustomTag icon="ph:translate">
    {{ readableLanguages }}
  </CustomTag>
</template>

<script setup lang="ts">
import { Profile } from '~/server/profile.types';

const props = defineProps<{
  languages: NonNullable<Profile['person']['meta']['languages']>;
}>();

const readableLanguages = computed(() => {
  let languages = '';
  props.languages.forEach((language, index) => {
    if (index === 0) {
      languages += language;
    } else {
      languages += `, ${language}`;
    }
  });
  return languages;
});
</script>
