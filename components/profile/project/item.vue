<template>
  <!-- TODO use project type to add icon to timeline item instead of circle of its type -->
  <!-- TODO recreate timeline item -->
  <div class="flex gap-4">
    <div class="mt-1 shrink-0">
      <div v-if="props.project.image">
        <ProfileProjectPicture :name="props.name" :image-path="props.project.image" />
      </div><div v-else>
        <UIcon name="i-heroicons:command-line-16-solid" class="w-12 h-12 md:w-16 md:h-16" />
      </div> <!-- TODO fallback image -->
      <div
        v-if="!props.isLast"
        class="m-1 ml-6 md:ml-8 h-full
               border-gray-600 border-dashed border-l-2"
      />
    </div>
    <div class="flex flex-col gap-2">
      <div>
        <h3 class="text-base -mt-[3px]">
          {{ title }}
        </h3>
        <p class="text-xs">
          {{ stringifyTimeframe(props.project.timeframe) }}
        </p>
        <InlineLink v-if="props.project.url" :to="props.project.url" class="text-xs">
          {{ props.project.url }}
        </InlineLink>
      </div>
      <h4 class="text-lg">
        {{ role }}
      </h4>

      <ProfileProjectFact
        v-if="props.project.technologies"
        class="mt-2"
        :title="t('project.technologies')"
        variant="tags"
        :value="props.project.technologies"
      />

      <p class="my-2 text-sm">
        {{ description }}
      </p>

      <ProfileProjectFact
        v-if="props.project.highlights"
        :title="t('project.highlights')"
        variant="list"
        :value="props.project.highlights"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/server/profile.types';

const { t } = useI18n();

const props = defineProps<{
  project: Project;
  name: string;
  isLast: boolean;
}>();

function stringifyTimeframe (timeframe: Project['timeframe']) {
  const { start, end } = timeframe;
  return `${stringifyDate(start)} - ${end instanceof Date ? stringifyDate(end) : end
    }`;
}

const title = useLocalizedString(props.project.title);
const role = useLocalizedString(props.project.role);
const description = useLocalizedString(props.project.description);
</script>
