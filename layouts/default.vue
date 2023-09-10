<template>
  <NaiveConfig :theme-config="themeConfig" class="h-screen">
    <Navbar />
    <NBackTop :right="20" />
    <div class="flex flex-col min-h-full justify-between">
      <Header />
      <div class="p-4 md:p-8 w-screen overflow-x-hidden">
        <slot />
      </div>
      <Footer />
    </div>
  </NaiveConfig>
</template>

<script setup lang="ts">
import { ThemeConfig } from '@bg-dev/nuxt-naiveui';
import tailwindConfig from '#tailwind-config';

const { theme } = tailwindConfig;

// TODO adjust theme
const themeConfig: ThemeConfig = {
  shared: {
    common: {
      fontFamily: theme.fontFamily.sans.join(', '),
      lineHeight: theme.lineHeight.normal,
    },
  },
  light: {
    common: {
      primaryColor: theme.colors.blue[600],
      primaryColorHover: theme.colors.blue[500],
      primaryColorPressed: theme.colors.blue[700],
    },
  },
  dark: {
    common: {
      primaryColor: theme.colors.blue[500],
      primaryColorHover: theme.colors.blue[400],
      primaryColorPressed: theme.colors.blue[600],
    },
  },
};
</script>
