<template>
  <USlideover v-model="isOpen" side="left">
    <UCard
      class="flex flex-col flex-1"
      :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
    >
      <h3> {{ t('navbar.title') }}</h3>
      <br>

      <UVerticalNavigation
        :links="menuOptions"
        :ui="{
          size: 'text-md',
        }"
      />

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
import { useMenu } from '~/composables/useMenu';
import { profiles } from '~/server/profiles';
import { getLinkToCommit, latestBuildsUrl } from '~/utils/gitHubRepo';
import { stringifyDate } from '~/utils/date';

const { t } = useI18n();
const localePath = useLocalePath();

const menuOptions = computed(() =>
  profiles.map((profile) => {
    const name = profile.person.name.first.toLowerCase();

    return {
      label: upperCaseFirstLetter(name),
      // avatar: { src: profile.person.image },
      to: localePath(`/${name}`),
    };
  }),
);

const { isOpen } = useMenu();

const router = useRouter();

router.afterEach(() => {
  // Close navbar when any navigation occurs
  isOpen.value = false;
});

const runtimeConfig = useRuntimeConfig();

const { commitHash } = runtimeConfig.public;
const buildDate = new Date(runtimeConfig.public.buildDate);
</script>
