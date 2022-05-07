<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in navigationItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="profile in profiles"
          :key="profile.name"
          :to="`/${profile.person.name.first.toLowerCase()}`"
          router
          exact
        >
          <v-list-item-action>
            <nuxt-img
              class="profileIcon"
              :src="getProfilePictureFromProfile(profile)"
            />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="profile.person.name.first" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
    </v-app-bar>
    <v-main><nuxt /></v-main>
    <v-footer>
      <span>&copy; Sebastian Di Luzio</span>
      <v-spacer></v-spacer>
      <span>
        made with
        <a href="https://www.typescriptlang.org/">
          <nuxt-img class="textheight" src="/icons/typescript.svg" />
        </a>
        <a href="https://nuxtjs.org/">
          <nuxt-img class="textheight" src="/icons/nuxt-square.svg" />
        </a>
        <a href="https://vuetifyjs.com/">
          <nuxt-img class="textheight" src="/icons/vuetify-icon.png" />
        </a>
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';
import { profiles } from '~/scripts/profiles';
import { getProfilePictureFromProfile } from '~/scripts/helpers/profilepicture';
import { getHeaders } from '~/scripts/helpers/head';

@Component({ components: {} })
export default class Default extends Vue {
  head() {
    return getHeaders(this.$route.fullPath);
  }

  drawer = false;

  navigationItems = [
    {
      icon: 'mdi-home',
      title: 'Home',
      to: '/',
    },
  ];

  profiles = profiles;

  getProfilePictureFromProfile = getProfilePictureFromProfile;
}
</script>

<style lang="scss" scoped>
@import '~/assets/shared-styles.scss';

.textheight {
  vertical-align: middle;
  height: 1rem;
  width: 1rem;
  margin-bottom: 2px;
}
</style>
