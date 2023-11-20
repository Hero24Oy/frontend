import { createMultiScreenStore, DEFAULT_LANGUAGES } from '@hero24/common';

import { CommonHeroInfo, ProfileCreation } from './types';

import { SELF_EMPLOYED_DISPLAYED_NAME_PREFIX } from '$configs';

const profileCommonInfoCreationInitialState: CommonHeroInfo = {
  name: '',
  email: '',
};

const professionalCreationInfoInitialState: Pick<
  ProfileCreation,
  'professionalInfo'
> = {
  professionalInfo: {
    ...profileCommonInfoCreationInitialState,
    employees: null,
  },
};

const individualCreationInfoInitialState: Pick<
  ProfileCreation,
  'individualInfo'
> = {
  individualInfo: {
    ...profileCommonInfoCreationInitialState,
    birthday: null,
    displayedName: SELF_EMPLOYED_DISPLAYED_NAME_PREFIX,
    lastName: '',
    socialId: '',
  },
};

export const profileCreationInitialState: ProfileCreation = {
  ...professionalCreationInfoInitialState,
  ...individualCreationInfoInitialState,
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
