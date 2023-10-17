import { gql } from '@apollo/client';

import {
  capitalize,
  DEFAULT_RESPONSE_NAME,
  GraphQlInput,
} from '@hero24/common';

export const PREFIX = 'declineOfferChanges';

export type Response = boolean;

export type Variables = GraphQlInput<{ offerId: string }>;

export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}($input: OfferIdInput!) {
    ${DEFAULT_RESPONSE_NAME}: declineOfferChanges(input: $input)
  }
`;
