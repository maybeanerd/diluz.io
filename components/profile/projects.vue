<template>
  <div>
    <NH1>Projects</NH1>
    <div class="mx-4">
      <NTimeline>
        <ProfileProjectItem
          v-for="(project, index) in props.projects.list"
          :key="index"
          :project="project"
        />
        <template v-if="props.projects.final">
          <NTimelineItem
            type="info"
            :title="props.projects.final.title"
            :content="props.projects.final.text"
            line-type="dashed"
          />
          <NTimelineItem
            title="The beginning of time"
            :time="new Date(0).toLocaleDateString()"
          />
        </template>
      </NTimeline>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NH1, NTimeline, NTimelineItem } from 'naive-ui';

import type { Profile } from '~/server/profile.types';

const props = defineProps<{ projects: Profile['projects'] }>();
</script>
