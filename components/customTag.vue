<template>
  <UBadge :color="props.type" variant="solid" class="m-1">
    <slot />
    <template v-if="props.icon">
      <UIcon :name="props.icon" class="ml-1" />
    </template>
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
