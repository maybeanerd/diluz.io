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
import type { ThemeConfig } from '@bg-dev/nuxt-naiveui';
import tailwindConfig from '#tailwind-config';

const { colorModePreference } = useNaiveColorMode();
colorModePreference.set('system');

const { theme } = tailwindConfig;

// TODO finalize theme
const themeConfig: ThemeConfig = {
  shared: {
    common: {
      fontFamily: theme.fontFamily.sans.join(', '),
      lineHeight: theme.lineHeight.normal,
    },
  },
  light: {
    common: {
      primaryColor: theme.colors.primary.base.light,
      primaryColorHover: theme.colors.primary.highlight.light,
      primaryColorPressed: theme.colors.primary.action.light,
    },
  },
  dark: {
    common: {
      primaryColor: theme.colors.primary.base.dark,
      primaryColorHover: theme.colors.primary.highlight.dark,
      primaryColorPressed: theme.colors.primary.action.dark,
    },
  },
  mobile: { defaults: false },
  mobileOrTablet: { defaults: false },
};
</script>
