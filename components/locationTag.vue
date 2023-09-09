<template>
  <CustomTag :icon="LocationOutline">
    <template v-if="props.location.city !== undefined">
      {{ props.location.city }},
    </template>
    {{ props.location.country }}
  </CustomTag>
</template>

<script setup lang="ts">
import { LocationOutline } from '@vicons/ionicons5';
import { Profile } from '~/server/profile.types';

const props = defineProps<{
  location: NonNullable<Profile['person']['meta']['basedIn']>;
}>();
</script>
