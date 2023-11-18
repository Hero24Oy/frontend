import { LoadedFile, Maybe, Range } from '@hero24/common';

export enum ProfileType {
  SELF_EMPLOYED = 'self-employed',
  COMPANY = 'company',
}

type ProfileInfo = {
  email: string;
  name: string;
};

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
  companyInfo: ProfileInfo & {
    employees: Range | null;
  };
  paymentData: {
    companyId: string | null;
    IBAN: string;
  };
  personalInfo: ProfileInfo & {
    birthday: Date | null;
    displayedName: string;
    lastName: string | null;
    socialId: string;
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
