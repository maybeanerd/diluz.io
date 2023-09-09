<template>
  <div class="mb-2">
    <h1 class="flex-shrink-0 text-3xl">
      {{ props.person.name.first }} {{ props.person.name.last }}
    </h1>

    <p class="text-base mb-1">
      {{ props.person.shortText }}
    </p>
    <div>
      <LocationTag
        v-if="props.person.meta.basedIn"
        :location="props.person.meta.basedIn"
      />
      <PronounTag
        v-if="props.person.meta.pronouns"
        :pronouns="props.person.meta.pronouns"
      />
      <LanguageTag
        v-if="props.person.meta.languages"
        :languages="props.person.meta.languages"
      />
    </div>
    <div>
      <SocialTag
        v-for="social in props.person.socials"
        :key="social.type"
        :social="social"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Profile } from '~/server/profile.types';

const props = defineProps<{ person: Profile['person'] }>();
</script>
