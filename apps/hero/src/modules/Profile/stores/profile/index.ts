import { createMultiScreenStore, DEFAULT_LANGUAGES } from '@hero24/common';

import { ProfileCreation } from './types';

export const profileCreationInitialState: ProfileCreation = {
  info: {
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
  address: {
    country: null,
    city: null,
    address: '',
    postcode: '',
  },
  paymentData: {
    companyId: '',
    IBAN: '',
  },
  bio: {
    info: '',
    languages: DEFAULT_LANGUAGES,
  },
  welcome: {
    profileType: null,
  },
};

export const useProfileCreationStore = createMultiScreenStore(
  profileCreationInitialState,
);

export * from './types';
