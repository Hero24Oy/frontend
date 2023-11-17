import { Maybe } from '@hero24/common';

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
  type: `${CustomerType}`;
  businessId?: Maybe<string>;
  businessName?: Maybe<string>;
  isCreatedFromWeb?: Maybe<boolean>;
  photoURL?: Maybe<string>;
};
