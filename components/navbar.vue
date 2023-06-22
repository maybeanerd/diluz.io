<template>
  <NLayout has-sider>
    <NLayoutSider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <NMenu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
      <!-- :render-label="renderMenuLabel"
          :render-icon="renderMenuIcon"
          :expand-icon="expandIcon" -->
    </NLayoutSider>
    <NLayout>
      <slot />
    </NLayout>
  </NLayout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutSider, NMenu } from 'naive-ui';
import { MenuMixedOption } from 'naive-ui/es/menu/src/interface';

const menuOptions: Array<MenuMixedOption> = [
  {
    label: 'Hear the Wind Sing',
    key: 'hear-the-wind-sing',
  },
];

const collapsed = ref(true);
</script>
