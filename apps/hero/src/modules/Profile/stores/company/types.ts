import { LoadedFile, Maybe, Range } from '@hero24/common';

import { Bio } from '$modules/Profile/screens';

export type CompanyCreation = {
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
  workData: {
    experience: Range | null;
    expertise: string[];
    places: string[];
    certificate?: Maybe<LoadedFile>;
    insurance?: Maybe<LoadedFile>;
  };
};
