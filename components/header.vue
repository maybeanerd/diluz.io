<template>
  <div class="p-2 sticky top-0 bg-gray-900 border-b-2 border-gray-700">
    <NButton quaternary round @click="toggleMenu">
      <template #icon>
        <NIcon size="26">
          <Menu />
        </NIcon>
      </template>
    </NButton>
  </div>
</template>

<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui';
import { Menu } from '@vicons/ionicons5';

import { useMenu } from '~/composables/useMenu';

const { isOpen } = useMenu();

function toggleMenu () {
  isOpen.value = !isOpen.value;
}
</script>
