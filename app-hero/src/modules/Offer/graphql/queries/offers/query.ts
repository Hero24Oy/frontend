import { gql } from '@apollo/client';

import { OFFER_FRAGMENT } from '../../fragments';

import { OffersInput } from './types';

import {
  capitalize,
  DEFAULT_RESPONSE_NAME,
  GraphQlPagination,
  Offer,
} from '$common';

export const OFFERS_TYPE_NAME = 'OfferListDto';

export const PREFIX = 'offers';

export type Data = GraphQlPagination<Offer>;

export type Variables = OffersInput;

export const QUERY = gql`
  ${OFFER_FRAGMENT}

  query ${capitalize(PREFIX)}($input: OfferArgs!) {
    ${DEFAULT_RESPONSE_NAME}: offers(input: $input) {
      edges {
        node {
          ...OfferInfo
        }
      }
      total
      hasNextPage
    }
  }
`;
