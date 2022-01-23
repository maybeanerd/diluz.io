type Services = { linkedin?: string; github?: string };

export enum LanguageProficiency {
  native = 'Native',
  C2 = 'C2',
  C1 = 'C1',
  B2 = 'B2',
  B1 = 'B1',
  A2 = 'A2',
  A1 = 'A1',
}

export enum Proficiency {
  strong = 0x0001,
  knowledgeable = 0x1001,
}

export enum EducationTypes {
  school = 'school',
  university = 'file-certificate',
}

type Person = {
  name: {
    first: string;
    last: 'Di Luzio'; // we could support other spellings of the name later on
  };
  image?: { isURL: boolean; path: string };
  birthday?: Date;
  profession?: string;
  shortText?: string;
  email?: string;
  website?: string;
  services: Services;
  interests?: Array<{ title: string; icon?: string }>; // this is unecessary
  languages?: Array<{ lang: string; proficiency: LanguageProficiency }>;
  nationalities?: Array<{ title: string }>;
  basedIn?: { country: string; city?: string };
};

export enum ProjectType {
  sideproject,
  job,
}

export type Project = {
  title: string;
  role: string;
  image?: string;
  description: string;
  highlights?: Array<string>;
  url?: string;
  technologies?: Array<string>;
  timeframe: { start: Date; end: Date | 'current' };
  subprojects?: Array<Project>;
  showInProfile: boolean;
  type: ProjectType;
};

type Skills = {
  technical?: Array<{ title: string; proficiency: Proficiency }>;
  certificates?: Array<{ title: string; link?: string }>;
  education?: Array<{
    source: string;
    title: string;
    date?: Date;
    link?: string;
    type: EducationTypes;
  }>;
  misc?: Array<{ title: string }>;
};

export type Profile = {
  person: Person;
  projects: Array<Project>;
  skills: Skills;
};
