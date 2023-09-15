<template>
  <NDrawer v-model:show="isOpen" placement="left">
    <NDrawerContent :title="t('navbar.title')" closable>
      <div class="h-full flex flex-col justify-between">
        <NMenu v-model:value="selectedProfile" :options="menuOptions" />
        <div>
          <NDivider />
          <div class="text-center text-xs">
            {{ t('navbar.commit') }}
            <InlineLink :to="getLinkToCommit(commitHash)">
              {{ commitHash }}
            </InlineLink><br>
            {{ t('navbar.builtOn') }}
            <InlineLink :to="latestBuildsUrl">
              {{ stringifyDate(buildDate) }}
            </InlineLink>
          </div>
        </div>
      </div>
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui';
import { RouteLocationNormalized, RouterLink } from '~/.nuxt/vue-router';
import { useMenu } from '~/composables/useMenu';
import { profiles, defaultProfileName } from '~/server/profiles';

const { t } = useI18n();

const menuOptions = profiles.map((profile) => {
  const name = profile.person.name.first.toLowerCase();

  const menuOption: MenuOption = {
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
    // TODO we could add icons of the profiles here if we wanted
    // icon: renderIcon(profile.icon),
  };

  return menuOption;
});

const route = useRoute();

function getCurrentProfile (to?: RouteLocationNormalized) {
  return (
    menuOptions
      .find(option => (to ?? route).path.endsWith(option.key?.toString() ?? ''))
      ?.key?.toString() ?? defaultProfileName
  );
}

const selectedProfile = ref<string | null>(getCurrentProfile());

const router = useRouter();
const { isOpen } = useMenu();

router.afterEach((to) => {
  selectedProfile.value = getCurrentProfile(to);

  // Close navbar when any navigation occurs
  isOpen.value = false;
});

const runtimeConfig = useRuntimeConfig();

const { commitHash } = runtimeConfig.public;
const buildDate = new Date(runtimeConfig.public.buildDate);
</script>
