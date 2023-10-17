import { gql } from '@apollo/client';
import { capitalize } from 'lodash';

import { DEFAULT_RESPONSE_NAME, GraphQlInput, Offer } from '@hero24/common';

import { OFFER_FRAGMENT } from '../../fragments';

export const PREFIX = 'offer';

export type Data = Offer;

export type Variables = GraphQlInput<{
  offerId: string;
}>;

// TODO lib to make automatic alias
export const QUERY = gql`
  ${OFFER_FRAGMENT}

  query ${capitalize(PREFIX)}($input: OfferIdInput!) {
    ${DEFAULT_RESPONSE_NAME}: offer(input: $input) {
      ...OfferFragment
    }
  }
`;
