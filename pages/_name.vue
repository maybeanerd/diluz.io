<template>
  <section>
    <v-container fill-height fluid class="container">
      <v-row align="center" justify="center">
        <v-col class="column">
          <v-card class="card">
            <v-card-title class="headline">Sebastian Di Luzio</v-card-title>

            <v-card-text> {{ profile.person }} </v-card-text>
          </v-card>

          <v-card class="card">
            <v-card-title v-if="profile.skills.languages" class="headline"
              >Languages</v-card-title
            >
            <v-card-text v-if="profile.skills.languages">
              {{ profile.skills.languages }}
            </v-card-text>

            <v-card-title
              v-if="profile.skills.programminglangs"
              class="headline"
              >Programming Languages</v-card-title
            >
            <v-card-text v-if="profile.skills.programminglangs">
              {{ profile.skills.programminglangs }}
            </v-card-text>

            <v-card-title v-if="profile.skills.misc" class="headline"
              >Misc. Skills</v-card-title
            >
            <v-card-text v-if="profile.skills.misc">
              {{ profile.skills.misc }}
            </v-card-text>

            <v-card-title v-if="profile.hobbies" class="headline"
              >Hobbies</v-card-title
            >
            <v-card-text v-if="profile.hobbies">
              {{ profile.hobbies }}
            </v-card-text>
          </v-card>
          <v-card v-if="profile.projects" class="card">
            <v-card-title class="headline">Projects</v-card-title>
            <v-card-text
              v-for="project in profile.projects"
              :key="project.title"
            >
              {{ project }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" color="green" light centered
        >{{ alert }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
        </template></v-snackbar
      >
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';
import Logo from '~/components/Logo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';
import { profiles } from '~/scripts/profiles';

@Component({
  components: {
    Logo,
    VuetifyLogo,
  },
  asyncData: async ({ params, redirect }) => {
    const profile = profiles.get(params.name.toLowerCase());
    if (profile) {
      return { profile };
    }
    return redirect('/');
  },
})
export default class homePage extends Vue {
  gotoGithub() {
    window.open('https://github.com/T0TProduction/diluz.io', '_blank');
  }

  snackbar = false;

  drawer = false;

  group = true;

  alert: string | false = false;

  goBackToMain() {
    this.$router.push({ path: '/' });
  }
}
</script>

<style lang="scss" scoped>
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
  background: none;
  box-shadow: none !important;
}
.service {
  height: 96px;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .service {
    height: 64px;
  }
}
</style>
