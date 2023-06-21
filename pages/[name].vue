<template>
  <Profile :name="name" />
</template>

<script setup>
const route = useRoute();
const { name } = route.params;
</script>
