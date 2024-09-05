<template>
  <USlideover v-model="isOpen" side="left">
    <UCard
      class="flex flex-col flex-1"
      :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
    >
      <template #header>
        {{ t('navbar.title') }}
      </template>

      TODO MENU

      <template #footer>
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
      </template>
    </UCard>
  </USlideover>
</template>

<script setup lang="ts">
import { type RouteLocationNormalized, RouterLink } from 'vue-router';
import { useMenu } from '~/composables/useMenu';
import { profiles, defaultProfileName } from '~/server/profiles';
import { getLinkToCommit, latestBuildsUrl } from '~/utils/gitHubRepo';
import { stringifyDate } from '~/utils/date';

const { t } = useI18n();
const localePath = useLocalePath();

const menuOptions = computed(() =>
  profiles.map((profile) => {
    const name = profile.person.name.first.toLowerCase();

    const menuOption = {
      label: () =>
        h(
          RouterLink,
          {
            to: localePath(`/${name}`),
          },
          upperCaseFirstLetter(name),
        ),
      key: name,
      // TODO we could add icons of the profiles here if we wanted
      // icon: renderIcon(profile.icon),
    };

    return menuOption;
  }),
);

const route = useRoute();

function getCurrentProfile (to?: RouteLocationNormalized) {
  return (
    unref(menuOptions)
      .find(option =>
        (to ?? route).path.endsWith(option.key?.toString() ?? ''),
      )
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
