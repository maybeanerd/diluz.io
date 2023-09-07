export enum BasicSocial {
  linkedin = 'linkedin',
  github = 'github',
}
export enum SpecialSocial {
  mastodon = 'mastodon',
  website = 'website',
  email = 'email',
}
export type Social = BasicSocial | SpecialSocial;

export enum Proficiency {
  strong = 0x0001,
  knowledgeable = 0x1001,
}

export enum EducationType {
  school = 'school',
  university = 'file-certificate',
}

export type SocialInfo =
  | { type: BasicSocial; userName: string }
  | {
      type: SpecialSocial.mastodon;
      userName: string;
      instance: URL;
    }
  | {
      type: SpecialSocial.website;
      url: URL } | {
      type: SpecialSocial.email;
      email: string };

type Person = {
  name: {
    first: string;
    last: 'Di Luzio'; // we could support other spellings of the name later on
  };
  image?: { isURL: boolean; path: string };
  shortText?: string;
  socials: Array<SocialInfo>;
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
    type: EducationType;
  }>;
  misc?: Array<{ title: string }>;
};

export type Profile = {
  person: Person;
  skills: Skills;
  projects: {
    list: Array<Project>;
    final?: {
      title: string;
      text: string;
    };
  };
};
