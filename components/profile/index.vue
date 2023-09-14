<template>
  <div class="flex flex-col max-w-4xl mx-auto">
    <ProfilePerson :person="props.profile.person" />
    <ProfileHighlight
      v-if="props.profile.highlights"
      class="mt-8"
      :highlights="props.profile.highlights"
    />
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
