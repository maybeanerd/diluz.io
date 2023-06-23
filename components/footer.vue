<template>
  <div class="border-2 p-2 text-right">
    Made with ❤️ and TypeScript, Nuxt, Tailwind CSS, and Naive UI - version {{ commitHash }}
  </div>
</template>

<script setup lang="ts">
import gitCommitInfo from 'git-commit-info';

const commitHash = gitCommitInfo().shortHash;
</script>
