<template>
  <UBadge color="gray" variant="solid" class="m-1">
    <slot />
    <template v-if="props.icon">
      <UIcon :name="props.icon" class="ml-1" />
    </template>
  </UBadge>
</template>

<script setup lang="ts">

const props = defineProps<{
  icon?: string;
  type?: string; // TODO remove, or rework
}>();
</script>
