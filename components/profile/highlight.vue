<template>
  <div>
    <h2 class="text-lg">
      {{ title }}
    </h2>
    <div>
      <CustomTag v-for="(highlight, index) in localizedHighlights" :key="index">
        {{ unref(highlight) }}
      </CustomTag>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Profile } from '~/server/profile.types';

const props = defineProps<{ highlights: NonNullable<Profile['highlights']> }>();

const title = useLocalizedString(props.highlights.title);

const localizedHighlights = computed(() => {
  return props.highlights.list.map((highlight) => {
    return useLocalizedString(highlight.title);
  });
});
</script>
