import { merge } from 'lodash';

import { createMultiScreenStore, DEFAULT_LANGUAGES } from '@hero24/common';

import { ProfileCreation } from './types';

const companyCreationInfoInitialState: Pick<ProfileCreation, 'companyInfo'> = {
  companyInfo: {
    name: '',
    email: '',
    employees: null,
  },
};

const selfEmployedCreationInfoInitialState: Pick<
  ProfileCreation,
  'personalInfo'
> = {
  personalInfo: {
    name: '',
    email: '',
    birthday: null,
    displayedName: '',
    lastName: '',
    socialId: '',
  },
};

export const profileCreationInitialState: ProfileCreation = merge(
  companyCreationInfoInitialState,
  selfEmployedCreationInfoInitialState,
  {
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
  },
);

export const useProfileCreationStore = createMultiScreenStore(
  profileCreationInitialState,
);

export * from './types';
