import {
  BasicSocial,
  Profile,
  ProjectType,
  SpecialSocial,
} from '../profile.types';

export const sebastian: Profile = {
  person: {
    name: { first: 'Sebastian', last: 'Di Luzio' },
    image: { isURL: false, path: 'pp.png' },
    socials: [
      { type: BasicSocial.github, userName: 't0tproduction' },
      { type: SpecialSocial.mastodon, userName: 'maybeanerd', instance: new URL('https://bumscode.com') },
      { type: BasicSocial.linkedin, userName: 'sebastian-di-luzio' },
      { type: SpecialSocial.email, email: 'sebastian@diluz.io' },
    ],
    shortText: 'Full Stack Developer, Gamer and TypeScript enthusiast.',
    basedIn: { country: 'Germany', city: 'Munich' },
  },
  favoriteTech: [
    { title: 'TypeScript' },
    { title: 'Vue.js' },
    { title: 'TailwindCSS' },
    { title: 'Node.js' },
    { title: 'Nest.js' },
    { title: 'PostgreSQL' },
    { title: 'MongoDB' },
    { title: 'AWS' },
    { title: 'Docker' },
  ],
  projects: {
    list: [
      {
        title: 'IU International University',
        role: 'Full Stack Developer',
        url: 'https://www.iu.org',
        image: 'iu.png',
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
          'Docker',
        ],
        highlights: [
          'Backend built using microservice architecture',
          'Micro-Frontends that are used across platforms within multiple clients',
        ],
        description:
          'The IU distance learning offers an extremely flexible online model, with which the students can reach their degree anywhere and anytime - including a virtual campus and online exams on demand. The study programme comprises bachelor and master courses in the fields of hospitality, tourism & event, health care, transport & logistics, IT & engineering, business & management and human resources.',
        showInProfile: true,
        type: ProjectType.job,
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
        highlights: [
          'Open Source',
          'Statically generated and hosted on Netlify',
        ],
        description:
          'My personal website as well as a collection of CVs of various other Di Luzios.',
        showInProfile: false,
        type: ProjectType.sideproject,
      },
      {
        title: 'Magibot',
        role: 'Creator and maintainer',
        url: 'https://bots.ondiscord.xyz/bots/384820232583249921',
        image: 'magibot.png',
        timeframe: {
          start: new Date(2017, 6),
          end: 'current',
        },
        technologies: ['TypeScript', 'Node.js', 'Discord.js', 'MongoDB'],
        description:
          'Magibot is a Discord bot that helps voice-chat focused servers build communities. It is currently serving 900.000+ users in over 2000 guilds.',
        showInProfile: true,
        type: ProjectType.sideproject,
      },
      {
        title: 'BLAPI - the BotListAPI',
        role: 'Creator and maintainer',
        url: 'https://github.com/botblock/BLAPI',
        image: 'botblock.png',
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
        type: ProjectType.sideproject,
      },
      {
        title: 'flint.gg',
        role: 'Co-Founder and CTO',
        url: 'https://flint.gg',
        image: 'flint.png',
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
        type: ProjectType.job,
      },
      {
        title: 'easyshare',
        role: 'Creator and maintainer',
        url: 'https://github.com/flint-gg/easyshare',
        image: 'easyshare.png',
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
        type: ProjectType.job,
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
        type: ProjectType.sideproject,
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
        type: ProjectType.sideproject,
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
        type: ProjectType.sideproject,
      },
    ],
    final: {
      title: 'The beginning of time',
      text: "If you want to see more side projects, take a look at my GitHub. There's a lot more that just wasn't relevant enough to list here.",
    },
  },
};
