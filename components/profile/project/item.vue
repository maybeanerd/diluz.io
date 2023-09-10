<template>
  <NTimelineItem
    type="success"
    :time="stringifyTimeframe(props.project.timeframe)"
  >
    <h3 class="text-lg -mt-1">
      {{ props.project.title }}
    </h3>
    <ProfileProjectPicture
      v-if="props.project.image"
      :name="props.name"
      :image-path="props.project.image"
    />
    <h4 class="text-base">
      Role
    </h4>
    <p class="text-sm">
      {{ props.project.role }}
    </p>
  </NTimelineItem>
</template>

<script setup lang="ts">
import type { Project } from '~/server/profile.types';

const props = defineProps<{ project: Project; name: string }>();

function stringifyTimeframe (timeframe: Project['timeframe']) {
  const { start, end } = timeframe;
  return `${start.toLocaleDateString()} - ${
    end instanceof Date ? end.toLocaleDateString() : end
  }`;
}
</script>
