<template>
  <div
    class="p-2 pr-4 sticky top-0 flex justify-between items-center z-30
     bg-gray-200 dark:bg-gray-900
     border-b-[1px] border-content-secondary-light dark:border-content-secondary-dark"
  >
    <UButton
      variant="ghost"
      color="gray"
      icon="i-heroicons:bars-3-20-solid"
      @click="toggleMenu"
    />
    <div class="flex gap-2">
      <ColorModePicker />
      <LanguagePicker />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenu } from '~/composables/useMenu';

const { isOpen } = useMenu();

function toggleMenu () {
  isOpen.value = !isOpen.value;
}
</script>
