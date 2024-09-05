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
        <CustomTag v-for="(fact, index) in localizedFacts" :key="index">
          {{ unref(fact) }}
        </CustomTag>
      </div>
      <ul v-else>
        <li v-for="(fact, index) in localizedFacts" :key="index" class="flex">
          <UIcon name="ph:dot-outline" /> {{ unref(fact) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { unref } from 'vue';
import type { LocalizedString } from '~/server/profile.types';

const props = defineProps<{
  title: string;
  value: Array<LocalizedString>;
  variant: 'list' | 'tags';
}>();

const localizedFacts = computed(() => {
  return props.value.map((fact) => {
    return useLocalizedString(fact);
  });
});
</script>
