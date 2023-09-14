<template>
  <div>
    <div class="flex space-x-4 mb-2 md:mb-4 md:space-x-8">
      <ProfilePicture
        v-if="props.person.image"
        :image="props.person.image"
        :name="props.person.name.first"
        class="flex-shrink-0"
      />
      <div>
        <h1 class="text-3xl">
          {{ props.person.name.first }} {{ props.person.name.last }}
        </h1>
        <p class="text-base">
          {{ props.person.shortText }}
        </p>
      </div>
    </div>
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
