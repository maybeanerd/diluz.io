<template>
  <CustomRouterLink :to="props.to" class="text-green-300 hover:text-green-400">
    <slot />
  </CustomRouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{ to: URL }>();
</script>
