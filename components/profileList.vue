<template>
  <div>
    <div v-for="(profile, index) in profiles" :key="index">
      <NButton @click="goToProfile(profile)">
        {{ profile.person.name.first }}
      </NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
import { profiles } from '~/server/profiles';
import { Profile } from '~/server/profile.types';

const router = useRouter();

function goToProfile (profile: Profile) {
  router.push(`/${profile.person.name.first.toLowerCase()}`);
}
</script>
