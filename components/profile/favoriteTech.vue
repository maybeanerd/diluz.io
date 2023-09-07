<template>
  <div>
    <NH6>Favorite Technologies</NH6>
    <div>
      <NTag v-for="(technology, index) in props.technologies" :key="index" round class="mx-1">
        {{ technology.title }}
      </NTag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NH6, NTag } from 'naive-ui';

import type { Profile } from '~/server/profile.types';

const props = defineProps<{ technologies: Profile['favoriteTech'] }>();

</script>
