<template>
  <NuxtPicture
    sizes="sm:64px md:96px lg:128px"
    class="[&>img]:rounded-full [&>img]:border-content-secondary-light [&>img]:dark:border-content-secondary-dark [&>img]:border-[1px] [&>img]:w-16 [&>img]:sm:w-24 [&>img]:md:w-32 [&>img]:h-16 [&>img]:sm:h-24 [&>img]:md:h-32"
    :src="`/profile/${props.name.toLowerCase()}/${props.image}`"
  />
</template>

<script setup lang="ts">
import type { Image } from '~/server/profile.types';

const props = defineProps<{
  image: Image;
  name: string;
}>();
</script>
