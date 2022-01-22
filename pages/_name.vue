<template>
  <section>
    <v-container fill-height fluid class="container">
      <v-row align="start" justify="center">
        <v-col class="column">
          <v-card class="card">
            <v-card-title class="headline"
              >{{ profile.person.name.first }}
              {{ profile.person.name.last }}</v-card-title
            >
            <v-list-item-avatar v-if="profile.person.image" size="128"
              ><img :src="profile.person.image"
            /></v-list-item-avatar>
            <v-card-text v-if="profile.person.shortText" class="short-text"
              ><!-- <v-icon left>mdi-comment</v-icon
              > -->{{ profile.person.shortText }}</v-card-text
            ><v-card-text v-if="profile.person.email"
              ><!-- <v-icon left>mdi-email</v-icon
              > --><a
                :href="'mailto: ' + profile.person.email"
                class="link"
                target="_blank"
                >{{ profile.person.email }}</a
              ></v-card-text
            ><v-card-text v-if="profile.person.website"
              ><!-- <v-icon left>mdi-web</v-icon
              > --><a
                :href="profile.person.website"
                class="link"
                target="_blank"
                >{{ profile.person.website }}</a
              ></v-card-text
            ><v-card-text v-if="profile.person.basedIn"
              ><!-- <v-icon left>mdi-earth</v-icon
              > -->{{
                profile.person.basedIn.city
                  ? profile.person.basedIn.city + ', '
                  : ''
              }}{{ profile.person.basedIn.country }}</v-card-text
            >
            <v-card-title v-if="profile.person.services">
              <strong> Socials</strong> </v-card-title
            ><v-card-text v-if="profile.person.services">
              <v-chip
                v-for="(name, service) in profile.person.services"
                :key="service"
                class="ma-1"
                :href="goToProfileOfService(service, name)"
                target="_blank"
              >
                <v-icon left> mdi-{{ service }} </v-icon>
                {{ capitalizeFirstLetter(service) }}
              </v-chip>
            </v-card-text>
            <v-card-title
              v-if="profile.person.profession"
              style="padding-bottom: 0px"
            >
              <strong> Profession</strong>
            </v-card-title>
            <v-card-text
              v-if="profile.person.profession"
              class="align-text-left"
            >
              {{ profile.person.profession }}
            </v-card-text>
            <v-card-title v-if="profile.person.languages"
              >Languages</v-card-title
            >
            <v-card-text v-if="profile.person.languages">
              <v-chip
                v-for="language in profile.person.languages"
                :key="language.lang"
                class="ma-1"
              >
                {{ language.lang }} ({{ language.proficiency }})
              </v-chip>
            </v-card-text>
            <v-card-title v-if="profile.person.nationalities">{{
              profile.person.nationalities.length > 1
                ? 'Nationalities'
                : 'Nationality'
            }}</v-card-title>
            <v-card-text v-if="profile.person.nationalities">
              <v-chip
                v-for="nationality in profile.person.nationalities"
                :key="nationality.title"
                class="ma-1"
              >
                {{ nationality.title }}
              </v-chip>
            </v-card-text>
            <v-card-title
              v-if="profile.person.interests"
              style="padding-bottom: 0px"
            >
              <strong> Interests</strong>
            </v-card-title>
            <v-card-text v-if="profile.person.interests">
              <v-chip
                v-for="funfact in profile.person.interests"
                :key="funfact.title"
                class="ma-1"
              >
                <v-icon left> mdi-{{ funfact.icon }} </v-icon>
                {{ funfact.title }}
              </v-chip>
            </v-card-text>
          </v-card>
          <educationComponent v-if="switchEducationToLeft" :profile="profile" />
        </v-col>
        <v-col class="column column-projects">
          <v-card v-if="orderedProjects" class="card">
            <v-card-title>Projects and Jobs</v-card-title>
            <v-timeline dense class="timeline">
              <v-timeline-item
                v-for="project in orderedProjects"
                :key="project.title"
                color="grey darken-1"
              >
                <v-card class="elevation-2 pb-4" color="grey darken-3">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-card-text class="date-line"
                        ><!-- <v-icon left dense>
                          mdi-{{
                            project.timeframe.end !== 'current'
                              ? 'check-circle-outline'
                              : 'motion-play-outline'
                          }} </v-icon
                        > -->{{ formatDate(project.timeframe.start) }} -
                        {{ formatDate(project.timeframe.end) }}
                      </v-card-text>
                      <v-list-item-title class="headline mb-1 pt-5">
                        {{ project.title }}
                      </v-list-item-title>
                      <v-list-item-subtitle v-if="project.url"
                        ><a
                          :href="project.url"
                          class="project-url link"
                          target="_blank"
                          >{{ project.url }}</a
                        ></v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item-avatar
                    v-if="project.image"
                    tile
                    height="auto"
                    width="auto"
                    ><img
                      :src="
                        require(`../assets/images/profile/${profile.person.name.first.toLowerCase()}/${project.image}`)
                      "
                  /></v-list-item-avatar>
                  <v-card-text class="align-text-left pb-0">
                    <strong> Role</strong>
                  </v-card-text>
                  <v-card-text class="align-text-left pt-1 pb-1">
                    {{ project.role }}
                  </v-card-text>
                  <v-card-text class="align-text-left pb-0">
                    <strong> Description</strong>
                  </v-card-text>
                  <v-card-text class="align-text-left pt-1 pb-1">
                    {{ project.description }}
                  </v-card-text>
                  <v-card-text
                    v-if="project.highlights"
                    class="align-text-left pb-0"
                  >
                    <strong> Highlights</strong>
                  </v-card-text>
                  <v-card-text
                    v-if="project.highlights"
                    class="align-text-left pt-1 pb-1"
                  >
                    <ul>
                      <li
                        v-for="highlight in project.highlights"
                        :key="highlight"
                      >
                        {{ highlight }}
                      </li>
                    </ul>
                  </v-card-text>
                  <v-card-text
                    v-if="project.technologies"
                    class="align-text-left pb-3"
                  >
                    <strong> Technologies used</strong>
                  </v-card-text>
                  <v-card-text v-if="project.technologies" class="pt-1 pb-1">
                    <v-chip
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="ma-1"
                    >
                      {{ tech }}
                    </v-chip>
                  </v-card-text>
                  <v-card-text
                    v-if="project.subprojects"
                    class="align-text-left pb-0"
                  >
                    <strong> Subprojects</strong>
                  </v-card-text>
                  <v-card-text v-if="project.subprojects">
                    {{ project.subprojects }}
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="grey darken-1">
                <v-card class="elevation-2" color="grey darken-3">
                  <v-list-item-title class="headline mb-1 pt-5">
                    The beginning of time
                  </v-list-item-title>
                  <v-card-text>
                    If you want to see more side projects, take a look at my
                    GitHub. There's a lot more that just wasn't relevant enough
                    to list here.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
        <v-col v-if="!switchEducationToLeft" class="column">
          <educationComponent :profile="profile" />
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
import {
  proficiency, profile, project, projectType,
} from '~/types/CV';
import educationComponent from '~/components/educationComponent.vue';

