import { LoadedFile, Maybe, Range } from '@hero24/common';

export enum ProfileType {
  SELF_EMPLOYED = 'self-employed',
  COMPANY = 'company',
}

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
