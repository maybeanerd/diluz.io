<template>
  <Profile :profile="profile" />
</template>

<script setup lang="ts">
// This page uses the default profile
const { profile } = useProfileFromRoute();
</script>
