<template>
  <!-- TODO use project type to add icon to timeline item instead of circle of its type -->
  <NTimelineItem type="success" :line-type="props.lineType">
    <h3 class="text-base -mt-[3px]">
      {{ title }}
    </h3>
    <p class="text-xs">
      {{ stringifyTimeframe(props.project.timeframe) }}
    </p>
    <InlineLink
      v-if="props.project.url"
      :to="props.project.url"
      class="text-xs"
    >
      {{ props.project.url }}
    </InlineLink>

    <div class="flex mt-4 space-x-4">
      <div v-if="props.project.image" class="mt-1 shrink-0">
        <ProfileProjectPicture
          :name="props.name"
          :image-path="props.project.image"
        />
      </div>
      <div>
        <p class="text-sm">
          {{ role }}
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
      {{ description }}
    </p>

    <ProfileProjectFact
      v-if="props.project.highlights"
      :title="t('project.highlights')"
      variant="list"
      :value="props.project.highlights"
    />
  </NTimelineItem>
</template>

<script setup lang="ts">
import type { Project } from '~/server/profile.types';

const { t } = useI18n();

const props = defineProps<{
  project: Project;
  name: string;
  lineType: 'default' | 'dashed';
}>();

function stringifyTimeframe (timeframe: Project['timeframe']) {
  const { start, end } = timeframe;
  return `${stringifyDate(start)} - ${
    end instanceof Date ? stringifyDate(end) : end
  }`;
}

const title = useLocalizedString(props.project.title);
const role = useLocalizedString(props.project.role);
const description = useLocalizedString(props.project.description);
</script>
