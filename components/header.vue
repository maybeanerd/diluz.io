<template>
  <div
    class="p-2 sticky top-0 bg-gray-900 border-b-[1px] border-gray-700 flex justify-between z-30"
  >
    <NButton quaternary round @click="toggleMenu">
      <template #icon>
        <NIcon size="26">
          <Menu />
        </NIcon>
      </template>
    </NButton>
    <div v-if="title" class="self-center text-lg">
      <p>{{ title }}</p>
    </div>
    <NSelect
      v-model="selectedLanguage"
      :options="languages"
      default-value="en"
      class="w-16"
    />
  </div>
</template>

<script setup lang="ts">
import { NButton, NIcon, NSelect } from 'naive-ui';
import { Menu } from '@vicons/ionicons5';

import { useMenu } from '~/composables/useMenu';
import { useHeader } from '~/composables/useHeader';

const { isOpen } = useMenu();
const { title } = useHeader();

function toggleMenu () {
  isOpen.value = !isOpen.value;
}

const selectedLanguage = ref('en');

const languages = [
  {
    label: 'EN',
    value: 'en',
  },
  {
    label: 'DE',
    value: 'de',
  },
];
</script>
