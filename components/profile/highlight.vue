<template>
  <div>
    <h2 class="text-lg">
      {{ useLocalizedString(props.highlights.title) }}
    </h2>
    <div>
      <CustomTag v-for="(highlight, index) in props.highlights.list" :key="index">
        {{ useLocalizedString(highlight.title) }}
      </CustomTag>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Profile } from '~/server/profile.types';

const props =
  defineProps<{ highlights: NonNullable<Profile['highlights']> }>();
</script>
