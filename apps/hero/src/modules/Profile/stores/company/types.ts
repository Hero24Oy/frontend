import { LoadedFile, Maybe } from '@hero24/common';
import { RadioRange } from '@hero24/ui';

export type CompanyCreation = {
  companyAddress: {
    address: string;
    city: string | null;
    country: string | null;
    postcode: string;
  };
  companyInfo: {
    email: string;
    employees: RadioRange | null;
    name: string;
  };
  paymentData: {
    companyId: string;
    IBAN: string;
  };
  workData: {
    experience: RadioRange | null;
    expertise: string[];
    places: string[];
    certificate?: Maybe<LoadedFile>;
    insurance?: Maybe<LoadedFile>;
  };
};
