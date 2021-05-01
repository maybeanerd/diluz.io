<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      disable-resize-watcher
      disable-route-watcher
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
    </v-app-bar>
    <v-main><nuxt /></v-main>
    <v-footer>
      <span
        >&copy;
        <!-- {{ new Date().getFullYear() }} -->
        Sebastian Di Luzio</span
      >
      <v-spacer></v-spacer>
      <span>
        made with
        <a href="https://www.typescriptlang.org/">
          <img class="textheight" src="~assets/icons/typescript.svg" />
        </a>

        <a href="https://nuxtjs.org/">
          <img class="textheight" src="~assets/icons/nuxt-square.svg" />
        </a>

        <a href="https://vuetifyjs.com/">
          <img class="textheight" src="~assets/icons/vuetify-icon.png" />
        </a>
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';
import { profiles } from '~/scripts/profiles';

@Component({ components: {} })
export default class Default extends Vue {
  drawer = false;

  items = [
    {
      icon: 'mdi-home',
      title: 'Home',
      to: '/',
    },
  ];

  mounted() {
    profiles.forEach(profile => this.items.push({
      icon: 'mdi-account-circle',
      title: profile.person.name.first,
      to: `/${profile.person.name.first}`,
    }));
  }
}
</script>

<style lang="scss" scoped>
.textheight {
  vertical-align: middle;
  height: 1rem;
  width: 1rem;
  margin-bottom: 2px;
}
</style>

<!-- <style lang="scss">
@import '~/assets/variables.scss';
</style> -->
