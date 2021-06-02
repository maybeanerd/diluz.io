<template>
  <v-card class="card">
    <v-card-title v-if="profile.skills.education">Education</v-card-title>
    <div
      v-for="skill in profile.skills.education"
      :key="skill.title"
      class="education-row ma-1"
    >
      <v-icon right>mdi-{{ skill.type }}</v-icon>
      <section>
        <v-card-text
          class="education-date align-text-left greyed-out-text pt-0 pb-0 mt-1"
        >
          {{ formatDate(skill.date) }}
        </v-card-text>
        <v-card-text class="education-title align-text-left pt-0 pb-0">
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
    <v-card-title v-if="profile.skills.certificates">Certificates</v-card-title>
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
        v-if="strongProgrammingLangs && strongProgrammingLangs.length > 0"
      >
        <p class="align-text-left pt-1 pb-0 mb-0">Strong</p>
        <v-chip
          v-for="language in strongProgrammingLangs"
          :key="language.title"
          class="tech-skill ma-1"
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
          class="tech-skill ma-1"
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
</template>

<script lang="ts">
import { Component, Prop } from 'nuxt-property-decorator';
import Vue from 'vue';
import { proficiency, profile } from '~/types/CV';

@Component({})
export default class ImageDvDMove extends Vue {
  @Prop({ required: true })
  profile!: profile;

  formatDate(date?: Date | 'current') {
    if (!date || date === 'current') {
      return 'Present';
    }
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
    });
  }

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
}
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';
@import '~/assets/shared-styles.scss';

.education-date {
  font-size: 12px;
}
.education-title {
  font-size: 18px;
}
.tech-skill {
  min-width: 45px;
}
</style>
