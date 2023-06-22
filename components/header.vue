<template>
  <Navbar />
  <div class="border-2 p-2">
    <NButton @click="toggleMenu">
      Open menu
    </NButton>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useMenu } from '~/composables/useMenu';

const { isOpen } = useMenu();

function toggleMenu () {
  isOpen.value = !isOpen.value;
}
</script>
