import { LoadedFile, Maybe, Range } from '@hero24/common';

export enum ProfileType {
  SELF_EMPLOYED = 'self-employed',
  COMPANY = 'company',
}

type CommonInfo = {
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
  companyInfo: CommonInfo & {
    employees: Range | null;
  };
  paymentData: {
    companyId: string | null;
    IBAN: string;
  };
  personalInfo: CommonInfo & {
    birthday: Date | null;
    displayedName: string;
    lastName: string;
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
