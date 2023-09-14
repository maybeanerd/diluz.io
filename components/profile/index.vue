<template>
  <div class="flex flex-col max-w-4xl mx-auto">
    <ProfilePerson :person="props.profile.person" />
    <ProfileFavoriteTech class="mt-8" :technologies="props.profile.favoriteTech" />
    <ProfileProjects
      class="mt-8 mx-4"
      :projects="props.profile.projects"
      :name="props.profile.person.name.first"
    />
  </div>
</template>

<script setup lang="ts">
import { Profile } from '~/server/profile.types';

const props = defineProps<{ profile: Profile }>();
</script>
