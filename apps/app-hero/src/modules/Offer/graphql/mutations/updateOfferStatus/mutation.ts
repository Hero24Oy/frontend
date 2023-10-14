import { gql } from '@apollo/client';

import {
  capitalize,
  DEFAULT_RESPONSE_NAME,
  GraphQlInput,
  OfferStatus,
} from '$common';

export const PREFIX = 'updateOfferStatus';

export type Response = boolean;

export type Variables = GraphQlInput<{
  offerId: string;
  status: OfferStatus;
}>;

// TODO lib to make it easier
export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}($input: OfferStatusInput!) {
    ${DEFAULT_RESPONSE_NAME}: updateOfferStatus(input: $input)
  }
`;
