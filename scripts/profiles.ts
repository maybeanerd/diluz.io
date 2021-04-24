// This file handles all profiles that the website hosts


/* TODO later on i want to build an editor for others to fill in their data,
*  which exports them a correct json
*/

export const sebastian: profile = {
  person: {
    name: { first: 'Sebastian', last: 'Di Luzio' },
    profession: 'Fullstack Developer, Games Engineer.',
    services: {
      linkedin: 'sebastian-di-luzio-357185171',
      // change to https://www.linkedin.com/in/sebastian-di-luzio-357185171/ in FE
    },
    // image
  },
  projects: [
    {
      title: 'Magibot',
      role: 'Developer and maintainer',
      timeframe: {
        start: new Date(2017, 7),
        end: 'current',
      },
      description: 'Magibot is a Discord bot that helps voice-chat focused servers build communities. It is currently in over 1200 guilds serving 350.000+ users.',
    },
  ],
};
