import { ScreensForms, Store } from '@hero24/common';

export interface CompanyCreation extends ScreensForms {
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
    certificate: Record<string, unknown> | null; // TODO: change after implementation loading images
    experience: number | null;
    expertise: string[];
    insurance: Record<string, unknown> | null; // TODO: change after implementation loading images
    places: string[];
  };
}

export type CompanyCreationStore = Store<CompanyCreation>;
