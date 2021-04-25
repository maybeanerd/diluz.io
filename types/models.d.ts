type services = { linkedin?: string; github?: string };

type person = {
  name: {
    first: string;
    last: 'Di Luzio'; // we could support other spellings of the name later on
  };
  image?: string;
  birthday?: Date;
  profession: string;
  services: services;
};

type project = {
  title: string;
  role: string;
  image?: string;
  description: string;
  url?: string;
  timeframe?: { start?: Date; end?: Date | 'current' };
  subprojects?: Array<project>;
};

type skills = {
  languages?: Array<{ lang: string; skilllevel: number }>;
  programminglangs?: Array<{ lang: string; skilllevel: number }>;
  misc?: Array<{ title: string; skilllevel: number }>;
};

type profile = {
  person: person;
  projects: Array<project>;
  skills: skills;
  hobbies?: Array<{ title: string; icon?: string }>;
};
