<template>
  <div class="flex items-center rounded-xl border-2 p-2 border-gray-500">
    <ServiceIcon :type="props.service.type" class="mr-4" />
    <div>{{ props.service.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { Profile } from '~/server/profile.types';

const props = defineProps<{ service: Profile['person']['services'][0] }>();
</script>
