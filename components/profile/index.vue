<template>
  <div v-if="profile !== null" class="flex">
    <div class="max-lg:hidden flex-shrink-0 w-72 m-4 flex flex-col">
      <ProfilePerson :person="profile.person" />
      <ProfileSkills :skills="profile.skills" />
    </div>
    <div class="flex flex-col m-4">
      <div class="lg:hidden">
        <ProfilePerson :person="profile.person" />
        <ProfileSkills :skills="profile.skills" />
      </div>
      <ProfileProjects :projects="profile.projects" />
    </div>
  </div>
  <div v-else>
    Profile not found
  </div>
</template>

<script setup lang="ts">
import { profiles } from '~/server/profiles';

const router = useRouter();
const props = defineProps<{ name: string }>();

const profile = computed(() => {
  const foundProfile = profiles.find(
    profile =>
      profile.person.name.first.toLowerCase() === props.name.toLowerCase(),
  );
  if (foundProfile === undefined) {
    // TODO - redirect to 404 page
    // TODO - manage this in a router guard and not inside the component
    router.push('/');
    return null;
  }
  return foundProfile;
});
</script>
