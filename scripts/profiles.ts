// This file handles all profiles that the website hosts

/* TODO later on i want to build an editor for others to fill in their data,
 *  which exports them a correct json
 */

const sebastian: profile = {
  person: {
    name: { first: 'Sebastian', last: 'Di Luzio' },
    profession: 'Fullstack Developer, Games Engineer.',
    // image: '',
    services: {
      linkedin: 'sebastian-di-luzio-357185171',
      // change to https://www.linkedin.com/in/sebastian-di-luzio-357185171/ in FE
      github: 'totproduction', // change to URL in FE
    },
    // image
  },
  skills: {
    languages: [
      { lang: 'German', skilllevel: 1 },
      { lang: 'English', skilllevel: 1 },
    ],
    programminglangs: [
      { lang: 'TypeScript', skilllevel: 1 },
      { lang: 'JavaScript', skilllevel: 1 },
      { lang: 'Java', skilllevel: 0.6 },
      { lang: 'SQL', skilllevel: 0.8 },
      { lang: 'MongoDB', skilllevel: 0.6 },
      { lang: 'C', skilllevel: 0.6 },
      { lang: 'C#', skilllevel: 0.5 },
      { lang: 'C++', skilllevel: 0.6 },
    ],
    misc: [{ title: 'Monster Hunting', skilllevel: 1 }],
  },
  hobbies: [{ title: 'Gaming', icon: 'gamepad-square' }],
  projects: [
    {
      title: 'diluz.io',
      role: 'Developer and maintainer',
      timeframe: {
        start: new Date(2021, 4),
        end: 'current',
      },
      url: 'https://diluz.io',
      description:
        'My personal website as well as a collection of CVs for all Di Luzios.',
    },
    {
      title: 'Magibot',
      role: 'Developer and maintainer',
      timeframe: {
        start: new Date(2017, 7),
        end: 'current',
      },
      description:
        'Magibot is a Discord bot that helps voice-chat focused servers build communities. It is currently in over 1200 guilds serving 350.000+ users.',
    },
  ],
};

export const profiles: Map<string, profile> = new Map([
  ['sebastian', sebastian],
]);
