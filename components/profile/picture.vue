<template>
  <NuxtPicture
    v-if="props.person.image"
    sizes="sm:64px md:96px lg:128px"
    class="[&>img]:rounded-full [&>img]:border-white [&>img]:border-[1px]"
    :src="`/profile/${props.person.name.first.toLowerCase()}/${
      props.person.image.path
    }`"
  />
</template>

<script setup lang="ts">
import type { Profile } from '~/server/profile.types';

const props = defineProps<{ person: Profile['person'] }>();
</script>
