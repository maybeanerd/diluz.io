<template>
  <NDrawer v-model:show="isOpen" :width="502" placement="left">
    <NDrawerContent title="Menu">
      <ProfileList />
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
import { NDrawer, NDrawerContent } from 'naive-ui';
import { useMenu } from '~/composables/useMenu';

const { isOpen } = useMenu();
</script>
