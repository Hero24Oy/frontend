import omit from 'lodash/omit';

import { HeroType, profileCreationInitialState } from '$modules/Profile/stores';

export const getDefaultValues = (heroType: HeroType) => {
  if (heroType === HeroType.PROFESSIONAL) {
    return profileCreationInitialState.paymentData;
  }

  return omit(profileCreationInitialState.paymentData, ['companyId']);
};
