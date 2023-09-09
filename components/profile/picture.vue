<template>
  <NuxtPicture
    sizes="sm:64px md:96px lg:128px"
    class="[&>img]:rounded-full [&>img]:border-white [&>img]:border-[1px] [&>img]:w-16 [&>img]:sm:w-24 [&>img]:md:w-32"
    :src="`/profile/${props.name.toLowerCase()}/${props.image.path}`"
  />
</template>

<script setup lang="ts">
import type { Profile } from '~/server/profile.types';

const props = defineProps<{
  image: NonNullable<Profile['person']['image']>;
  name: string;
}>();
</script>
