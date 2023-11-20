import { Maybe } from '@hero24/common';

import { GqlCustomerType } from '../constants';

export enum CustomerType {
  INDIVIDUAL = 'individual',
  PROFESSIONAL = 'professional',
}

export type CustomerProfile = {
  data: CustomerProfileData;
  id: string;
  hasMadeApprovedRequest?: Maybe<boolean>;
};

export type CustomerProfileData = {
  displayName: string;
  businessId?: Maybe<string>;
  isCreatedFromWeb?: Maybe<boolean>;
  photoURL?: Maybe<string>;
  type?: `${GqlCustomerType}`;
};
