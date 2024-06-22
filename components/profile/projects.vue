<template>
  <NTimeline>
    <ProfileProjectItem
      v-for="(project, index) in orderedProjects"
      :key="index"
      :project="project"
      :name="props.name"
      :line-type="index < orderedProjects.length - 1 ? 'default' : 'dashed'"
    />

    <NTimelineItem :title="t('project.endOfTimeline')" :time="stringifyDate(new Date(0))" />
  </NTimeline>
</template>

<script setup lang="ts">
import {
  ProjectType,
  type Profile,
  type Project,
} from '~/server/profile.types';

const { t } = useI18n();

const props = defineProps<{ projects: Profile['projects']; name: string }>();

// Returning a number smaller than 0 implies A should come before B
function compareProjects (a: Project, b: Project): number {
  if (props.projects.orderBy !== 'timeframe') {
    return 0;
  }

  // prioritize earlier start date
  const startDateDifference = b.timeframe.start.getTime() - a.timeframe.start.getTime();
  if (startDateDifference !== 0) {
    return startDateDifference;
  }
  // If start date is the same, we need tie breakers

  // prioritize jobs over side projects
  if (a.type === ProjectType.job && b.type !== ProjectType.job) {
    return -1;
  }
  if (b.type === ProjectType.job && a.type !== ProjectType.job) {
    return 1;
  }

  // prioritize still working on it
  if (a.timeframe.end === 'current' && b.timeframe.end !== 'current') {
    return -1;
  }
  if (b.timeframe.end === 'current' && a.timeframe.end !== 'current') {
    return 1;
  }

  // I we cannot tie break, leave original order
  return 0;
}

const orderedProjects = computed(() => {
  return props.projects.list
    .filter(project => project.showInProfile)
    .sort(compareProjects);
});
</script>
