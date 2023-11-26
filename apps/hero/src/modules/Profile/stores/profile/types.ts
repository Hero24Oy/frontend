import { HeroType } from 'hero24-types';

import { Country, LoadedFile, Maybe, Range } from '@hero24/common';

export type CommonHeroInfo = {
  email: string;
  name: string;
};

export type ProfileCreation = {
  address: {
    address: string;
    city: string | null;
    country: Country;
    postcode: string;
  };
  bio: {
    languages: string[];
    info?: Maybe<string>;
  };
  individualInfo: CommonHeroInfo & {
    birthday: Date | null;
    firstName: string;
    lastName: string;
    socialId: string;
  };
  paymentData: {
    IBAN: string;
    companyId?: Maybe<string>;
  };
  professionalInfo: CommonHeroInfo & {
    employees: Range | null;
  };
  welcome: {
    heroType: HeroType | null;
  };
  workData: {
    experience: Range | null;
    expertise: string[];
    places: string[];
    certificate?: Maybe<LoadedFile>;
    insurance?: Maybe<LoadedFile>;
  };
};
