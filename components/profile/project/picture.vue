<template>
  <NuxtPicture
    sizes="sm:48px md:64px"
    class="[&>img]:w-12 [&>img]:md:w-16 [&>img]:rounded-md"
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
