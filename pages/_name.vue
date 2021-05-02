<template>
  <section>
    <v-container fill-height fluid class="container">
      <v-row align="start" justify="center">
        <v-col class="column">
          <v-card class="card">
            <v-card-title class="headline">Sebastian Di Luzio</v-card-title>
            <v-card-text v-if="profile.person.shortText"
              ><v-icon left>mdi-comment</v-icon
              >{{ profile.person.shortText }}</v-card-text
            ><v-card-text v-if="profile.person.email"
              ><v-icon left>mdi-email</v-icon
              ><a :href="'mailto: ' + profile.person.email" class="link">{{
                profile.person.email
              }}</a></v-card-text
            ><v-card-text v-if="profile.person.website"
              ><v-icon left>mdi-web</v-icon
              ><a :href="profile.person.website" class="link">{{
                profile.person.website
              }}</a></v-card-text
            >
            <v-card-text
              v-if="profile.person.services"
              style="text-align: left; padding-bottom: 0px"
            >
              <strong> Socials:</strong> </v-card-text
            ><v-card-text v-if="profile.person.services">
              <v-chip
                v-for="(name, service) in profile.person.services"
                :key="service"
                class="ma-2"
                :href="goToProfileOfService(service, name)"
              >
                <v-icon left> mdi-{{ service }} </v-icon>
                {{ capitalizeFirstLetter(service) }}
              </v-chip>
            </v-card-text>
            <v-card-text
              v-if="profile.person.profession"
              style="text-align: left; padding-bottom: 0px"
            >
              <strong> Profession:</strong>
            </v-card-text>
            <v-card-text v-if="profile.person.profession">
              {{ profile.person.profession }}
            </v-card-text>
            <v-card-text
              v-if="profile.person.interests"
              style="text-align: left; padding-bottom: 0px"
            >
              <strong> Interested in:</strong>
            </v-card-text>
            <v-card-text v-if="profile.person.interests">
              <v-chip
                v-for="funfact in profile.person.interests"
                :key="funfact.title"
                class="ma-2"
              >
                <v-icon left> mdi-{{ funfact.icon }} </v-icon>
                {{ funfact.title }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="column">
          <v-card v-if="profile.projects" class="card">
            <v-card-title>Projects and Jobs</v-card-title>
            <v-timeline dense style="padding-right: 1rem">
              <v-timeline-item
                v-for="project in profile.projects"
                :key="project.title"
                color="pink darken-3"
              >
                <v-card class="elevation-2" color="grey darken-3">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline mb-4">
                        <v-icon left> mdi-calendar </v-icon
                        ><v-chip class="ma-2">
                          {{ project.timeframe.start.toDateString() }} </v-chip
                        >-<v-chip class="ma-2">
                          {{
                            project.timeframe.end === typeof Date
                              ? project.timeframe.endtoDateString()
                              : 'current'
                          }}
                        </v-chip>
                      </div>
                      <v-list-item-title class="headline mb-1">
                        {{ project.title }}
                      </v-list-item-title>
                      <v-list-item-subtitle v-if="project.url"
                        ><a :href="project.url" class="link">{{
                          project.url
                        }}</a></v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item-avatar
                    v-if="project.image"
                    tile
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                  <v-card-text style="text-align: left; padding-bottom: 0px">
                    <strong> Role:</strong>
                  </v-card-text>
                  <v-card-text>
                    {{ project.role }}
                  </v-card-text>
                  <v-card-text style="text-align: left; padding-bottom: 0px">
                    <strong> Description:</strong>
                  </v-card-text>
                  <v-card-text>
                    {{ project.description }}
                  </v-card-text>
                  <v-card-text
                    v-if="project.subprojects"
                    style="text-align: left; padding-bottom: 0px"
                  >
                    <strong> Subprojects:</strong>
                  </v-card-text>
                  <v-card-text v-if="project.subprojects">
                    {{ project.subprojects }}
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="pink darken-3">
                <v-card class="elevation-2" color="grey darken-3">
                  <!-- <v-card-title class="headline">
                    The beginning of time
                  </v-card-title> -->
                  <v-card-text> The beginning of time</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
        <v-col class="column">
          <v-card class="card">
            <v-card-title v-if="profile.skills.languages"
              >Languages</v-card-title
            >
            <v-card-text v-if="profile.skills.languages">
              <v-chip
                v-for="language in profile.skills.languages"
                :key="language.lang"
                class="ma-2"
              >
                {{ language.lang }} [{{ language.proficiency }}]
              </v-chip>
            </v-card-text>

            <v-card-title v-if="profile.skills.programminglangs"
              >Programming Languages
            </v-card-title>
            <v-card-text v-if="profile.skills.programminglangs">
              <v-tooltip
                v-for="language in profile.skills.programminglangs"
                :key="language.lang"
                top
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    v-bind="attrs"
                    class="ma-2"
                    :color="
                      language.proficiency === programmingProficiency.strong
                        ? 'pink darken-3'
                        : ''
                    "
                    v-on="on"
                  >
                    {{ language.lang }}
                  </v-chip>
                </template>
                <span>{{
                  language.proficiency === programmingProficiency.strong
                    ? 'Strong'
                    : 'Knowledgeable'
                }}</span>
              </v-tooltip>
            </v-card-text>
            <v-card-title v-if="profile.skills.certificates"
              >Certificates</v-card-title
            >
            <v-card-text v-if="profile.skills.certificates">
              <v-chip
                v-for="skill in profile.skills.certificates"
                :key="skill.title"
                class="ma-2"
                :href="skill.link || ''"
              >
                {{ skill.title }}
              </v-chip>
            </v-card-text>
            <v-card-title v-if="profile.skills.misc">Misc. Skills</v-card-title>
            <v-card-text v-if="profile.skills.misc">
              <v-chip
                v-for="skill in profile.skills.misc"
                :key="skill.title"
                class="ma-2"
              >
                {{ skill.title }}
              </v-chip>
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
import { proficiency } from '~/types/CV';

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

  programmingProficiency = proficiency;

  snackbar = false;

  drawer = false;

  group = true;

  alert: string | false = false;

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  goToProfileOfService(service: string, name: string) {
    if (service === 'github') {
      return `https://github.com/${name}`;
    }
    if (service === 'linkedin') {
      return `https://linkedin.com/in/${name}`;
    }
    return '';
  }

  goBackToMain() {
    this.$router.push({ path: '/' });
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.container {
  background-color: none;
}
.column {
  max-width: 400px;
  min-width: 320px;
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

.link {
  color: white;
}
</style>
