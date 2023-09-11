<template>
  <!-- TODO use project type to add icon to timeline item instead of circle of its type -->
  <NTimelineItem
    type="success"
    :time="stringifyTimeframe(props.project.timeframe)"
  >
    <h3 class="text-base -mt-[5px] mb-2">
      {{ props.project.title }}
    </h3>
    <div class="ml-2">
      <ProfileProjectPicture
        v-if="props.project.image"
        :name="props.name"
        :image-path="props.project.image"
      />
      <ProfileProjectFact :title="t('project.role')" :value="props.project.role" />
      <ProfileProjectFact
        :title="'Description'"
        :value="props.project.description"
      />
      <!-- TODO move description to a dedicated space -->
      <ProfileProjectFact
        v-if="props.project.technologies"
        :title="t('project.technologies')"
        :value="props.project.technologies"
      />
      <!-- TODO embed link nicely -->
      <ProfileProjectFact
        v-if="props.project.url"
        :title="'URL'"
        :value="props.project.url"
      />
      <ProfileProjectFact
        v-if="props.project.highlights"
        :title="'Highlights'"
        :value="props.project.highlights"
      />
    </div>
  </NTimelineItem>
</template>

<script setup lang="ts">
import type { Project } from '~/server/profile.types';

const { t } = useI18n();

const props = defineProps<{ project: Project; name: string }>();

function stringifyTimeframe (timeframe: Project['timeframe']) {
  const { start, end } = timeframe;
  return `${start.toLocaleDateString()} - ${
    end instanceof Date ? end.toLocaleDateString() : end
  }`;
}
</script>
