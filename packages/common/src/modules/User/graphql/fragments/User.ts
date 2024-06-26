import { gql } from '@apollo/client';

import { USER_DATA_FRAGMENT, UserData } from './UserData';
import { USER_OFFER_FRAGMENT, UserOffer } from './UserOffer';

import { Maybe } from '$core';

export type User = {
  data: UserData;
  id: string;
  hasBuyerProfile?: Maybe<boolean>;
  hasSellerProfile?: Maybe<boolean>;
  isAdmin?: Maybe<boolean>;
  isApprovedSeller?: Maybe<boolean>;
  isBlocked?: Maybe<boolean>;
  isCreatedFromWeb?: Maybe<boolean>;
  mergedTo?: Maybe<string>;
  mergedUsers?: Maybe<string[]>;
  netvisorCustomerId?: Maybe<number>;
  netvisorSellerId?: Maybe<number>;
  offerRequests?: Maybe<string[]>;
  offers?: Maybe<UserOffer[]>;
  paymentTransactions?: Maybe<string[]>;
  phoneVerified?: Maybe<boolean>;
  stripeCustomerId?: Maybe<string>;
  transactions?: Maybe<string[]>;
};

export const USER_FRAGMENT = gql`
  ${USER_DATA_FRAGMENT}
  ${USER_OFFER_FRAGMENT}

  fragment UserFragment on UserDto {
    id
    data {
      ...UserDataFragment
    }
    stripeCustomerId
    isCreatedFromWeb
    isAdmin
    netvisorCustomerId
    netvisorSellerId
    phoneVerified
    offers {
      ...UserOfferFragment
    }
    offerRequests
    transactions
    paymentTransactions
    hasBuyerProfile
    hasSellerProfile
    isApprovedSeller
    isBlocked
    mergedUsers
    mergedTo
  }
`;
