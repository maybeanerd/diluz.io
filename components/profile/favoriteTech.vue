<template>
  <div>
    <h2 class="text-lg">
      Favorite Technology Stack
    </h2>
    <div>
      <CustomTag v-for="(technology, index) in props.technologies" :key="index">
        {{ technology.title }}
      </CustomTag>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Profile } from '~/server/profile.types';

const props = defineProps<{ technologies: Profile['favoriteTech'] }>();
</script>
