<template>
  <div>
    <h1>Profile List</h1>
    <div>
      <div v-for="(profile, index) in profiles" :key="index">
        {{ profile.person.name }}
        <NButton @click="goToProfile(profile)">
          Go to profile
        </NButton>
      </div>
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
