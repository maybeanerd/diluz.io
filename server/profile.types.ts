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

type Person = {
  name: {
    first: string;
    last: 'Di Luzio'; // we could support other spellings of the name later on
  };
  image?: Image;
  shortText: string;
  socials: Array<SocialInfo>;
  meta: {
    basedIn?: { country: string; city?: string };
    pronouns?: Array<string>;
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
  title: string;
  role: string;
  image?: Image;
  description: string;
  highlights?: Array<string>;
  url?: string;
  technologies?: Array<string>;
  timeframe: { start: Date; end: Date | 'current' };
  showInProfile: boolean;
  type: ProjectType;
};

export type Profile = {
  person: Person;
  highlights?: {
    title: string;
    list: Array<{ title: string }>;
  };
  projects: {
    list: Array<Project>;
    orderBy: 'timeframe' | 'none';
    final?: {
      title: string;
      text: string;
    };
  };
};
