<template>
  <div>
    <h1>Profile of {{ props.name }}</h1>
    <div v-if="profile !== null">
      {{ profile.projects.list.at(0) }}
    </div>
    <div v-else>
      Profile not found
    </div>
  </div>
</template>

<script setup lang="ts">
import { profiles } from '../server/profiles';

const router = useRouter();
const props = defineProps<{name: string}>();

const profile = computed(() => {
  const foundProfile = profiles.find(profile =>
    profile.person.name.first.toLowerCase() === props.name.toLowerCase());
  if (foundProfile === undefined) {
    // TODO - redirect to 404 page
    // TODO - manage this in a router guard and not inside the component
    router.push('/');
    return null;
  }
  return foundProfile;
},
);
</script>
