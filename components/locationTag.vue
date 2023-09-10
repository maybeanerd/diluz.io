<template>
  <CustomTag icon="ph:map-pin">
    <template v-if="props.location.city !== undefined">
      {{ props.location.city }},
    </template>
    {{ props.location.country }}
  </CustomTag>
</template>

<script setup lang="ts">
import { Profile } from '~/server/profile.types';

const props = defineProps<{
  location: NonNullable<Profile['person']['meta']['basedIn']>;
}>();
</script>
