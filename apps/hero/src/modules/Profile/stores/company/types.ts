import { LoadedFile, Maybe, Range } from '@hero24/common';

export type CompanyCreation = {
  companyAddress: {
    address: string;
    city: string | null;
    country: string | null;
    postcode: string;
  };
  companyInfo: {
    email: string;
    employees: number | null;
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
