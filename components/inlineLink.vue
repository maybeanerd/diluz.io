<template>
  <CustomRouterLink
    :to="props.to"
    class="text-base-light hover:text-highlight-light dark:text-base-dark dark:hover:text-highlight-dark"
  >
    <slot />
  </CustomRouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{ to: URL | string }>();
</script>
