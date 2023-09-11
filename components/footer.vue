<template>
  <div
    class="flex justify-end border-t-[1px] p-2 text-xs sm:text-sm border-content-secondary-light dark:border-content-secondary-dark"
  >
    Created with&nbsp;
    <template
      v-for="(dependency, index) in notableDependencies"
      :key="dependency.name"
    >
      <InlineLink :to="dependency.url">
        {{ dependency.name }}
      </InlineLink>{{ index === notableDependencies.length - 1 ? '.' : ',&nbsp;' }}
    </template>
  </div>
</template>

<script setup lang="ts">
const notableDependencies = [
  { name: 'Nuxt', packageName: 'nuxt', url: new URL('https://nuxt.com/') },
  {
    name: 'TypeScript',
    url: new URL('https://www.typescriptlang.org/'),
  },
  {
    name: 'Tailwind CSS',
    url: new URL('https://tailwindcss.com/'),
  },
  {
    name: 'Naive UI',
    url: new URL('https://www.naiveui.com/'),
  },
];
</script>
