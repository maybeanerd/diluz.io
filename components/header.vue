<template>
  <div
    class="p-2 pr-4 sticky top-0 flex justify-between items-center z-30 bg-background-light dark:bg-background-dark border-b-[1px] border-content-secondary-light dark:border-content-secondary-dark"
  >
    <UButton
      variant="solid"
      color="white"
      square
      icon="i-heroicons:bars-3-20-solid"
      size="lg"
      @click="toggleMenu"
    />
    <div class="self-center text-lg">
      <p>{{ profile.person.name.first }}</p>
    </div>
    <LanguagePicker />
  </div>
</template>

<script setup lang="ts">
import { useMenu } from '~/composables/useMenu';

const { isOpen } = useMenu();
const { profile } = useProfileFromRoute();

function toggleMenu () {
  isOpen.value = !isOpen.value;
}
</script>
