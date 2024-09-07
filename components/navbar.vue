<template>
  <USlideover v-model="isOpen" side="left">
    <UCard
      class="flex flex-col flex-1"
      :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
    >
      <div class="flex items-center justify-between">
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1 -mt-4 -ml-4" @click="isOpen = false" />
      </div>
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

    // Sebastians profile is special, as it's the default one.
    // To make this link always be active, even on initial entry,
    // we use the default route instead of the profile route for them.
    const to = name === 'sebastian' ? localePath('/') : localePath(`/${name}`);

    return {
      label: upperCaseFirstLetter(name),
      // avatar: { src: profile.person.image },
      to,
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
