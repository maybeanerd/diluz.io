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
  timeframe?: { start?: Date; end?: Date | 'current' };
  subprojects?: Array<project>;
};

type profile = {
  person: person;
  projects: Array<project>;
};
