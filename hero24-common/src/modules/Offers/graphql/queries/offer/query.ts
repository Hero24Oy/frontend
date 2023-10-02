import { gql } from '@apollo/client';
import { capitalize } from 'lodash';

import { DEFAULT_RESPONSE_NAME } from '../../../../../core/apollo/constants';
import { Offer, OFFER_FRAGMENT } from '../../fragments';
import { OfferIdInput } from '../../types';

export const OFFER_TYPE_NAME = 'OfferDto';

export const PREFIX = 'offer';

export type Data = Offer;

export type Variables = OfferIdInput;

// TODO lib to make automatic alias
export const QUERY = gql`
  ${OFFER_FRAGMENT}

  query ${capitalize(PREFIX)}($input: OfferIdInput!) {
    ${DEFAULT_RESPONSE_NAME}: offer(input: $input) {
      ...OfferInfo
    }
  }
`;
