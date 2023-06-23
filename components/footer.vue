<template>
  <div class="border-2 p-2 text-right">
    Made with ❤️ and TypeScript, Nuxt, Tailwind CSS, and Naive UI - version {{ commitHash }}
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const { commitHash } = runtimeConfig.public;
</script>
