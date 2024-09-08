<template>
  <NuxtPicture
    sizes="md:48px lg:64px"
    class="[&>img]:sm:w-12 [&>img]:md:w-16"
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
