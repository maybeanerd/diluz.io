<template>
  <v-app>
    <v-main><dvd :active="dvdActive" /><nuxt /></v-main>
    <v-footer>
      <span @click="clickEasteregg">&copy; Sebastian Di Luzio</span>
      <v-spacer></v-spacer>
      <span>
        made with
        <a href="https://www.typescriptlang.org/">
          <nuxt-img
            class="textheight"
            src="/icons/typescript.svg"
            preset="footerIcon"
          />
        </a>
        <a href="https://nuxtjs.org/">
          <nuxt-img
            class="textheight"
            src="/icons/nuxt-square.svg"
            preset="footerIcon"
          />
        </a>
        <a href="https://vuetifyjs.com/">
          <nuxt-img
            class="textheight"
            src="/icons/vuetify-icon.png"
            preset="footerIcon"
          />
        </a>
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';
import dvd from '~/components/ImageDvDMove.vue';
import { getHeaders } from '~/scripts/helpers/head';

@Component({ components: { dvd } })
export default class Default extends Vue {
  head() {
    return getHeaders(this.$route.fullPath);
  }

  dvdActive = false;

  counter = 0;

  clickEasteregg() {
    if (this.counter < 4) {
      this.counter++;
    } else {
      this.dvdActive = true;
    }
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
