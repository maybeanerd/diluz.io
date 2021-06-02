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
    // profession: 'Fullstack Developer, Games Engineer. CTO @ flint.gg',
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
      technologies: ['TypeScript', 'Node.js', 'Discord.js', 'MongoDB'],
      description:
        'Magibot is a Discord bot that helps voice-chat focused servers build communities. It is currently in over 2000 guilds serving 900.000+ users.',
    },
    {
      title: 'BLAPI - the BotListAPI',
      role: 'Developer and maintainer',
      url: 'https://github.com/botblock/BLAPI',
      timeframe: {
        start: new Date(2018, 7),
        end: 'current',
      },
      technologies: ['TypeScript', 'Node.js', 'Discord.js', 'NPM'],
      highlights: [
        'Open Source',
        'Actively  used npm package with more than 22k downloads',
      ],
      description:
        'BLAPI - the BotListAPI. A TypeScript package to handle automatically posting discord bot stats to all botlists.',
    },
    {
      title: 'flint.gg',
      role: 'Co-Founder and CTO',
      url: 'https://flint.gg',
      timeframe: {
        start: new Date(2019, 7),
        end: new Date(2021, 5),
      },
      technologies: [
        'TypeScript',
        'Node.js',
        'Nuxt.js',
        'Vue.js',
        'PostgreSQL',
      ],
      highlights: ['More than 3000 users', 'Built from the ground up', 'TODO'],
      description: 'TODO.',
    },
    {
      title: 'easyshare',
      role: 'Developer and maintainer',
      url: 'https://github.com/flint-gg/easyshare',
      timeframe: {
        start: new Date(2020, 5),
        end: new Date(2021, 5),
      },
      technologies: [
        'TypeScript',
        'Node.js',
        'Nuxt.js',
        'Vue.js',
        'PostgreSQL',
      ],
      highlights: [
        'More than 5000 images and videos shared',
        'Use of Twitter API and Google Photos API',
      ],
      description:
        'Getting media, such as screenshots and videos, from your Nintendo Switch or Playstation 4 to your computer, smartphone and social media is difficult. Easyshare takes care of all the difficulties and makes it easy for you.',
    },
    {
      title: 'ixy.js',
      role: 'Developer',
      url: 'https://github.com/ixy-languages/ixy.js',
      timeframe: {
        start: new Date(2018, 9),
        end: new Date(2019, 6),
      },
      technologies: ['JavaScript', 'Node.js', 'C'],
      highlights: [
        'Fully functional network driver in idiomatic JavaScript',
        'Outperformed Python with low level JavaScript',
        'Compiled modules into the Node.js engine',
      ],
      description:
        'This was my Bachelors Thesis. The JavaScript implementation of ixy. It features a state-of-the-art user-space network driver written in idiomatic JavaScript running on Node.js.',
    },
    {
      title: 'Hogwarts but better bot',
      role: 'Developer and maintainer',
      url: 'https://github.com/T0TProduction/hogwarts-but-better-bot',
      timeframe: {
        start: new Date(2020, 9),
        end: 'current',
      },
      technologies: ['TypeScript', 'Node.js', 'Discord.js', 'MySQL'],
      description:
        'A fun sideproject to build a Discord bot to reward/detract "house points" of users and keep track of them, similar to the housecup system in the Harry Potter universe.',
    },
    {
      title: 'BlessFPS',
      role: 'Developer',
      url: 'https://github.com/T0TProduction/BlessFPS',
      timeframe: {
        start: new Date(2018, 4),
        end: new Date(2018, 7),
      },
      technologies: ['Java'],
      description:
        'A small sideproject to help optimize the game settings for the videogame "Bless Online", since it had heavy optimization issues. The settings applied were collected through reddit communities and brought together to provide a one stop solution.',
    },
  ],
};

export const profiles: Map<string, profile> = new Map([
  ['sebastian', sebastian],
]);
