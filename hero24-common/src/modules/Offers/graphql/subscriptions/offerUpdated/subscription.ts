import { gql } from '@apollo/client';

import { DEFAULT_RESPONSE_NAME } from '../../../../../core';
import { OfferRole } from '../../constants';
import { Offer, OFFER_FRAGMENT } from '../../fragments';

export type Response = Offer;

export type Variables = {
  role: OfferRole;
};

export const SUBSCRIPTION = gql`
  ${OFFER_FRAGMENT}

  subscription SubscribeToOffersUpdates($input: OfferSubscriptionInput!) {
    ${DEFAULT_RESPONSE_NAME}: offerUpdated(input: $input) {
      ...OfferInfo
    }
  }
`;
