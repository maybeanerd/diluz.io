<template>
  <div>
    <h4
      class="text-xs italic"
      :class="{
        'mb-1': props.variant === 'list',
      }"
    >
      {{ props.title }}
    </h4>
    <div class="text-sm">
      <div v-if="props.variant === 'tags'">
        <CustomTag v-for="(fact, index) in props.value" :key="index">
          {{ useLocalizedString(fact) }}
        </CustomTag>
      </div>
      <ul v-else>
        <li v-for="(fact, index) in props.value" :key="index" class="flex">
          <NaiveIcon name="ph:dot-outline" /> {{ useLocalizedString(fact) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LocalizedString } from '~/server/profile.types';

const props = defineProps<{
  title: string;
  value: Array<LocalizedString>;
  variant: 'list' | 'tags';
}>();
</script>
