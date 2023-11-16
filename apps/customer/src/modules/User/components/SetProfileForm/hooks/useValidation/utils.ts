import omit from 'lodash/omit';

import { SetProfileFormData } from '../../validation';

export const normalizeProfileData = (
  data: SetProfileFormData,
): SetProfileFormData => {
  // * Depending on how server will be setup, we will adjust the mutation
  const profileData = omit(data, [
    'isBusinessCustomer',
    'businessId',
    'businessName',
  ]);

  return profileData;
};
