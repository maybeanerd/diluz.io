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

export type Image =
  | {
      isURL: false;
      path: string;
    }
  | {
      isURL: true;
      path: URL;
    };

type Person = {
  name: {
    first: string;
    last: 'Di Luzio'; // we could support other spellings of the name later on
  };
  image?: Image;
  shortText?: string;
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
  subprojects?: Array<Project>;
  showInProfile: boolean;
  type: ProjectType;
};

export type Technology = Array<{
  title: string;
}>;

export type Profile = {
  person: Person;
  favoriteTech: Technology;
  projects: {
    list: Array<Project>;
    final?: {
      title: string;
      text: string;
    };
  };
};
