import { gql } from '@apollo/client';
import { SupportedLanguages } from 'hero24-types';

import { Maybe } from '../../../../core';

import {
  USER_DATA_ACTIVE_ROUTE_FRAGMENT,
  UserDataActiveRoute,
} from './UserDataActiveRoute';
import { USER_DATA_ADDRESS_FRAGMENT, UserDataAddress } from './UserDataAddress';

export type UserData = {
  createdAt: number;
  email: string;
  name: string;
  photoURL: string;
  activeRoute?: Maybe<UserDataActiveRoute>;
  addresses?: Maybe<UserDataAddress[]>;
  birthDate?: Maybe<number>;
  certificate?: Maybe<string>;
  deletedAt?: Maybe<number>;
  emailVerified?: Maybe<boolean>;
  firstName?: Maybe<string>;
  hasAccountMergeBeenAsked?: Maybe<boolean>;
  iban?: Maybe<string>;
  insurance?: Maybe<string>;
  isActive?: Maybe<boolean>;
  language?: Maybe<string>;
  lastAskedReviewTime?: Maybe<number>;
  lastName?: Maybe<string>;
  phone?: Maybe<string>;
  pushToken?: Maybe<string[]>;
  selectedAppLanguage?: Maybe<SupportedLanguages>;
  ssn?: Maybe<string>;
  updatedAt?: Maybe<number>;
};

export const USER_DATA_FRAGMENT = gql`
  ${USER_DATA_ACTIVE_ROUTE_FRAGMENT}
  ${USER_DATA_ADDRESS_FRAGMENT}

  fragment UserDataFragment on UserDataDto {
    email
    emailVerified
    pushToken
    name
    firstName
    lastName
    photoURL
    language
    isActive
    phone
    iban
    birthDate
    certificate
    insurance
    ssn
    createdAt
    updatedAt
    deletedAt
    hasAccountMergeBeenAsked
    selectedAppLanguage
    lastAskedReviewTime
    activeRoute {
      ...UserDataActiveRouteFragment
    }
    addresses {
      ...UserDataAddressFragment
    }
  }
`;
