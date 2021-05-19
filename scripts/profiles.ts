// This file handles all profiles that the website hosts

import {
  educationTypes,
  languageProficiency,
  proficiency,
  profile,
} from '~/types/CV';

/* TODO later on i want to build an editor for others to fill in their data,
 *  which exports them a correct json
 */

const sebastian: profile = {
  person: {
    name: { first: 'Sebastian', last: 'Di Luzio' },
    profession: 'Fullstack Developer, Games Engineer. CTO @ flint.gg',
    image:
      'https://s.gravatar.com/avatar/4e5bc2d2836035b465f1552e6b1fdeb8?s=128',
    services: {
      linkedin: 'sebastian-di-luzio-357185171',
      github: 't0tproduction',
    },
    email: 'sebastian@diluz.io',
    // we are already on this page
    /* website: 'https://diluz.io', */
    shortText:
      "Im the creator of this website. If you're a Di Luzio yourself, reach out and we can set up your own page here as well!",
    // i dont want this to be in my professional CV
    /* interests: [
      { title: 'Gaming', icon: 'gamepad-square' },
      { title: 'Monster Hunting', icon: 'sword-cross' },
      { title: 'Fullstack Development', icon: 'code-braces' },
    ], */
    languages: [
      { lang: 'German', proficiency: languageProficiency.native },
      { lang: 'English', proficiency: languageProficiency.native },
    ],
    nationalities: [{ title: 'German' }, { title: 'US-American' }],
    basedIn: { country: 'Germany', city: 'Munich' },
  },
  skills: {
    technical: [
      { title: 'TypeScript', proficiency: proficiency.strong },
      { title: 'JavaScript', proficiency: proficiency.strong },
      { title: 'Java', proficiency: proficiency.knowledgeable },
      { title: 'SQL', proficiency: proficiency.strong },
      { title: 'MongoDB', proficiency: proficiency.knowledgeable },
      { title: 'C', proficiency: proficiency.knowledgeable },
      { title: 'C#', proficiency: proficiency.knowledgeable },
      { title: 'C++', proficiency: proficiency.knowledgeable },
      { title: 'Unity', proficiency: proficiency.knowledgeable },
      { title: 'Unreal', proficiency: proficiency.knowledgeable },
    ],
    education: [
      {
        title: 'Bachelor of Science: Games Engineering',
        type: educationTypes.university,
        source: 'Technical University Munich',
        date: new Date(2019, 7),
        link: 'https://tum.de',
      },
      {
        title: 'High School Degree',
        type: educationTypes.school,
        source: 'Ignaz Taschner Gymnasium Dachau',
        date: new Date(2015, 4),
        link: 'https://itg.bayern/startseite.html',
      },
    ],
    // certificates: [{ title: 'Official Basti', link: 'https:google.com/basti' }],
    misc: [
      { title: 'Adobe After Effects' },
      { title: 'Adobe Premiere Pro' },
      { title: 'Community Management' },
    ],
  },
  projects: [
    {
      title: 'diluz.io',
      role: 'Developer and maintainer',
      timeframe: {
        start: new Date(2021, 3),
        end: 'current',
      },
      url: 'https://github.com/T0TProduction/diluz.io',
      technologies: ['TypeScript', 'Nuxt.js', 'Vue.js', 'SCSS'],
      highlights: ['Open Source', 'Statically generated and hosted on Netlify'],
      description:
        'My personal website as well as a collection of CVs for all Di Luzios.',
    },
    {
      title: 'Magibot',
      role: 'Developer and maintainer',
      url: 'https://bots.ondiscord.xyz/bots/384820232583249921',
      timeframe: {
        start: new Date(2017, 6),
        end: 'current',
      },
      technologies: ['TypeScript', 'Node.js', 'Discord API', 'MongoDB'],

      description:
        'Magibot is a Discord bot that helps voice-chat focused servers build communities. It is currently in over 1200 guilds serving 350.000+ users.',
    },
  ],
};

export const profiles: Map<string, profile> = new Map([
  ['sebastian', sebastian],
]);
