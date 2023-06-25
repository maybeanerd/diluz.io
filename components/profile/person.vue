<template>
  <div>
    <NH1>{{ props.person.name.first }} {{ props.person.name.last }}</NH1>
    <div>
      <div>
        {{ props.person.shortText }}
      </div>
      <div>{{ props.person.basedIn }}</div>
      <div>
        {{ props.person.languages }}
      </div>
      <div>
        {{ props.person.nationalities }}
      </div>
      <Service
        v-for="service in props.person.services"
        :key="service.type"
        :service="service"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NH1 } from 'naive-ui';

import type { Profile } from '~/server/profile.types';

const props = defineProps<{ person: Profile['person'] }>();
</script>
