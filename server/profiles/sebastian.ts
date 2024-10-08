import {
  BasicSocial,
  type Profile,
  ProjectType,
  SpecialSocial,
} from '../profile.types';

export const sebastian: Profile = {
  person: {
    name: { first: 'Sebastian', last: 'Di Luzio' },
    image: 'pp.png',
    socials: [
      { type: BasicSocial.github, userName: 'maybeanerd' },
      {
        type: SpecialSocial.mastodon,
        userName: 'maybeanerd',
        instance: new URL('https://bumscode.com'),
      },
      { type: BasicSocial.linkedin, userName: 'sebastian-di-luzio' },
      { type: SpecialSocial.email, email: 'sebastian@diluz.io' },
    ],
    shortText: {
      en: 'Software Engineer, Gamer and Sideproject Enthusiast.',
      de: 'Software Entwickler, Gamer und Nebenprojekt Enthusiast.',
    },
    meta: {
      basedIn: {
        country: { en: 'Germany', de: 'Deutschland' },
        city: { en: 'Munich', de: 'München' },
      },
      pronouns: [{ en: 'he', de: 'er' }, { en: 'they' }],
      languages: ['en', 'de'],
    },
  },
  highlights: {
    title: { en: 'Favorite Tech Stack', de: 'Lieblings Tech Stack' },
    list: [
      { title: { en: 'TypeScript' } },
      { title: { en: 'Nuxt' } },
      { title: { en: 'Tailwind' } },
      { title: { en: 'Fastify' } },
      { title: { en: 'PostgreSQL' } },
      { title: { en: 'Drizzle' } },
    ],
  },
  projects: {
    orderBy: 'timeframe',
    list: [
      {
        title: { en: 'IU International University' },
        role: { en: 'Senior Software Engineer' },
        url: 'https://www.iu.org',
        image: 'iu.png',
        timeframe: {
          start: new Date(2024, 3),
          end: 'current',
        },
        technologies: [
          { en: 'TypeScript' },
          { en: 'Node.js' },
          { en: 'Nest.js' },
          { en: 'Vue.js' },
          { en: 'AWS' },
          { en: 'Docker' },
        ],
        description: {
          en: 'Building and maintaining the foundation of the platform for students.',
          de: 'Erstellen und Warten der Basis für die Plattform der Studierenden.',
        },
        highlights: [
          { en: 'Enriching the Developer Experience.', de: 'Verbesserung der Developer Experience.' },
          { en: 'Providing tooling for 9+ dev teams.', de: 'Bereitstellen von Tooling für 9+ Entwicklerteams.' },
        ],
        showInProfile: true,
        type: ProjectType.job,
      },
      {
        title: { en: 'IU International University' },
        role: { en: 'Full Stack Developer' },
        url: 'https://www.iu.org',
        image: 'iu.png',
        timeframe: {
          start: new Date(2021, 9),
          end: new Date(2024, 2, 31),
        },
        technologies: [
          { en: 'TypeScript' },
          { en: 'Node.js' },
          { en: 'Nest.js' },
          { en: 'GraphQL' },
          { en: 'Vue.js' },
          { en: 'AWS' },
          { en: 'Docker' },
        ],
        description: {
          en: 'The IU distance learning offers an extremely flexible online model, with which the students can reach their degree anywhere and anytime - including a virtual campus and online exams on demand. The study programme comprises bachelor and master courses in the fields of hospitality, tourism & event, health care, transport & logistics, IT & engineering, business & management and human resources.',
          de: 'Das IU Fernstudium bietet ein extrem flexibles Online-Modell, mit dem die Studierenden ihren Abschluss überall und jederzeit erreichen können - inklusive virtuellem Campus und Online-Prüfungen on demand. Das Studienangebot umfasst Bachelor- und Masterstudiengänge in den Bereichen Hospitality, Tourismus & Event, Gesundheit & Soziales, Transport & Logistik, IT & Technik, Wirtschaft & Management und Personal.',
        },
        highlights: [
          {
            en: 'Backend built using microservice architecture',
            de: 'Backend auf Basis von Microservice Architektur',
          },
          {
            en: 'Micro-Frontends that are used across platforms within multiple clients',
            de: 'Micro-Frontends die über Clients hinweg auf mehreren Plattformen genutzt werden',
          },
          {
            en: 'Frontend architecture and tooling to enable 8+ teams to work simultaneously on a single product',
            de: 'Frontend Architektur und Tooling um 8+ Teams gleichzeitig an einem Produkt arbeiten zu lassen',
          },
        ],
        showInProfile: true,
        type: ProjectType.job,
      },
      {
        title: { en: 'diluz.io' },
        role: {
          en: 'Author and maintainer',
          de: 'Autor und Maintainer',
        },
        timeframe: {
          start: new Date(2021, 3),
          end: 'current',
        },
        url: 'https://github.com/maybeanerd/diluz.io',
        technologies: [
          { en: 'TypeScript' },
          { en: 'Nuxt' },
          { en: 'Vue.js' },
          { en: 'Tailwind' },
        ],
        highlights: [
          { en: 'Open Source' },
          {
            en: 'Statically generated and hosted on Netlify',
            de: 'Statisch generiert und auf Netlify gehostet',
          },
        ],
        description: {
          en: 'My personal website as well as a collection of overviews of various other Di Luzios.',
          de: 'Meine persönliche Website sowie eine Sammlung von Überbicken verschiedener anderer Di Luzios.',
        },
        showInProfile: false,
        type: ProjectType.sideproject,
      },
      {
        title: { en: 'Magibot' },
        role: {
          en: 'Author and maintainer',
          de: 'Autor und Maintainer',
        },
        url: 'https://bots.ondiscord.xyz/bots/384820232583249921',
        image: 'magibot.png',
        timeframe: {
          start: new Date(2017, 6),
          end: 'current',
        },
        technologies: [
          { en: 'TypeScript' },
          { en: 'Node.js' },
          { en: 'Discord.js' },
          { en: 'MongoDB' },
        ],
        description: {
          en: 'Magibot is a Discord bot that helps voice-chat focused servers build communities. It is currently serving 1.000.000+ users in over 2500 guilds.',
          de: 'Magibot ist ein Discord Bot, der sprachchat-fokussierten Servern hilft, Communities aufzubauen. Er bedient derzeit 1.000.000+ Benutzer in über 2500 Gilden.',
        },
        showInProfile: true,
        type: ProjectType.sideproject,
      },
      {
        title: { en: 'BLAPI - the BotListAPI' },
        role: {
          en: 'Author and maintainer',
          de: 'Autor und Maintainer',
        },
        url: 'https://github.com/botblock/BLAPI',
        image: 'botblock.png',
        timeframe: {
          start: new Date(2018, 7),
          end: 'current',
        },
        technologies: [
          { en: 'TypeScript' },
          { en: 'Node.js' },
          { en: 'Discord.js' },
          { en: 'NPM' },
        ],
        highlights: [
          { en: 'Open Source' },
          {
            en: 'Actively  used npm package with more than 22k downloads',
            de: 'Aktiv genutztes npm package mit mehr als 22k Downloads',
          },
        ],
        description: {
          en: 'BLAPI - the BotListAPI. A TypeScript package to automatically post Discord bot stats to all botlists.',
          de: 'BLAPI - the BotListAPI. Ein TypeScript package um automatisch Discord Bot Statistiken an alle Botlisten zu posten.',
        },
        showInProfile: true,
        type: ProjectType.sideproject,
      },
      {
        title: { en: 'flint.gg' },
        role: {
          en: 'Co-Founder and CTO',
          de: 'Mitgründer und CTO',
        },
        url: 'https://flint.gg',
        image: 'flint.png',
        timeframe: {
          start: new Date(2019, 7),
          end: new Date(2021, 6),
        },
        technologies: [
          { en: 'TypeScript' },
          { en: 'Node.js' },
          { en: 'Nuxt' },
          { en: 'Vue.js' },
          { en: 'PostgreSQL' },
          { en: 'AWS' },
        ],
        highlights: [
          {
            en: '50k+ users sign-ups.',
            de: '50k+ Nutzeranmeldungen.',
          },
          {
            en: 'Dev-Lead for teams of up to 5',
            de: 'Dev-Lead für Teams von bis zu 5',
          },
          {
            en: 'Implemented multiple Game-APIs',
            de: 'Implementierung mehrerer Game-APIs',
          },
          {
            en: 'Built core systems like auth, chat, matching, etc.',
            de: 'Aufbau von Kernsystemen wie Auth, Chat, Matching, etc.',
          },
          {
            en: 'Collected 180.000€ in funding',
            de: '180.000€ an Finanzierung gesammelt',
          },
        ],
        description: {
          en: "flint.gg is the home of every gamers identity. It's a social network that connects gamers across all games and platforms by enabling them to easily represent themselves. This is accomplished with so-called Gamecards, which include favourite loadouts, outfits and items, as well as statistics directly pulled from the game.",
          de: 'flint.gg ist die Heimat der Identität eines jeden Gamers. Es ist ein soziales Netzwerk, das Gamer über alle Spiele und Plattformen hinweg verbindet, indem es ihnen ermöglicht, sich einfach selbst darzustellen. Dies wird mit sogenannten Gamecards erreicht, die Lieblingsausrüstungen, Outfits und Gegenstände sowie Statistiken enthalten, die direkt aus dem Spiel gezogen werden.',
        },
        showInProfile: true,
        type: ProjectType.job,
      },
      {
        title: { en: 'easyshare' },
        role: {
          en: 'Author and maintainer',
          de: 'Autor und Maintainer',
        },
        url: 'https://github.com/flint-gg/easyshare',
        image: 'easyshare.png',
        timeframe: {
          start: new Date(2020, 5),
          end: new Date(2021, 6),
        },
        technologies: [
          { en: 'TypeScript' },
          { en: 'Node.js' },
          { en: 'Nuxt' },
          { en: 'Vue.js' },
          { en: 'PostgreSQL' },
          { en: 'AWS' },
        ],
        highlights: [
          {
            en: 'More than 5000 images and videos shared',
            de: 'Mehr als 5000 Bilder und Videos geteilt',
          },
          {
            en: 'Use of Twitter API and Google Photos API',
            de: 'Nutzung der Twitter API und Google Photos API',
          },
        ],
        description: {
          en: 'Getting media, such as screenshots and videos, from your Nintendo Switch or Playstation 4 to your computer, smartphone and social media is difficult. Easyshare takes care of all the difficulties and makes it easy for you.',
          de: 'Medien wie Screenshots und Videos von deiner Nintendo Switch oder Playstation 4 auf deinen Computer, Smartphone und Social-Media-Kanäle zu bekommen, ist schwierig. Easyshare kümmert sich um alle Schwierigkeiten und macht es dir leicht.',
        },
        showInProfile: true,
        type: ProjectType.job,
      },
      {
        title: { en: 'ixy.js' },
        role: {
          en: 'Author',
          de: 'Autor',
        },
        url: 'https://github.com/ixy-languages/ixy.js',
        image: 'ixy_js_logo.png',
        timeframe: {
          start: new Date(2018, 9),
          end: new Date(2019, 6),
        },
        technologies: [
          { en: 'JavaScript' },
          { en: 'Node.js' },
          { en: 'Node-API' },
          { en: 'C' },
        ],
        highlights: [
          {
            en: 'Fully functional network driver in idiomatic JavaScript',
            de: 'Voll funktionsfähiger Netzwerktreiber in idiomatischem JavaScript',
          },
          {
            en: 'Outperformed Python with low level JavaScript',
            de: 'Mit Low-Level-JavaScript Python übertroffen',
          },
          {
            en: 'Compiled modules into the Node.js engine',
            de: 'Module in die Node.js-Engine kompiliert',
          },
        ],
        description: {
          en: 'This was part of my Bachelors Thesis: the JavaScript implementation of ixy. It features a state-of-the-art user-space network driver written in idiomatic JavaScript running on Node.js.',
          de: 'Dies war Teil meiner Bachelorarbeit: die JavaScript-Implementierung von ixy. Sie beinhaltet einen modernen Netzwerktreiber im User-Space, der in idiomatischem JavaScript auf Node.js ausgeführt wird.',
        },
        showInProfile: true,
        type: ProjectType.sideproject,
      },
      {
        title: { en: 'Hogwarts but better bot' },
        role: {
          en: 'Author and maintainer',
          de: 'Autor und Maintainer',
        },
        url: 'https://github.com/maybeanerd/hogwarts-but-better-bot',
        timeframe: {
          start: new Date(2020, 9),
          end: 'current',
        },
        technologies: [
          { en: 'TypeScript' },
          { en: 'Node.js' },
          { en: 'Discord.js' },
          { en: 'MySQL' },
        ],
        description: {
          en: 'A Discord bot to reward/detract "house points" of users and keep track of them, similar to the housecup system in the Harry Potter universe.',
          de: 'Ein Discord Bot, um "Hauspunkte" an Nutzer zu geben/abzuziehen und sie zu tracken, ähnlich dem Hauspokal-System im Harry Potter-Universum.',
        },

        showInProfile: false,
        type: ProjectType.sideproject,
      },
      {
        title: { en: 'BlessFPS' },
        role: {
          en: 'Author',
          de: 'Autor',
        },
        url: 'https://github.com/maybeanerd/BlessFPS',
        timeframe: {
          start: new Date(2018, 4),
          end: new Date(2018, 7),
        },
        technologies: [{ en: 'Java' }],
        description: {
          en: 'A small side project to help optimize the game settings for the videogame "Bless Online", which had heavy optimization issues. The applied settings were collected through reddit communities and brought together to provide a one-stop solution.',
          de: 'Ein kleines Nebenprojekt, um die Spieleinstellungen für das Videospiel "Bless Online" zu optimieren, das starke Optimierungsprobleme hatte. Die angewendeten Einstellungen wurden durch Reddit-Communities gesammelt und zusammengeführt, um eine Lösung aus einer Hand zu bieten.',
        },
        showInProfile: false,
        type: ProjectType.sideproject,
      },
    ],
  },
};
