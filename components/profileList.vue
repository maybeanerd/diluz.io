<template>
  <div>
    <div v-for="(profile, index) in profiles" :key="index" class="w-32">
      <RouterLink
        :to="{
          path: `/${profile.person.name.first.toLowerCase()}`,
        }"
      >
        <NButton
          primary
          round
          class="mb-2 w-full"
          :class="{
            'text-teal-300' : isCurrentRoute(profile.person.name.first.toLowerCase())
          }"
        >
          {{ profile.person.name.first }}
        </NButton>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
import { profiles } from '~/server/profiles';
import { defaultProfile } from '~/constants/defaultProfile';

const route = useRoute();

function isCurrentRoute (path: string) {
  if (path === defaultProfile && route.path === '/') {
    return true;
  }
  return route.path === `/${path}`;
}
</script>
