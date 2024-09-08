<template>
  <UBadge :color="props.type" variant="solid" size="md" class="m-1" :ui="{ rounded: 'rounded-full' }">
    <template v-if="props.icon">
      <UIcon :name="props.icon" class="mr-1" />
    </template>
    <slot />
  </UBadge>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  icon?: string;
  type?: 'gray' | 'white';
}>(), {
  type: 'white',
  icon: undefined,
});
</script>
