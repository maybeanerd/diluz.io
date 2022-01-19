// This file handles all profiles that the website hosts

import {
  educationTypes,
  languageProficiency,
  proficiency,
  profile,
  projectType,
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
      linkedin: 'sebastian-di-luzio',
      github: 't0tproduction',
    },
    email: 'sebastian@diluz.io',
    // we are already on this page
    /* website: 'https://diluz.io', */
    shortText:
      "I'm the creator of this website. If you're a Di Luzio yourself, reach out and we can set up your own page here as well!",
    // i dont want this to be in my professional CV
    /* interests: [
      { title: 'Gaming', icon: 'gamepad-square' },
      { title: 'Monster Hunting', icon: 'sword-cross' },
      { title: 'Fullstack Development', icon: 'code-braces' },
    ], */
    languages: [
      { lang: 'German', proficiency: languageProficiency.native },
      { lang: 'English', proficiency: languageProficiency.C1 },
    ],
    nationalities: [{ title: 'German' }, { title: 'US-American' }],
    basedIn: { country: 'Germany', city: 'Munich' },
  },
  skills: {
    technical: [
      { title: 'TypeScript', proficiency: proficiency.strong },
      { title: 'JavaScript', proficiency: proficiency.strong },
      { title: 'Java', proficiency: proficiency.knowledgeable },
      { title: 'HTML', proficiency: proficiency.knowledgeable },
      { title: 'SCSS', proficiency: proficiency.knowledgeable },
      { title: 'Node.js', proficiency: proficiency.strong },
      { title: 'Nuxt.js', proficiency: proficiency.strong },
      { title: 'Vue.js', proficiency: proficiency.strong },
      { title: 'PostgreSQL', proficiency: proficiency.strong },
      { title: 'SQL', proficiency: proficiency.knowledgeable },
      { title: 'MongoDB', proficiency: proficiency.knowledgeable },
      { title: 'C', proficiency: proficiency.knowledgeable },
      { title: 'C#', proficiency: proficiency.knowledgeable },
      { title: 'C++', proficiency: proficiency.knowledgeable },
      { title: 'Unity', proficiency: proficiency.knowledgeable },
      { title: 'Unreal', proficiency: proficiency.knowledgeable },
      { title: 'AWS', proficiency: proficiency.knowledgeable },
    ],
    education: [
      {
        title: 'Bachelor of Science: Games Engineering',
        type: educationTypes.university,
        source: 'Technical University of Munich ',
        date: new Date(2019, 7),
        link: 'https://tum.de',
      },
      {
        title: 'High School Degree',
        type: educationTypes.school,
        source: 'Ignaz-Taschner-Gymnasium Dachau',
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
      title: 'IU International University',
      role: 'Full Stack Developer',
      url: 'https://www.iu.org',
      timeframe: {
        start: new Date(2021, 9),
        end: 'current',
      },
      technologies: [
        'TypeScript',
        'Node.js',
        'Nest.js',
        'GraphQL',
        'Vue.js',
        'AWS',
      ],
      /* highlights: [
        'something',
      ], */
      description:
        'The IU distance learning offers an extremely flexible online model, with which the students can reach their degree anywhere and anytime - including a virtual campus and online exams on demand. The study programme comprises bachelor and master courses in the fields of hospitality, tourism & event, health care, transport & logistics, IT & engineering, business & management and human resources.',
      showInProfile: true,
      type: projectType.job,
    },
    {
      title: 'diluz.io',
      role: 'Creator and maintainer',
      timeframe: {
        start: new Date(2021, 3),
        end: 'current',
      },
      url: 'https://github.com/T0TProduction/diluz.io',
      technologies: ['TypeScript', 'Nuxt.js', 'Vue.js', 'SCSS'],
      highlights: ['Open Source', 'Statically generated and hosted on Netlify'],
      description:
        'My personal website as well as a collection of CVs of various other Di Luzios.',
      showInProfile: false,
      type: projectType.sideproject,
    },
    {
      title: 'Magibot',
      role: 'Creator and maintainer',
      url: 'https://bots.ondiscord.xyz/bots/384820232583249921',
      timeframe: {
        start: new Date(2017, 6),
        end: 'current',
      },
      technologies: ['TypeScript', 'Node.js', 'Discord.js', 'MongoDB'],
      description:
        'Magibot is a Discord bot that helps voice-chat focused servers build communities. It is currently serving 900.000+ users in over 2000 guilds.',
      showInProfile: true,
      type: projectType.sideproject,
    },
    {
      title: 'BLAPI - the BotListAPI',
      role: 'Creator and maintainer',
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
        'BLAPI - the BotListAPI. A TypeScript package to automatically post Discord bot stats to all botlists.',
      showInProfile: true,
      type: projectType.sideproject,
    },
    {
      title: 'flint.gg',
      role: 'Co-Founder and CTO',
      url: 'https://flint.gg',
      timeframe: {
        start: new Date(2019, 7),
        end: new Date(2021, 6),
      },
      technologies: [
        'TypeScript',
        'Node.js',
        'Nuxt.js',
        'Vue.js',
        'PostgreSQL',
        'AWS',
      ],
      highlights: [
        'Thousands of active users',
        'Dev-Lead for teams of up to 5',
        'Implemented multiple Game-APIs',
        'Built core systems like auth, chat, matching, etc.',
        'Collected 180.000€ in funding',
      ],
      description:
        "flint.gg is the home of every gamers identity. It's a social network that connects gamers across all games and platforms by enabling them to easily represent themselves. This is accomplished with so-called Gamecards, which include favourite loadouts, outfits and items, as well as statistics directly pulled from the game.",
      showInProfile: true,
      type: projectType.job,
    },
    {
      title: 'easyshare',
      role: 'Creator and maintainer',
      url: 'https://github.com/flint-gg/easyshare',
      timeframe: {
        start: new Date(2020, 5),
        end: new Date(2021, 6),
      },
      technologies: [
        'TypeScript',
        'Node.js',
        'Nuxt.js',
        'Vue.js',
        'PostgreSQL',
        'AWS',
      ],
      highlights: [
        'More than 5000 images and videos shared',
        'Use of Twitter API and Google Photos API',
      ],
      description:
        'Getting media, such as screenshots and videos, from your Nintendo Switch or Playstation 4 to your computer, smartphone and social media is difficult. Easyshare takes care of all the difficulties and makes it easy for you.',
      showInProfile: true,
      type: projectType.job,
    },
    {
      title: 'ixy.js',
      role: 'Creator',
      url: 'https://github.com/ixy-languages/ixy.js',
      timeframe: {
        start: new Date(2018, 9),
        end: new Date(2019, 6),
      },
      technologies: ['JavaScript', 'Node.js', 'Node-API', 'C'],
      highlights: [
        'Fully functional network driver in idiomatic JavaScript',
        'Outperformed Python with low level JavaScript',
        'Compiled modules into the Node.js engine',
      ],
      description:
        'This was part of my Bachelors Thesis: the JavaScript implementation of ixy. It features a state-of-the-art user-space network driver written in idiomatic JavaScript running on Node.js.',
      showInProfile: true,
      type: projectType.sideproject,
    },
    {
      title: 'Hogwarts but better bot',
      role: 'Creator and maintainer',
      url: 'https://github.com/T0TProduction/hogwarts-but-better-bot',
      timeframe: {
        start: new Date(2020, 9),
        end: 'current',
      },
      technologies: ['TypeScript', 'Node.js', 'Discord.js', 'MySQL'],
      description:
        'A Discord bot to reward/detract "house points" of users and keep track of them, similar to the housecup system in the Harry Potter universe.',

      showInProfile: false,
      type: projectType.sideproject,
    },
    {
      title: 'BlessFPS',
      role: 'Creator',
      url: 'https://github.com/T0TProduction/BlessFPS',
      timeframe: {
        start: new Date(2018, 4),
        end: new Date(2018, 7),
      },
      technologies: ['Java'],
      description:
        'A small side project to help optimize the game settings for the videogame "Bless Online", which had heavy optimization issues. The applied settings were collected through reddit communities and brought together to provide a one-stop solution.',
      showInProfile: false,
      type: projectType.sideproject,
    },
  ],
};