const prioritizeRunning = false;
const prioritizeJobs = false;

function compareProjects(a: project, b: project) {
  // prioritize jobs over side projects
  if (prioritizeJobs) {
    if (a.type === projectType.job && b.type !== projectType.job) {
      return -1;
    }
    if (b.type === projectType.job && a.type !== projectType.job) {
      return 1;
    }
  }
  // this prioritizes still working on it over the start date.
  if (prioritizeRunning) {
    if (a.timeframe.end === 'current' && b.timeframe.end !== 'current') {
      return -1;
    }
    if (b.timeframe.end === 'current' && a.timeframe.end !== 'current') {
      return 1;
    }
  }
  return b.timeframe.start.getTime() - a.timeframe.start.getTime();
}

@Component({
  components: {
    Logo,
    VuetifyLogo,
    educationComponent,
  },
  asyncData: async ({ params, redirect }) => {
    const prof = profiles.get(params.name.toLowerCase());
    if (prof) {
      return { profile: prof };
    }
    return redirect('/');
  },
})
export default class homePage extends Vue {
  formatDate(date?: Date | 'current') {
    if (!date || date === 'current') {
      return 'Present';
    }
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
    });
  }

  profile!: profile;

  programmingProficiency = proficiency;

  get orderedProjects() {
    return this.profile.projects
      .filter(proj => proj.showInProfile)
      .sort(compareProjects);
  }

  get switchEducationToLeft() {
    return this.$vuetify.breakpoint.mdAndDown;
  }

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
@import '~/assets/shared-styles.scss';

.container {
  background-color: none;
}
.column {
  max-width: 400px;
  min-width: 350px;
  &-projects {
    max-width: 600px;
    min-width: 440px;
  }
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
  .column {
    min-width: 305px;
    padding-left: 0px;
    padding-right: 0px;
    /* &-projects {
      } */
  }
}
.short-text {
  display: flex;
  justify-content: center;
}
.date-line {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0px;
}
.timeline {
  padding-right: 2rem;
}

@media screen and (max-width: 1263px) {
  .timeline {
    padding-right: 1rem;
  }
}
.project-url {
  font-size: 12px;
  color: $grey-lighten-1;
}
</style>

<style lang="scss">
.v-timeline-item__dot {
  box-shadow: none;
}
@media screen and (max-width: 600px) {
  .v-timeline--dense .v-timeline-item__body {
    max-width: calc(100% - 56px);
  }
  .v-timeline-item__divider {
    min-width: 50px;
    justify-content: left;
  }
  .v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before {
    left: calc(25px - 1px);
  }
}
</style>
