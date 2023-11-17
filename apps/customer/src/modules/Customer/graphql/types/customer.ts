import { Maybe } from '@hero24/common';

export type CustomerProfile = {
  data: CustomerProfileData;
  id: string;
  hasMadeApprovedRequest?: Maybe<boolean>;
};

export type CustomerProfileData = {
  displayName: string;
  isCreatedFromWeb?: Maybe<boolean>;
  photoURL?: Maybe<string>;
};
