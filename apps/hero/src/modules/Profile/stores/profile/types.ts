import { HeroType } from 'hero24-types';

import { LoadedFile, Maybe, Range } from '@hero24/common';

export type ProfileCreation = {
  address: {
    address: string;
    city: string | null;
    country: string | null;
    postcode: string;
  };
  bio: {
    languages: string[];
    info?: Maybe<string>;
  };
  info: {
    email: string;
    employees: Range | null;
    name: string;
  };
  paymentData: {
    IBAN: string;
    companyId?: Maybe<string>;
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
