<template>
  <div class="mb-4">
    <NH1>
      {{ props.person.name.first }} {{ props.person.name.last }}
      <LocationTag v-if="props.person.basedIn" :location="props.person.basedIn" />
    </NH1>
    <p class="text-lg mb-2">
      {{ props.person.shortText }}
    </p>
    <SocialTag
      v-for="social in props.person.socials"
      :key="social.type"
      :social="social"
    />
  </div>
</template>

<script setup lang="ts">
import { NH1 } from 'naive-ui';

import type { Profile } from '~/server/profile.types';

const props = defineProps<{ person: Profile['person'] }>();
</script>
