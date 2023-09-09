import {
  BasicSocial,
  Profile,
  ProjectType,
  SpecialSocial,
} from '../profile.types';

export const marc: Profile = {
  person: {
    name: { first: 'Marc', last: 'Di Luzio' },
    image: { isURL: false, path: 'pp.png' },
    socials: [
      { type: BasicSocial.github, userName: 'mdiluz' },
      { type: BasicSocial.linkedin, userName: 'marcdiluzio' },
      { type: SpecialSocial.email, email: 'marc@diluz.io' },
    ],
    // TODO Fill this in
    // shortText: "Lorem Ipsum",
    meta: { basedIn: { country: 'England', city: 'London' } },
  },
  favoriteTech: [
    { title: 'C#' },
    { title: 'C++' },
    { title: 'C' },
    { title: 'Linux' },
    { title: 'Python' },
    { title: 'Bash' },
    { title: 'Unity' },
    { title: 'Docker' },
    { title: 'ASP.Net' },
    { title: 'Golang' },
    { title: 'SQL' },
    { title: 'K8s' },
    { title: 'OpenGL' },
    { title: 'Vulkan' },
    { title: 'Perl' },
  ],
  projects: {
    list: [
      {
        title: 'Unity',
        role: 'Lead Software Engineer',
        url: 'https://unity.com/',
        image: { isURL: false, path: 'unity.png' },
        description:
          'Leading a tools team in Release Engineering, working on a variety of projects focusing on better release workflows, bug tracking and quality barriers.',
        timeframe: {
          start: new Date(2021, 12),
          end: 'current',
        },
        showInProfile: true,
        type: ProjectType.job,
        technologies: ['ASP.NET', 'Kubernetes', 'CI/CD'],
        highlights: ['Building a team of fantastic developers'],
      },
      {
        title: 'Unity',
        role: 'Senior Software Engineer',
        url: 'https://unity.com/',
        image: { isURL: false, path: 'unity.png' },
        description:
          'Worked in Sustained Engineering, focusing on Linux bugs and infrastructure.',
        timeframe: {
          start: new Date(2018, 4),
          end: new Date(2021, 12),
        },
        showInProfile: true,
        type: ProjectType.job,
        highlights: ['Releasing the Linux Editor out of Preview'],
        technologies: ['C/C++/C#', 'Vulkan/OpenGL', 'CI/CD'],
      },
      {
        title: 'Rove',
        role: 'Developer and Designer',
        url: 'https://github.com/mdiluz/rove',
        image: { isURL: false, path: 'rove.png' },
        description:
          'An asynchronous nomadic game about exploring as part of a loose community.',
        timeframe: {
          start: new Date(2020, 3),
          end: 'current',
        },
        showInProfile: true,
        type: ProjectType.sideproject,
        technologies: ['Golang', 'protobuf', 'GRPC'],
      },

      {
        title: 'GameMode',
        role: 'Founding Developer, now Contributor',
        url: 'https://github.com/FeralInteractive/gamemode',
        description: 'An open source operating system optimiser for Linux',
        timeframe: {
          start: new Date(2018, 3),
          end: 'current',
        },
        showInProfile: true,
        type: ProjectType.sideproject,
        highlights: [
          'Added as a default package shipped with all Ubuntu Desktop installs',
        ],
        technologies: ['C', 'SDbus', 'Meson', 'Inih'],
      },
      {
        title: 'Feral Interactive',
        role: 'Linux Group lead',
        url: 'https://www.feralinteractive.com/en/',
        image: { isURL: false, path: 'feral_interactive.png' },
        description:
          'Lead the Linux platform development while porting many AAA games such as XCOM2, Mad Max and HITMAN',
        timeframe: {
          start: new Date(2013, 8),
          end: new Date(2015, 5),
        },
        showInProfile: true,
        type: ProjectType.job,
        highlights: [
          'Built a small team of great developers',
          'Spearheaded Vulkan games development on Linux with Mad Max',
          'Shipped over 30 titles to Linux',
        ],
        technologies: ['C++', 'Vulkan/OpenGL'],
      },
      {
        title: 'Feral Interactive',
        role: 'Software Developer',
        url: 'https://www.feralinteractive.com/en/',
        image: { isURL: false, path: 'feral_interactive.png' },
        description:
          'Worked on Mac and Linux ports for a variety of games including ROME: Total War, Tomb Raider and XCOM',
        timeframe: {
          start: new Date(2015, 5),
          end: new Date(2018, 3),
        },
        showInProfile: true,
        type: ProjectType.job,
        highlights: [
          "Shipped a single executable supporting both ROME and it's standalone expansions on Mac",
          'Worked on shipping the first Linux game Feral sold',
        ],
        technologies: ['C++', 'OpenGL', 'CMake', 'Perl'],
      },
    ],
  },
};
