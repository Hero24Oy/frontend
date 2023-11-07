import { File, Maybe, Range } from '@hero24/common';

export type CompanyCreation = {
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
  workData: {
    experience: Range | null;
    expertise: string[];
    places: string[];
    certificate?: Maybe<File>;
    insurance?: Maybe<File>;
  };
};
