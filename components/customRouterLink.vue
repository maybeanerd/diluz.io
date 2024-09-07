<template>
  <a
    v-if="isUrl(props.to)"
    :href="props.to.toString()"
    class="text-base-light dark:text-base-dark
    hover:text-highlight-light hover:dark:text-highlight-dark"
  >
    <slot />
  </a>
  <RouterLink v-else :to="props.to">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router';

type Props = {
  to: string | RouterLinkProps['to'];
};

const props = defineProps<Props>();

function isUrl (to: Props['to']): to is string | URL {
  try {
    const createdUrl = new URL(to.toString());
    return createdUrl instanceof URL;
  } catch {
    return false;
  }
}
</script>
