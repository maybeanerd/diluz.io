<template>
  <NTag round>
    <template v-if="props.location.city !== undefined">
      {{ props.location.city }},
    </template>
    {{ props.location.country }}
    <template #icon>
      <NIcon :component="LocationOutline" />
    </template>
  </NTag>
</template>

<script setup lang="ts">
import { NTag, NIcon } from 'naive-ui';
import {
  LocationOutline,
} from '@vicons/ionicons5';
import { Profile } from '~/server/profile.types';

const props = defineProps<{ location: NonNullable<Profile['person']['basedIn']> }>();

</script>
