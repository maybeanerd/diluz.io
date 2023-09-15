import type { Locales } from '~/config/i18n';

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

export type SocialInfo =
  | { type: BasicSocial; userName: string }
  | {
      type: SpecialSocial.mastodon;
      userName: string;
      instance: URL;
    }
  | {
      type: SpecialSocial.website;
      url: URL;
    }
  | {
      type: SpecialSocial.email;
      email: string;
    };

export type Image = string;

// Require en, allow any other language
export type LocalizedString = { en: string } & Partial<Record<Locales, string>>;

type Person = {
  name: {
    first: string;
    last: 'Di Luzio'; // we could support other spellings of the name later on
  };
  image?: Image;
  shortText: LocalizedString;
  socials: Array<SocialInfo>;
  meta: {
    basedIn?: { country: LocalizedString; city?: LocalizedString };
    pronouns?: Array<LocalizedString>;
    languages?: Array<string>;
  };
};

export enum ProjectType {
  sideproject,
  job,
}

// TODO maybe add these to project types?
export enum EducationType {
  school = 'school',
  university = 'file-certificate',
}

export type Project = {
  title: LocalizedString;
  role: LocalizedString;
  image?: Image;
  description: LocalizedString;
  highlights?: Array<LocalizedString>;
  url?: string;
  technologies?: Array<LocalizedString>;
  timeframe: { start: Date; end: Date | 'current' };
  showInProfile: boolean;
  type: ProjectType;
};

export type Profile = {
  person: Person;
  highlights?: {
    title: LocalizedString;
    list: Array<{ title: LocalizedString }>;
  };
  projects: {
    list: Array<Project>;
    orderBy: 'timeframe' | 'none';
  };
};
