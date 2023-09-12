<template>
  <Profile :profile="profile" />
</template>

<script setup lang="ts">
import { profiles } from '~/server/profiles';

definePageMeta({
  validate: (route) => {
    const { name } = route.params;
    return (
      typeof name === 'string' &&
      profiles.some(
        profile =>
          profile.person.name.first.toLowerCase() === name.toLowerCase(),
      )
    );
  },
});

const { profile } = useProfileFromRoute();
</script>
