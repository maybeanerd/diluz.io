<template>
  <CustomRouterLink :to="link" rel="me">
    <CustomTag type="gray" :icon="getIconOfServiceType(props.social.type)">
      {{ userName }}
    </CustomTag>
  </CustomRouterLink>
</template>

<script setup lang="ts">
import {
  type Social,
  BasicSocial,
  SpecialSocial,
  type SocialInfo,
} from '~/server/profile.types';

const props = defineProps<{ social: SocialInfo }>();

const ServiceIcons: Record<Social, string> = {
  [BasicSocial.linkedin]: 'mdi:linkedin',
  [BasicSocial.github]: 'mdi:github',
  [SpecialSocial.email]: 'ph:envelope-simple',
  [SpecialSocial.mastodon]: 'mdi:mastodon',
  [SpecialSocial.website]: 'ph:globe',
};

function getIconOfServiceType (type: Social | SpecialSocial) {
  return ServiceIcons[type];
}

const ServiceLinks: Record<BasicSocial, string> = {
  [BasicSocial.linkedin]: 'https://www.linkedin.com/in/',
  [BasicSocial.github]: 'https://github.com/',
};

function getDataOfService (social: SocialInfo): {
  userName: string;
  link: string | URL;
} {
  // special case since mastodon can be on different instances
  if (social.type === SpecialSocial.mastodon) {
    return {
      link: new URL(`@${social.userName}`, social.instance),
      userName: `${social.userName}@${social.instance.host}`,
    };
  }
  // special case since mailto is not a url
  if (social.type === SpecialSocial.email) {
    return {
      userName: social.email,
      link: `mailto:${social.email}`,
    };
  }
  if (social.type === SpecialSocial.website) {
    return {
      userName: social.url.toString(),
      link: social.url,
    };
  }

  const baseUrl = ServiceLinks[social.type];

  return {
    userName: social.userName,
    link: new URL(social.userName, baseUrl),
  };
}

const { userName, link } = getDataOfService(props.social);
</script>
