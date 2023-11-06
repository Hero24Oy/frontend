import { createMultiScreenStore } from '@hero24/common';

const companyCreationStoreInitialState = {
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

const companyCreationStore = createMultiScreenStore(
  companyCreationStoreInitialState,
);

export const useCompanyCreationStore = () => {
  return companyCreationStore((state) => state);
};
