<template>
  <!-- TODO use project type to add icon to timeline item instead of circle of its type -->
  <NTimelineItem
    type="success"
  >
    <h3 class="text-base -mt-[3px]">
      {{ props.project.title }}
    </h3>
    <p class="text-xs">
      {{ stringifyTimeframe(props.project.timeframe) }}
    </p>
    <CustomRouterLink v-if="props.project.url" :to="props.project.url" class="text-xs">
      {{ props.project.url }}
    </CustomRouterLink>

    <div class="flex mt-4 space-x-4">
      <div class="mt-1 shrink-0">
        <ProfileProjectPicture
          v-if="props.project.image"
          :name="props.name"
          :image-path="props.project.image"
        />
      </div>
      <div>
        <p class="text-sm">
          {{ props.project.role }}
        </p>

        <ProfileProjectFact
          v-if="props.project.technologies"
          class="mt-2"
          :title="t('project.technologies')"
          variant="tags"
          :value="props.project.technologies"
        />
      </div>
    </div>

    <p class="my-2 text-sm">
      {{ props.project.description }}
    </p>

    <ProfileProjectFact
      v-if="props.project.highlights"
      :title="'Highlights'"
      variant="list"
      :value="props.project.highlights"
    />
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
