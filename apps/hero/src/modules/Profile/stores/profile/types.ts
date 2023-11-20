import { LoadedFile, Maybe, Range } from '@hero24/common';

export enum HeroType {
  INDIVIDUAL = 'individual',
  PROFESSIONAL = 'professional',
}

export type CommonHeroInfo = {
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
  individualInfo: CommonHeroInfo & {
    birthday: Date | null;
    displayedName: string;
    lastName: string;
    socialId: string;
  };
  paymentData: {
    companyId: string | null;
    IBAN: string;
  };
  professionalInfo: CommonHeroInfo & {
    employees: Range | null;
  };
  welcome: {
    profileType: `${HeroType}` | null;
  };
  workData: {
    experience: Range | null;
    expertise: string[];
    places: string[];
    certificate?: Maybe<LoadedFile>;
    insurance?: Maybe<LoadedFile>;
  };
};
