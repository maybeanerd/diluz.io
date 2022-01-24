<template>
  <v-container fill-height fluid class="container">
    <v-row align="center" justify="center">
      <v-col class="column">
        <v-card class="card">
          <v-card-title class="headline justify-center"
            >Check out the diluz.ios:</v-card-title
          >
          <v-card-text>
            <v-row
              v-for="profile in profiles"
              :key="profile.name"
              class="pb-3 pt-1"
              align="center"
              justify="center"
            >
              <nuxt-link
                :to="profile.person.name.first.toLowerCase()"
                class="unstyled-link"
              >
                <v-btn
                  ><img
                    class="profileIcon mr-2"
                    :src="getProfilePictureFromProfile(profile)"
                  />
                  {{ profile.person.name.first }}</v-btn
                >
              </nuxt-link>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card class="services">
          <v-row justify="center">
            <img
              class="service"
              src="~assets/images/services/GitHub/GitHub-Mark-Light-120px-plus.png"
              @click="gotoGithub"
            />
          </v-row>
          <v-card-title class="justify-center pointer" @click="gotoGithub"
            >View the sourcecode on GitHub</v-card-title
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';
import Logo from '~/components/Logo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';
import { profiles } from '~/scripts/profiles';
import { getProfilePictureFromProfile } from '~/scripts/util';

@Component({
  components: {
    Logo,
    VuetifyLogo,
  },
  layout: 'dvd',
})
export default class homePage extends Vue {
  gotoGithub() {
    window.open('https://github.com/T0TProduction/diluz.io', '_blank');
  }

  getProfilePictureFromProfile = getProfilePictureFromProfile;

  profiles = profiles;
}
</script>

<style lang="scss" scoped>
@import '~/assets/shared-styles.scss';

.unstyled-link {
  text-decoration: none;
}
.container {
  background-color: none;
}
.column {
  max-width: 400px;
}
.card {
  margin-top: 2rem;
  text-align: center;
}
.services {
  margin-top: 2rem;
  background: none;
  box-shadow: none !important;
}
.service {
  height: 96px;
  cursor: pointer;
}
.pointer {
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .service {
    height: 64px;
  }
}
</style>
