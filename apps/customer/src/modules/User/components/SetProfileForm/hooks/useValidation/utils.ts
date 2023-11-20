import pick from 'lodash/pick';

import { SetProfileFormData } from '../../validation';

import { EditCustomerData, GqlCustomerType } from '$modules/Customer';

export const getUserData = (
  data: SetProfileFormData,
): Pick<SetProfileFormData, 'firstName' | 'lastName' | 'email'> => {
  const profileData = pick(data, ['email', 'firstName', 'lastName']);

  return profileData;
};

export const getCustomerData = (data: SetProfileFormData): EditCustomerData => {
  const { businessId, isBusinessCustomer, businessName, firstName, lastName } =
    data;

  const customerType = isBusinessCustomer
    ? GqlCustomerType.PROFESSIONAL
    : GqlCustomerType.INDIVIDUAL;

  const displayName = isBusinessCustomer
    ? (businessName as string) // thanks to validation we are sure that businessName is defined
    : `${firstName} ${lastName}`;

  const profileData: EditCustomerData = {
    businessId,
    type: customerType,
    displayName,
  };

  return profileData;
};
