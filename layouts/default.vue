<template>
  <NaiveConfig
    :theme-config="themeConfig"
    class="h-screen"
  >
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

const { colorModePreference } = useNaiveColorMode();
colorModePreference.set('system');

const { theme } = tailwindConfig;

// We don't want to have a mobile "theme" at all,
// since all it really does is introduce layout shift after loading the page
// This fallback makes sure the theme looks like the normal desktop one does
// might solve this with a feature later as mentioned here https://github.com/becem-gharbi/nuxt-naiveui/issues/21
const themeFallback = {
  common: {
    fontSize: '14px',
    heightMedium: '34px',
    fontSizeMedium: '14px',
  },
  Form: {
    labelFontSizeTopMedium: '14px',
  },
  Input: {
    heightMedium: '34px',
    fontSizeMedium: '14px',
  },
  Button: {
    heightMedium: '34px',
    fontSizeMedium: '14px',
  },
  Card: {
    fontSizeMedium: '14px',
  },
  Avatar: {
    heightMedium: '34px',
    fontSize: '14px',
  },
  ColorPicker: {
    heightMedium: '34px',
    fontSizeMedium: '14px',
  },
  Dropdown: {
    optionHeightMedium: '34px',
    fontSizeMedium: '14px',
  },
  Radio: {
    buttonHeightMedium: '34px',
    fontSizeMedium: '14px',
  },
  Skeleton: {
    heightMedium: '34px',
  },
  Tag: {
    heightMedium: '34px',
    fontSizeMedium: '14px',
  },
  Result: {
    fontSizeMedium: '14px',
  },
  Tabs: {
    tabFontSizeMedium: '14px',
  },
};

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
  mobile: themeFallback,
  mobileOrTablet: themeFallback,
};
</script>
