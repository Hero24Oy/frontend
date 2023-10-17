import { gql } from '@apollo/client';

import {
  capitalize,
  DEFAULT_RESPONSE_NAME,
  GraphQlInput,
  Offer,
  OfferUserRole,
} from '@hero24/common';

import { OFFER_FRAGMENT } from '../../fragments';

export const PREFIX = 'subscribeToOffers';

export type Response = Offer;

export type Variables = GraphQlInput<{
  role: OfferUserRole;
}>;

export const SUBSCRIPTION = gql`
  ${OFFER_FRAGMENT}

  subscription ${capitalize(PREFIX)}($input: OfferSubscriptionInput!) {
    ${DEFAULT_RESPONSE_NAME}: offerUpdated(input: $input) {
      ...OfferFragment
    }
  }
`;
