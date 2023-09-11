<template>
  <NuxtPicture
    sizes="sm:64px md:96px lg:128px"
    class="[&>img]:w-16 [&>img]:sm:w-24 [&>img]:md:w-32"
    :src="imagePath"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  imagePath: string;
}>();

const imagePath = computed(() => {
  return `/profile/${props.name.toLowerCase()}/${props.imagePath}`;
});
</script>
