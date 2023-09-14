<template>
  <NTimeline>
    <ProfileProjectItem
      v-for="(project, index) in orderedProjects"
      :key="index"
      :project="project"
      :name="props.name"
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
</template>

<script setup lang="ts">
import {
  ProjectType,
  type Profile,
  type Project,
} from '~/server/profile.types';

const props = defineProps<{ projects: Profile['projects']; name: string }>();

function compareProjects (a: Project, b: Project) {
  if (props.projects.orderBy !== 'timeframe') {
    return 0;
  }

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
    .filter(project => project.showInProfile)
    .sort(compareProjects);
});
</script>
