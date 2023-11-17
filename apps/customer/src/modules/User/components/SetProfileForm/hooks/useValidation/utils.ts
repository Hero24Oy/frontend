import pick from 'lodash/pick';

import { SetProfileFormData } from '../../validation';

export const getUserData = (
  data: SetProfileFormData,
): Pick<SetProfileFormData, 'firstName' | 'lastName' | 'email'> => {
  const profileData = pick(data, ['email', 'firstName', 'lastName']);

  return profileData;
};

export const getCustomerData = (
  data: SetProfileFormData,
): Pick<SetProfileFormData, 'businessId' | 'businessName'> => {
  const profileData = pick(data, ['businessId', 'businessName']);

  return profileData;
};
