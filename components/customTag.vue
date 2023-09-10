<template>
  <NTag round class="m-1" :type="props.type">
    <slot />
    <template v-if="props.icon" #icon>
      <NaiveIcon :name="props.icon" class="ml-1" />
    </template>
  </NTag>
</template>

<script setup lang="ts">
import type { TagProps } from 'naive-ui';

const props = defineProps<{
  icon?: string;
  type?: TagProps['type'];
}>();
</script>
