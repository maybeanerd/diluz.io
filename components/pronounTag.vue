<template>
  <CustomTag :icon="PersonOutline">
    {{ readablePronouns }}
  </CustomTag>
</template>

<script setup lang="ts">
import { PersonOutline } from '@vicons/ionicons5';
import { Profile } from '~/server/profile.types';

const props = defineProps<{
  pronouns: NonNullable<Profile['person']['meta']['pronouns']>;
}>();

const readablePronouns = computed(() => {
  let pronouns = '';
  props.pronouns.forEach((pronoun, index) => {
    if (index === 0) {
      pronouns += pronoun;
    } else {
      pronouns += `/${pronoun}`;
    }
  });
  return pronouns;
});
</script>
