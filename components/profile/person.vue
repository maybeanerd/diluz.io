<template>
  <div>
    <NH1>
      {{ props.person.name.first }} {{ props.person.name.last }}
      <LocationTag v-if="props.person.basedIn" :location="props.person.basedIn" />
    </NH1>
    <NH3>
      {{ props.person.shortText }}
    </NH3>
    <SocialTag
      v-for="social in props.person.socials"
      :key="social.type"
      class="m-1"
      :social="social"
    />
  </div>
</template>

<script setup lang="ts">
import { NH1, NH3 } from 'naive-ui';

import type { Profile } from '~/server/profile.types';

const props = defineProps<{ person: Profile['person'] }>();
</script>
