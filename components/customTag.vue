<template>
  <NTag round class="m-1" :type="props.type">
    <slot />
    <template v-if="props.icon" #icon>
      <NIcon :component="props.icon" class="ml-1" />
    </template>
  </NTag>
</template>

<script setup lang="ts">
import { NTag, NIcon, TagProps } from 'naive-ui';

const props = defineProps<{
  icon?: globalThis.Component;
  type?: TagProps['type'];
}>();
</script>
