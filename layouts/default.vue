<template>
  <NConfigProvider
    :theme="darkTheme"
    :locale="enUS"
    :date-locale="dateDeDE"
    class="h-screen"
  >
    <div class="flex flex-col min-h-full justify-between">
      <Header />
      <div class="m-4 lg:m-8">
        <slot />
      </div>
      <Footer />
    </div>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, darkTheme, enUS, dateDeDE } from 'naive-ui';
</script>
