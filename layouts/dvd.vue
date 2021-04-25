<template>
  <v-app>
    <v-main><dvd /><nuxt /></v-main>
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
import dvd from '~/components/ImageDvDMove.vue';

@Component({ components: { dvd } })
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
.textheight {
  vertical-align: middle;
  height: 1rem;
  width: 1rem;
  margin-bottom: 2px;
}
</style>
