<template>
  <div>
    <div v-for="(profile, index) in profiles" :key="index">
      <RouterLink
        :to="{
          path: `/${profile.person.name.first.toLowerCase()}`,
        }"
      >
        <NButton round class="mb-2 w-32">
          {{ profile.person.name.first }}
        </NButton>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
import { profiles } from '~/server/profiles';
</script>
