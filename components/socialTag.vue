<template>
  <CustomRouterLink
    :to="getLinkOfServiceType(props.social.type, props.social.name)"
  >
    <NTag round type="info">
      {{ props.social.name }}
      <template #icon>
        <NIcon :component="getIconOfServiceType(props.social.type)" />
      </template>
    </NTag>
  </CustomRouterLink>
</template>

<script setup lang="ts">
import { NTag, NIcon } from 'naive-ui';
import {
  LogoLinkedin,
  LogoGithub,
  LogoMastodon,
  Mail,
  GlobeOutline,
} from '@vicons/ionicons5';
import { Profile, Social } from '~/server/profile.types';

const props = defineProps<{ social: Profile['person']['socials'][0] }>();

const ServiceIcons: Record<Social, globalThis.Component> = {
  [Social.linkedin]: LogoLinkedin,
  [Social.github]: LogoGithub,
  [Social.mastodon]: LogoMastodon,
  [Social.email]: Mail,
  [Social.website]: GlobeOutline,
};

function getIconOfServiceType (type: Social) {
  return ServiceIcons[type];
}

const ServiceLinks: Record<Social, string> = {
  [Social.linkedin]: 'https://www.linkedin.com/in/',
  [Social.github]: 'https://github.com/',
  [Social.mastodon]: 'https://',
  [Social.email]: 'mailto:',
  [Social.website]: 'https://',
};

function getLinkOfServiceType (type: Social, username: string) {
  const baseUrl = ServiceLinks[type];

  // special case since mastodon can be on different instances
  if (type === Social.mastodon) {
    const splitUsername = username
      .split('@')
      .filter(string => string.length > 0);
    const [shortUserName, instance] = splitUsername;
    return new URL(`@${shortUserName}`, `${baseUrl}${instance}`);
  }
  // special case since mailto is not a url
  if (type === Social.email) {
    return baseUrl + username;
  }

  return new URL(username, baseUrl);
}
</script>
