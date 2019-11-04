<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <Logo />
        <VuetifyLogo />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to diluz.io</v-card-title>
        <v-card-text>
          <p>We are currently under construction, so how about you visit at some later time?</p>
          <div class="text-xs-right">
            <em>
              <small>&mdash; Sebastian Di Luzio</small>
            </em>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
};
</script>
