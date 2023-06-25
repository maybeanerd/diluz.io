<template>
  <NIcon size="28">
    <component :is="getIconOfServiceType(props.type)" />
  </NIcon>
</template>

<script setup lang="ts">
import { NIcon } from 'naive-ui';
import {
  LogoLinkedin,
  LogoGithub,
  LogoMastodon,
  Mail,
} from '@vicons/ionicons5';
import { Service } from '~/server/profile.types';

const props = defineProps<{ type: Service }>();

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
