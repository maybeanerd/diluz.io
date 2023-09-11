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
const { colorMode } = useNaiveColorMode();

const isDarkTheme = computed({
  get: () => unref(colorMode) === 'dark',
  set: (darkMode: boolean) => {
    colorMode.value = darkMode ? 'dark' : 'light';
  },
});
</script>
