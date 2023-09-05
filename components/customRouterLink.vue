<template>
  <a v-if="isUrl(props.to)" :href="props.to.toString()" class="[&>*]:cursor-pointer">
    <!-- this style enforcement is necessary due to how our UI library generates styles during runtime,
      and apparently doesn't want pointers on tags -->
    <slot />
  </a>
  <RouterLink v-else :to="props.to">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLinkProps } from 'vue-router';

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
