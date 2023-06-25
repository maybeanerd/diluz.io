<template>
  <NTag>
    {{ props.service.name }}
    <template #icon>
      <NIcon :component="getIconOfServiceType(props.service.type)" />
    </template>
  </NTag>
</template>

<script setup lang="ts">
import { NTag, NIcon } from 'naive-ui';
import {
  LogoLinkedin,
  LogoGithub,
  LogoMastodon,
  Mail,
} from '@vicons/ionicons5';
import { Profile, Service } from '~/server/profile.types';

const props = defineProps<{ service: Profile['person']['services'][0] }>();

function getIconOfServiceType (type: Service) {
  switch (type) {
    case Service.linkedin:
      return LogoLinkedin;
    case Service.github:
      return LogoGithub;
    case Service.mastodon:
      return LogoMastodon;
    case Service.email:
      return Mail;
    default:
      return LogoLinkedin;
  }
}
</script>
