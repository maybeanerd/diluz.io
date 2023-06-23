<template>
  <NDrawer v-model:show="isOpen" placement="left">
    <NDrawerContent title="The Di Luzios" closable>
      <ProfileList />
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
import { NDrawer, NDrawerContent } from 'naive-ui';
import { useMenu } from '~/composables/useMenu';

const { isOpen } = useMenu();

const router = useRouter();

router.afterEach(() => {
  // Close navbar on route change
  isOpen.value = false;
});
</script>
