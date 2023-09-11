<template>
  <CustomRouterLink
    :to="props.to"
    class="text-primary-base-light hover:text-primary-highlight-light dark:text-primary-base-dark dark:hover:text-primary-highlight-dark"
  >
    <slot />
  </CustomRouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{ to: URL }>();
</script>
