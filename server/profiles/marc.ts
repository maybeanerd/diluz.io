import {
  BasicSocial,
  type Profile,
  ProjectType,
  SpecialSocial,
} from '../profile.types';

export const marc: Profile = {
  person: {
    name: { first: 'Marc', last: 'Di Luzio' },
    image: 'pp.png',
    socials: [
      { type: BasicSocial.github, userName: 'mdiluz' },
      { type: BasicSocial.linkedin, userName: 'marcdiluzio' },
      { type: SpecialSocial.mastodon, userName: 'mdiluz', instance: new URL('https://mastodon.gamedev.place/') },
      { type: SpecialSocial.email, email: 'marc@mdiluz.io' },
      { type: SpecialSocial.website, url: new URL('blog.mdiluz.io') },
    ],
    shortText: { en: '' },
    meta: { basedIn: { country: { en: 'England' }, city: { en: 'London' } } },
  },
  highlights: {
    title: { en: 'Favorite Technologies', de: 'Lieblings-Technologien' },
    list: [
      { title: { en: 'C#' } },
      { title: { en: 'C++' } },
      { title: { en: 'C' } },
      { title: { en: 'Linux' } },
      { title: { en: 'Python' } },
      { title: { en: 'Bash' } },
      { title: { en: 'Unity' } },
      { title: { en: 'Docker' } },
      { title: { en: 'ASP.Net' } },
      { title: { en: 'Golang' } },
      { title: { en: 'SQL' } },
      { title: { en: 'K8s' } },
      { title: { en: 'OpenGL' } },
      { title: { en: 'Vulkan' } },
      { title: { en: 'Perl' } },
      { title: { en: 'TeamCity' } },
      { title: { en: 'Perforce' } },
    ],
  },
  projects: {
    orderBy: 'timeframe',
    list: [
      {
        title: { en: 'Frontier Developments' },
        role: { en: 'Principle Engine Devops Engineer' },
        url: 'https://www.frontier.co.uk/',
        image: 'frontier.png',
        description: {
          en: 'Developing, advising and improving devops solutions in the Cobra engine team at Frontier',
        },
        timeframe: {
          start: new Date(2023, 10),
          end: 'current',
        },
        showInProfile: true,
        type: ProjectType.job,
        technologies: [
          { en: 'TeamCity' },
          { en: 'Perforce' },
          { en: 'Python' },
          { en: 'C#' },
          { en: 'CMake' },
          { en: 'Java' },
          { en: 'CI/CD' },
        ],
        highlights: [{ en: 'Building a team of fantastic developers' }],
      },
      {
        title: { en: 'Unity' },
        role: { en: 'Lead Software Engineer' },
        url: 'https://unity.com/',
        image: 'unity.png',
        description: {
          en: 'Leading a tools team in Release Engineering, working on a variety of projects focusing on better release workflows, bug tracking and quality barriers.',
        },
        timeframe: {
          start: new Date(2021, 12),
          end: new Date(2023, 10),
        },
        showInProfile: true,
        type: ProjectType.job,
        technologies: [
          { en: 'ASP.NET' },
          { en: 'Kubernetes' },
          { en: 'CI/CD' },
        ],
        highlights: [{ en: 'Building a team of fantastic developers' }],
      },
      {
        title: { en: 'Unity' },
        role: { en: 'Senior Software Engineer' },
        url: 'https://unity.com/',
        image: 'unity.png',
        description: {
          en: 'Worked in Sustained Engineering, focusing on Linux bugs and infrastructure.',
        },
        timeframe: {
          start: new Date(2018, 4),
          end: new Date(2021, 12),
        },
        showInProfile: true,
        type: ProjectType.job,
        highlights: [{ en: 'Releasing the Linux Editor out of Preview' }],
        technologies: [
          { en: 'C/C++/C#' },
          { en: 'Vulkan/OpenGL' },
          { en: 'CI/CD' },
        ],
      },
      {
        title: { en: 'Rove' },
        role: { en: 'Developer and Designer' },
        url: 'https://github.com/mdiluz/rove',
        image: 'rove.png',
        description: {
          en: 'An asynchronous nomadic game about exploring as part of a loose community.',
        },
        timeframe: {
          start: new Date(2020, 3),
          end: 'current',
        },
        showInProfile: true,
        type: ProjectType.sideproject,
        technologies: [{ en: 'Golang' }, { en: 'protobuf' }, { en: 'GRPC' }],
      },

      {
        title: { en: 'GameMode' },
        role: { en: 'Founding Developer, now Contributor' },
        url: 'https://github.com/FeralInteractive/gamemode',
        description: {
          en: 'An open source operating system optimiser for Linux',
        },
        timeframe: {
          start: new Date(2018, 3),
          end: 'current',
        },
        showInProfile: true,
        type: ProjectType.sideproject,
        highlights: [
          {
            en: 'Added as a default package shipped with all Ubuntu Desktop installs',
          },
        ],
        technologies: [
          { en: 'C' },
          { en: 'SDbus' },
          { en: 'Meson' },
          { en: 'Inih' },
        ],
      },
      {
        title: { en: 'Feral Interactive' },
        role: { en: 'Linux Group lead' },
        url: 'https://www.feralinteractive.com/en/',
        image: 'feral_interactive.png',
        description: {
          en: 'Lead the Linux platform development while porting many AAA games such as XCOM2, Mad Max and HITMAN',
        },
        timeframe: {
          start: new Date(2013, 8),
          end: new Date(2015, 5),
        },
        showInProfile: true,
        type: ProjectType.job,
        highlights: [
          { en: 'Built a small team of great developers' },
          { en: 'Spearheaded Vulkan games development on Linux with Mad Max' },
          { en: 'Shipped over 30 titles to Linux' },
        ],
        technologies: [{ en: 'C++' }, { en: 'Vulkan/OpenGL' }],
      },
      {
        title: { en: 'Feral Interactive' },
        role: { en: 'Software Developer' },
        url: 'https://www.feralinteractive.com/en/',
        image: 'feral_interactive.png',
        description: {
          en: 'Worked on Mac and Linux ports for a variety of games including ROME: Total War, Tomb Raider and XCOM',
        },
        timeframe: {
          start: new Date(2015, 5),
          end: new Date(2018, 3),
        },
        showInProfile: true,
        type: ProjectType.job,
        highlights: [
          {
            en: "Shipped a single executable supporting both ROME and it's standalone expansions on Mac",
          },
          { en: 'Worked on shipping the first Linux game Feral sold' },
        ],
        technologies: [
          { en: 'C++' },
          { en: 'OpenGL' },
          { en: 'CMake' },
          { en: 'Perl' },
        ],
      },
    ],
  },
};
