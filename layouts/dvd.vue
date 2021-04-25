<template>
  <v-app>
    <v-main><dvd /><nuxt /></v-main>
    <v-footer :fixed="fixed" app>
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
import dvd from '~/components/ImageDvDMove.vue';

@Component({ components: { dvd } })
export default class Default extends Vue {
  fixed = false;

  /* data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  }, */
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
