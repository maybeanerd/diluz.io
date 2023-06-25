<template>
  <Profile :name="name ?? defaultProfile" />
</template>

<script setup lang="ts">
import { useHeader } from '~/composables/useHeader';
import { defaultProfile } from '~/constants/defaultProfile';
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

const route = useRoute();
const name = route.params.name as string;

const { title } = useHeader();
title.value = name;
</script>
