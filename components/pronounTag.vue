<template>
  <CustomTag icon="ph:user">
    {{ readablePronouns }}
  </CustomTag>
</template>

<script setup lang="ts">
import { Profile } from '~/server/profile.types';

const props = defineProps<{
  pronouns: NonNullable<Profile['person']['meta']['pronouns']>;
}>();

const readablePronouns = computed(() => {
  let pronouns = '';
  props.pronouns.forEach((pronoun, index) => {
    const localizedPronoun = unref(useLocalizedString(pronoun));
    if (index === 0) {
      pronouns += localizedPronoun;
    } else {
      pronouns += `/${localizedPronoun}`;
    }
  });
  return pronouns;
});
</script>
