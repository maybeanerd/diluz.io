<template>
  <div>
    <h1>
      Profile List
    </h1>
    <div>
      <div v-for="(profile, index) in profiles" :key="index">
        {{ profile.person.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { profiles } from '../server/profiles';
</script>
