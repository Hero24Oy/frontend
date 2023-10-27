import { gql } from '@apollo/client';

import {
  capitalize,
  DEFAULT_RESPONSE_NAME,
  GraphQlPagination,
  Offer,
} from '@hero24/common';

import { OffersInput } from './types';

import { OFFER_FRAGMENT } from '../../fragments';

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
          ...OfferFragment
        }
      }
      total
      hasNextPage
    }
  }
`;
