<template>
  <NSwitch v-model:value="isDarkTheme">
    <template #checked-icon>
      🌑
    </template>
    <template #unchecked-icon>
      ☀️
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
</script>
