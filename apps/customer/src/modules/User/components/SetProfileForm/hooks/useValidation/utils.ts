import { SetProfileFormData } from '../../validation';

export const normalizeProfileData = (
  data: SetProfileFormData,
): SetProfileFormData => {
  const profileData = { ...data };

  if (!profileData.isBusinessCustomer) {
    profileData.businessName = null;
    profileData.businessId = null;
  }

  return profileData;
};
