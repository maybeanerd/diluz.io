<template>
  <CustomTag icon="ph:map-pin">
    <template v-if="city !== undefined">
      {{ city }},
    </template>
    {{ country }}
  </CustomTag>
</template>

<script setup lang="ts">
import { type Profile } from '~/server/profile.types';

const props = defineProps<{
  location: NonNullable<Profile['person']['meta']['basedIn']>;
}>();

const city = props.location.city
  ? useLocalizedString(props.location.city)
  : undefined;
const country = useLocalizedString(props.location.country);
</script>
