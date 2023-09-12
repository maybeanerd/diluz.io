<template>
  <Profile :profile="profile" />
</template>

<script setup lang="ts">
import { useHeader } from '~/composables/useHeader';
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

const profile = profiles.find(
  searchedProfile =>
    searchedProfile.person.name.first.toLowerCase() === name.toLowerCase(),
)!;

const pageTitle = `${profile.person.name.first} ${profile.person.name.last}`;
const pageDescription =
  profile.person.shortText ?? `${pageTitle}s personal page.`;

const { getImage } = useImage();
const pageImage = profile.person.image
  ? getImage(
      `/profile/${profile.person.name.first.toLowerCase()}/${
        profile.person.image
      }`,
  ).url
  : undefined;

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: pageImage,
  twitterCard: 'summary_large_image',
});

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: pageImage,
    },
  ],
});

const { title } = useHeader();
title.value = profile.person.name.first;
</script>
