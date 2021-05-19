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
              ><v-icon left>mdi-comment</v-icon
              >{{ profile.person.shortText }}</v-card-text
            ><v-card-text v-if="profile.person.email"
              ><v-icon left>mdi-email</v-icon
              ><a
                :href="'mailto: ' + profile.person.email"
                class="link"
                target="_blank"
                >{{ profile.person.email }}</a
              ></v-card-text
            ><v-card-text v-if="profile.person.website"
              ><v-icon left>mdi-web</v-icon
              ><a :href="profile.person.website" class="link" target="_blank">{{
                profile.person.website
              }}</a></v-card-text
            ><v-card-text v-if="profile.person.basedIn"
              ><v-icon left>mdi-earth</v-icon
              >{{
                profile.person.basedIn.city
                  ? profile.person.basedIn.city + ', '
                  : ''
              }}{{ profile.person.basedIn.country }}</v-card-text
            >
            <v-card-title
              v-if="profile.person.services"
              style="padding-bottom: 0px"
            >
              <strong> Socials:</strong> </v-card-title
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
              v-if="profile.person.services"
              style="padding-bottom: 0px"
            >
              <strong> Profession:</strong>
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
                {{ language.lang }} [{{ language.proficiency }}]
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
              <strong> Interests:</strong>
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
        </v-col>
        <v-col class="column column-projects">
          <v-card v-if="orderedProjects" class="card">
            <v-card-title>Projects and Jobs</v-card-title>
            <v-timeline dense style="padding-right: 2rem">
              <v-timeline-item
                v-for="project in orderedProjects"
                :key="project.title"
                color="grey darken-1"
              >
                <v-card class="elevation-2" color="grey darken-3">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-card-text class="date-spread">
                        <div class="ma-1">
                          <v-icon left> mdi-calendar-start </v-icon
                          >{{ formatDate(project.timeframe.start) }}
                        </div>
                        <div class="ma-1">
                          <v-icon left> mdi-calendar-end </v-icon
                          >{{ formatDate(project.timeframe.end) }}
                        </div>
                      </v-card-text>
                      <v-list-item-title class="headline mb-1">
                        {{ project.title }}
                      </v-list-item-title>
                      <v-list-item-subtitle v-if="project.url"
                        ><a :href="project.url" class="link" target="_blank">{{
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
                    ><img :src="project.image"
                  /></v-list-item-avatar>
                  <v-card-text class="align-text-left pb-0">
                    <strong> Role:</strong>
                  </v-card-text>
                  <v-card-text class="align-text-left pt-1 pb-1">
                    {{ project.role }}
                  </v-card-text>
                  <v-card-text class="align-text-left pb-0">
                    <strong> Description:</strong>
                  </v-card-text>
                  <v-card-text class="align-text-left pt-1 pb-1">
                    {{ project.description }}
                  </v-card-text>
                  <v-card-text
                    v-if="project.highlights"
                    class="align-text-left pb-0"
                  >
                    <strong> Highlights:</strong>
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
                    class="align-text-left pb-0"
                  >
                    <strong> Technologies used:</strong>
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
                    <strong> Subprojects:</strong>
                  </v-card-text>
                  <v-card-text v-if="project.subprojects">
                    {{ project.subprojects }}
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="grey darken-1">
                <v-card class="elevation-2" color="grey darken-3">
                  <v-card-text> The beginning of time</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
        <v-col class="column">
          <v-card class="card">
            <v-card-title v-if="profile.skills.education"
              >Education</v-card-title
            >
            <div
              v-for="skill in profile.skills.education"
              :key="skill.title"
              class="education-row ma-1"
            >
              <v-icon right>mdi-{{ skill.type }}</v-icon>
              <section>
                <v-card-text
                  class="align-text-left greyed-out-text pt-0 pb-0 mt-1"
                >
                  {{ formatDate(skill.date) }}
                </v-card-text>
                <v-card-text class="align-text-left pt-0 pb-0">
                  {{ skill.title }}
                </v-card-text>
                <v-card-text class="align-text-left pt-0 pb-0 mb-1">
                  <a
                    :href="skill.link || ''"
                    target="_blank"
                    class="education-link greyed-out-text"
                  >
                    at {{ skill.source }}</a
                  >
                </v-card-text>
              </section>
            </div>
            <v-card-title v-if="profile.skills.certificates"
              >Certificates</v-card-title
            >
            <v-card-text v-if="profile.skills.certificates">
              <v-chip
                v-for="skill in profile.skills.certificates"
                :key="skill.title"
                class="ma-1"
                :href="skill.link || ''"
                target="_blank"
              >
                {{ skill.title }}
              </v-chip>
            </v-card-text>
            <v-card-title v-if="profile.skills.technical"
              >Technical Skills
            </v-card-title>
            <v-card-text v-if="profile.skills.technical">
              <section
                v-if="
                  strongProgrammingLangs && strongProgrammingLangs.length > 0
                "
              >
                <p class="align-text-left pt-1 pb-0 mb-0">Strong</p>
                <v-chip
                  v-for="language in strongProgrammingLangs"
                  :key="language.title"
                  class="ma-1"
                >
                  {{ language.title }}
                </v-chip>
              </section>
              <section
                v-if="
                  knowledgeableProgrammingLangs &&
                  knowledgeableProgrammingLangs.length > 0
                "
              >
                <p class="align-text-left pt-1 pb-0 mb-0">Knowledgeable</p>
                <v-chip
                  v-for="language in knowledgeableProgrammingLangs"
                  :key="language.title"
                  class="ma-1"
                >
                  {{ language.title }}
                </v-chip>
              </section>
            </v-card-text>
            <v-card-title v-if="profile.skills.misc">Misc. Skills</v-card-title>
            <v-card-text v-if="profile.skills.misc">
              <v-chip
                v-for="skill in profile.skills.misc"
                :key="skill.title"
                class="ma-1"
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
import { proficiency, profile, project } from '~/types/CV';

function compareProjects(a: project, b: project) {
  // this prioritizes still working on it over the start date.
  if (a.timeframe.end === 'current' && b.timeframe.end === 'current') {
    return b.timeframe.start.getTime() - a.timeframe.start.getTime();
  }
  if (a.timeframe.end === 'current') {
    return -1;
  }
  if (b.timeframe.end === 'current') {
    return 1;
  }
  return b.timeframe.start.getTime() - a.timeframe.start.getTime();
}

@Component({
  components: {
    Logo,
    VuetifyLogo,
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

  get strongProgrammingLangs() {
    return this.profile.skills.technical?.filter(
      l => l.proficiency === proficiency.strong,
    );
  }

  get knowledgeableProgrammingLangs() {
    return this.profile.skills.technical?.filter(
      l => l.proficiency === proficiency.knowledgeable,
    );
  }

  get orderedProjects() {
    return this.profile.projects.sort(compareProjects);
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

.container {
  background-color: none;
}
.column {
  max-width: 400px;
  min-width: 350px;
  &-projects {
    max-width: 600px;
  }
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
  .column {
    min-width: 305px;
  }
}

.align-text-left {
  text-align: left;
}

.short-text {
  display: flex;
  justify-content: center;
}
.education-row {
  display: flex;
  justify-content: left;
}
.education-link {
  text-decoration: none;
}

.date-spread {
  display: flex;
  justify-content: space-between;
  padding: 0px;
}

.greyed-out-text {
  //color: $grey-darken-1;
  color: $grey-lighten-1;
}

.link {
  max-width: 150px;
  text-overflow: ellipsis;
  color: white;
  overflow: hidden;
  white-space: nowrap;
}
</style>
