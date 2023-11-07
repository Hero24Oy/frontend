import { createMultiScreenStore } from '@hero24/common';

import { CompanyCreation } from './types';

export const companyCreationInitialState: CompanyCreation = {
  companyInfo: {
    name: '',
    email: '',
    employees: null,
  },
  workData: {
    expertise: [],
    experience: null,
    places: [],
    insurance: null,
    certificate: null,
  },
  companyAddress: {
    country: null,
    city: null,
    address: '',
    postcode: '',
  },
  paymentData: {
    companyId: '',
    IBAN: '',
  },
};

export const useCompanyCreationStore = createMultiScreenStore(
  companyCreationInitialState,
);

export * from './types';
