<template>
  <div
    class="p-2 sticky top-0 flex justify-between z-30 bg-background-light dark:bg-background-dark border-b-[1px] border-content-secondary-light dark:border-content-secondary-dark"
  >
    <NButton quaternary round @click="toggleMenu">
      <template #icon>
        <NaiveIcon :size="26" name="ph:list" />
      </template>
    </NButton>
    <div v-if="title" class="self-center text-lg">
      <p>{{ title }}</p>
    </div>
    <div class="flex space-x-4">
      <ThemePicker class="my-auto" />
      <LanguagePicker />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenu } from '~/composables/useMenu';
import { useHeader } from '~/composables/useHeader';

const { isOpen } = useMenu();
const { title } = useHeader();

function toggleMenu () {
  isOpen.value = !isOpen.value;
}

</script>
