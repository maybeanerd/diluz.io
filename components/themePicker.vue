<template>
  <NSwitch v-model:value="isDarkTheme" @change="changeColorMode">
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

const isDarkTheme = computed(() =>
  unref(colorMode) === 'dark',
);

function changeColorMode () {
  if (unref(isDarkTheme)) {
    colorMode.value = 'light';
  } else {
    colorMode.value = 'dark';
  }
}
</script>
