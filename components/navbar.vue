<template>
  <NDrawer v-model:show="isOpen" placement="left">
    <NDrawerContent title="The Di Luzios" closable>
      <NMenu :options="menuOptions" @update:value="handleNavbarLinkClicked" />
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
import { MenuOption, NDrawer, NDrawerContent, NIcon, NMenu } from 'naive-ui';
import { Airplane } from '@vicons/ionicons5';
import { RouterLink } from '~/.nuxt/vue-router';
import { useMenu } from '~/composables/useMenu';
import { upperCaseFirstLetter } from '~/utils/string';
import { profiles } from '~/server/profiles';

const { isOpen } = useMenu();

function handleNavbarLinkClicked () {
  // Close navbar when it was used
  isOpen.value = false;
}

// TODO change this to render the image of a profile
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = profiles.map((profile) => {
  const name = profile.person.name.first.toLowerCase();

  const menuOption: MenuOption =
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: `/${name}`,

            },
          },
          upperCaseFirstLetter(name),
        ),
      key: name,
      icon: renderIcon(Airplane),
    };

  return menuOption;
});

</script>
