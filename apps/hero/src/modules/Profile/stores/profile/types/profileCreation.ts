import { LoadedFile, Maybe, Range } from '@hero24/common';

import { ProfileType } from './profileType';

export type ProfileCreation = {
  bio: {
    languages: string[] | null;
    info?: Maybe<string>;
  };
  companyAddress: {
    address: string;
    city: string | null;
    country: string | null;
    postcode: string;
  };
  companyInfo: {
    email: string;
    employees: Range | null;
    name: string;
  };
  paymentData: {
    companyId: string;
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
