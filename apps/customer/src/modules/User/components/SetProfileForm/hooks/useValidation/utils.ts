import pick from 'lodash/pick';

import { EditCustomerData, GqlCustomerType } from '@hero24/common';

import { SetProfileFormData } from '../../validation';

export const prepareUserData = (
  data: SetProfileFormData,
): Pick<SetProfileFormData, 'firstName' | 'lastName' | 'email'> => {
  const preparedUserData = pick(data, ['email', 'firstName', 'lastName']);

  return preparedUserData;
};

export const prepareCustomerData = (
  data: SetProfileFormData,
): EditCustomerData => {
  const { businessId, isBusinessCustomer, businessName, firstName, lastName } =
    data;

  const customerType = isBusinessCustomer
    ? GqlCustomerType.PROFESSIONAL
    : GqlCustomerType.INDIVIDUAL;

  const displayName = isBusinessCustomer
    ? (businessName as string) // thanks to validation we are sure that businessName is defined
    : `${firstName} ${lastName}`;

  const preparedCustomerData: EditCustomerData = {
    businessId,
    type: customerType,
    displayName,
  };

  return preparedCustomerData;
};
