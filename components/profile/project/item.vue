<template>
  <NTimelineItem
    type="success"
    :title="props.project.title"
    :time="stringifyTimeframe(props.project.timeframe)"
  >
    <ProfileProjectPicture v-if="props.project.image" :name="props.name" :image-path="props.project.image" />
    {{
      props.project }}
  </NTimelineItem>
</template>

<script setup lang="ts">
import { NTimelineItem } from 'naive-ui';

import type { Project } from '~/server/profile.types';

const props = defineProps<{ project: Project, name: string}>();

function stringifyTimeframe (timeframe : Project['timeframe']) {
  const { start, end } = timeframe;
  return `${start.toLocaleDateString()} - ${end instanceof Date ? end.toLocaleDateString() : end}`;
}
</script>
