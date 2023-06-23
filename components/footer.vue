<template>
  <div class="border-2 p-2 text-right">
    Made with ❤️ and TypeScript, Nuxt, Tailwind CSS, and Naive UI - built on: {{ buildDate }}
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const buildDate = new Date(runtimeConfig.public.buildDate).toLocaleString('de-DE');
</script>
