import { gql } from '@apollo/client';

import { DEFAULT_RESPONSE_NAME, GraphQlPagination } from '../../../../../core';
import { Offer, OFFER_FRAGMENT } from '../../fragments';

import { OffersInput } from './types';

export const OFFERS_TYPE_NAME = 'OfferListDto';

export type Data = GraphQlPagination<Offer>;

export type Variables = OffersInput;

export const QUERY = gql`
  ${OFFER_FRAGMENT}

  query GetOffers($input: OfferArgs!) {
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
