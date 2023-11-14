import { LoadedFile, Maybe, Range } from '@hero24/common';

import { ProfileType } from './profileType';

import { Bio } from '$modules/Common';

export type ProfileCreation = {
  companyAddress: {
    address: string;
    city: string | null;
    country: string | null;
    postcode: string;
  };
  companyBio: Bio;
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
