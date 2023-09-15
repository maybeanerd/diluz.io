<template>
  <CustomTag icon="ph:map-pin">
    <template v-if="props.location.city !== undefined">
      {{ useLocalizedString(props.location.city) }},
    </template>
    {{ useLocalizedString(props.location.country) }}
  </CustomTag>
</template>

<script setup lang="ts">
import { Profile } from '~/server/profile.types';

const props = defineProps<{
  location: NonNullable<Profile['person']['meta']['basedIn']>;
}>();
</script>
