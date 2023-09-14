<template>
  <NSwitch v-model:value="isDarkTheme" :rail-style="getRailStyle">
    <template #checked-icon>
      <NaiveIcon name="ph:moon" :size="14" icon-color="#111827" />
    </template>
    <template #unchecked-icon>
      <NaiveIcon name="ph:sun" :size="14" icon-color="#111827" />
    </template>
  </NSwitch>
</template>

<script setup lang="ts">
const { colorMode, colorModePreference } = useNaiveColorMode();

const isDarkTheme = computed({
  get: () => unref(colorMode) === 'dark',
  set: (darkMode: boolean) => {
    const selectedColorMode = darkMode ? 'dark' : 'light';
    colorModePreference.set(selectedColorMode);
  },
});

function getRailStyle ({ checked }: { checked: boolean }) {
  return {
    backgroundColor: checked ? '#1f2937' : '#e5e7eb',
  };
}
</script>