const marc: profile = {
  person: {
    name: { first: 'Marc', last: 'Di Luzio' },
    image:
      'https://en.gravatar.com/userimage/14518944/fd1fcbeb85db4e616f521525a5ec0a10.png',
    services: {
      linkedin: 'marcdiluzio',
      github: 'mdiluz',
    },
    email: 'marc@diluz.io',
    // Fill this in
    // shortText: "Lorem Ipsum",
    languages: [
      { lang: 'English', proficiency: languageProficiency.native },
    ],
    nationalities: [{ title: 'British' }, { title: 'US-American' }],
    basedIn: { country: 'England', city: 'London' },
  },
  skills: {
    technical: [
      { title: 'C#', proficiency: proficiency.strong },
      { title: 'C++', proficiency: proficiency.strong },
      { title: 'C', proficiency: proficiency.strong },
      { title: 'Linux', proficiency: proficiency.strong },
      { title: 'Python', proficiency: proficiency.strong },
      { title: 'Bash', proficiency: proficiency.strong },
      { title: 'Unity', proficiency: proficiency.strong },
      { title: 'Docker', proficiency: proficiency.strong },

      { title: 'ASP.Net', proficiency: proficiency.knowledgeable },
      { title: 'Golang', proficiency: proficiency.knowledgeable },
      { title: 'SQL', proficiency: proficiency.knowledgeable },
      { title: 'K8s', proficiency: proficiency.knowledgeable },
      { title: 'OpenGL', proficiency: proficiency.knowledgeable },
      { title: 'Vulkan', proficiency: proficiency.knowledgeable },
      { title: 'Perl', proficiency: proficiency.knowledgeable },
    ],
    education: [
      {
        title: 'MSc, Video Game Development',
        type: educationTypes.university,
        source: 'Birmingham City University (Sony Scholarship)',
        date: new Date(2013, 7),
      },
      {
        title: 'Ba, Computer Visualisation and Animation',
        type: educationTypes.university,
        source: 'Bournemouth University',
        date: new Date(2012, 7),
      },
    ],
  },
  projects: [
    // TODO
  ],
};

export const profiles: Map<string, profile> = new Map([
  ['sebastian', sebastian],
  ['marc', marc]
]);
