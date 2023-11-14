import { LoadedFile, Maybe, Range } from '@hero24/common';

import { ProfileType } from './profileType';

export type ProfileCreation = {
  address: {
    address: string;
    city: string | null;
    country: string | null;
    postcode: string;
  };
  bio: {
    languages: string[] | null;
    info?: Maybe<string>;
  };
  info: {
    email: string;
    employees: Range | null;
    name: string;
  };
  paymentData: {
    companyId: string | null;
    IBAN: string;
  };
  welcome: {
    profileType: `${ProfileType}` | null;
  };
  workData: {
    experience: Range | null;
    expertise: string[];
    places: string[];
    certificate?: Maybe<LoadedFile>;
    insurance?: Maybe<LoadedFile>;
  };
};
