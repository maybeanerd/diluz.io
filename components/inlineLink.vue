<template>
  <CustomRouterLink
    :to="props.to"
    class="text-base-light hover:text-highlight-light dark:text-base-dark dark:hover:text-highlight-dark"
  >
    <slot>
      <span>{{ shortLink }}</span>
    </slot>
  </CustomRouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{ to: URL | string }>();

const shortLink = computed(() => {
  return new URL(props.to).hostname;
});
</script>
