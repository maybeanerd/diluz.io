<template>
  <div>
    <h2 class="text-xl">
      Projects
    </h2>
    <div class="mx-4">
      <NTimeline>
        <ProfileProjectItem
          v-for="(project, index) in orderedProjects"
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
import { NTimeline, NTimelineItem } from 'naive-ui';

import { ProjectType, type Profile, type Project } from '~/server/profile.types';

const props = defineProps<{ projects: Profile['projects'] }>();

function compareProjects (a: Project, b: Project) {
  // prioritize jobs over side projects
  if (a.type === ProjectType.job && b.type !== ProjectType.job) {
    return -1;
  }
  if (b.type === ProjectType.job && a.type !== ProjectType.job) {
    return 1;
  }

  // prioritize still working on it over the start date.
  if (a.timeframe.end === 'current' && b.timeframe.end !== 'current') {
    return -1;
  }
  if (b.timeframe.end === 'current' && a.timeframe.end !== 'current') {
    return 1;
  }

  return b.timeframe.start.getTime() - a.timeframe.start.getTime();
}

const orderedProjects = computed(() => {
  return props.projects.list
    .filter(proj => proj.showInProfile)
    .sort(compareProjects);
});
</script>
