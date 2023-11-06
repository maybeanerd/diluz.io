import { BasicSocial, type Profile, SpecialSocial } from '../profile.types';

export const julian: Profile = {
  person: {
    name: { first: 'Julian', last: 'Di Luzio' },
    image: 'pp.png',
    socials: [
      { type: BasicSocial.github, userName: '7crmbs2' },
      { type: BasicSocial.linkedin, userName: 'julian-di-luzio' },
      { type: SpecialSocial.email, email: 'julian@diluz.io' },
    ],
    shortText: {
      en: 'Cyber security enthusiast, baseball player, biker.',
      de: 'Cyber-Security-Enthusiast, Baseballspieler, Biker.',
    },
    meta: {
      basedIn: {
        country: { en: 'Germany', de: 'Deutschland' },
        city: { en: 'Munich', de: 'München' },
      },
    },
  },
  highlights: {
    title: { en: 'Favorite Technologies', de: 'Lieblings-Technologien' },
    list: [
      { title: { en: 'Linux' } },
      { title: { en: 'Windows' } },
      { title: { en: 'Kali' } },
      { title: { en: 'Bash' } },
      { title: { en: 'Powershell' } },
      { title: { en: 'Python' } },
      { title: { en: 'Golang' } },
      { title: { en: 'Kubernetes' } },
      { title: { en: 'Ansible' } },
      { title: { en: 'Terraform' } },
      { title: { en: 'Gitlab / Gitlab CI' } },
      { title: { en: 'Prometheus' } },
      { title: { en: 'Grafana' } },
    ],
  },

  projects: {
    orderBy: 'timeframe',
    list: [],
  },
};
