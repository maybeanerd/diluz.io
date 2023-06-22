<template>
  <div class="h-screen bg-gray-900 text-gray-200">
    <NConfigProvider :theme="darkTheme" :locale="enUS" :date-locale="dateDeDE">
      <Header />
      <slot />
      <Footer />
    </NConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { NConfigProvider, darkTheme, enUS, dateDeDE } from 'naive-ui';
</script>
