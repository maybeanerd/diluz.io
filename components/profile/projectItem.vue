<template>
  <NTimelineItem
    type="info"
    title="Info"
    :content="JSON.stringify(props.project,null,2)"
    time="2018-04-03 20:46"
  />
</template>

<script setup lang="ts">
import { NTimelineItem } from 'naive-ui';

import type { Project } from '~/server/profile.types';

const props = defineProps<{ project: Project}>();
</script>
