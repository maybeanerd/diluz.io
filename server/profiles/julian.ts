import { BasicSocial, Profile, SpecialSocial } from '../profile.types';

export const julian: Profile = {
  person: {
    name: { first: 'Julian', last: 'Di Luzio' },
    image: { isURL: false, path: 'pp.png' },
    socials: [
      { type: BasicSocial.github, userName: '7crmbs2' },
      { type: BasicSocial.linkedin, userName: 'julian-di-luzio' },
      { type: SpecialSocial.email, email: 'julian@diluz.io' },
    ],
    shortText: 'cyber security enthusiast, baseball player, biker.',
    meta: { basedIn: { country: 'Germany', city: 'Munich' } },
  },
  favoriteTech: [
    { title: 'Linux' },
    { title: 'Windows' },
    { title: 'Kali' },
    { title: 'Bash' },
    { title: 'Powershell' },
    { title: 'Python' },
    { title: 'Golang' },
    { title: 'Kubernetes' },
    { title: 'Ansible' },
    { title: 'Terraform' },
    { title: 'Gitlab / Gitlab CI' },
    { title: 'Prometheus' },
    { title: 'Grafana' },
  ],

  projects: {
    list: [],
    final: {
      title: 'Want to see more?',
      text: 'If you want to see some side projects, take a look at my GitHub.',
    },
  },
};
