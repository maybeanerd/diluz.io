<template>
  <Profile :profile="profile" />
</template>

<script setup lang="ts">
import { useHeader } from '~/composables/useHeader';
import { defaultProfile } from '~/constants/defaultProfile';
import { profiles } from '~/server/profiles';

const profile = profiles.find(
  searchedProfile => searchedProfile.person.name.first.toLowerCase() === defaultProfile,
)!;

const { title } = useHeader();
title.value = `${profile?.person.name.first} ${profile?.person.name.last}`;
</script>
