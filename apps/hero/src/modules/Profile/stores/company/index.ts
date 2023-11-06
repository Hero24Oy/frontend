import { createMultiScreenStore } from '@hero24/common';

import { CompanyCreation, CompanyCreationStore } from './types';

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

const useStore = createMultiScreenStore(companyCreationInitialState);

export const useCompanyCreationStore = (): CompanyCreationStore => {
  return useStore();
};

export * from './types';
