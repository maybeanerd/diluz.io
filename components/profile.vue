<template>
  <div>
    <h1>Profile of {{ props.name }}</h1>
    <div v-if="profile !== undefined">
      {{ profile.projects.list.at(0) }}
    </div>
    <div v-else>
      Profile not found
    </div>
  </div>
</template>

<script setup lang="ts">
import { profiles } from '../server/profiles';

const props = defineProps<{name: string}>();

const profile = computed(() => profiles.find(profile =>
  profile.person.name.first.toLowerCase() === props.name.toLowerCase()),
);
</script>
