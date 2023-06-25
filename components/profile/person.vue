<template>
  <div>
    <NH1>Person</NH1>
    <div>{{ props.person }}</div>
  </div>
</template>

<script setup lang="ts">
import { NH1 } from 'naive-ui';

import type { Profile } from '~/server/profile.types';

const props = defineProps<{ person: Profile['person'] }>();
</script>
