<template>
  <div class="lg:flex">
    <div class="max-lg:hidden flex-shrink-0 w-72 flex flex-col">
      <ProfilePerson :person="props.profile.person" />
      <ProfileFavoriteTech :technologies="props.profile.favoriteTech" />
    </div>
    <div class="flex flex-col">
      <div class="lg:hidden">
        <ProfilePerson :person="props.profile.person" />
        <ProfileFavoriteTech :technologies="props.profile.favoriteTech" />
      </div>
      <br>
      <ProfileProjects :projects="props.profile.projects" :name="props.profile.person.name.first" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Profile } from '~/server/profile.types';

const props = defineProps<{ profile: Profile }>();

</script>
