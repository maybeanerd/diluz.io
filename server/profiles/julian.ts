import {
  BasicSocial,
  EducationType,
  Proficiency,
  Profile,
  SpecialSocial,
} from '../profile.types';

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
    basedIn: { country: 'Germany', city: 'Munich' },
  },
  skills: {
    technical: [
      { title: 'Linux', proficiency: Proficiency.strong },
      { title: 'Windows', proficiency: Proficiency.strong },
      { title: 'Kali', proficiency: Proficiency.knowledgeable },
      { title: 'Bash', proficiency: Proficiency.strong },
      { title: 'Powershell', proficiency: Proficiency.knowledgeable },
      { title: 'Python', proficiency: Proficiency.knowledgeable },
      { title: 'Golang', proficiency: Proficiency.knowledgeable },
      { title: 'Kubernetes', proficiency: Proficiency.strong },
      { title: 'Ansible', proficiency: Proficiency.knowledgeable },
      { title: 'Terraform', proficiency: Proficiency.knowledgeable },
      { title: 'Gitlab / Gitlab CI', proficiency: Proficiency.knowledgeable },
      { title: 'Prometheus', proficiency: Proficiency.strong },
      { title: 'Grafana', proficiency: Proficiency.strong },
    ],
    education: [
      {
        title: 'secondary school certificate',
        type: EducationType.school,
        source: 'Dr.-Josef-Schwalber-Realschule Dachau ',
        date: new Date(2017, 6),
        link: 'https://realschuledachau.de/',
      },
    ],
  },
  projects: {
    list: [],
    final: {
      title: 'The beginning of time',
      text: 'If you want to see some side projects, take a look at my GitHub.',
    },
  },
};
