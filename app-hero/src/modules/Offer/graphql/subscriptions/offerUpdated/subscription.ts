import { gql } from '@apollo/client';

import { Offer, OFFER_FRAGMENT } from '../../fragments';

import { capitalize, DEFAULT_RESPONSE_NAME, OfferUserRole } from '$common';

export const PREFIX = 'subscribeToOffers';

export type Response = Offer;

export type Variables = {
  role: OfferUserRole;
};

export const SUBSCRIPTION = gql`
  ${OFFER_FRAGMENT}

  subscription ${capitalize(PREFIX)}($input: OfferSubscriptionInput!) {
    ${DEFAULT_RESPONSE_NAME}: offerUpdated(input: $input) {
      ...OfferInfo
    }
  }
`;
