import { gql } from '@apollo/client';

import { capitalize, DEFAULT_RESPONSE_NAME, GraphQlInput } from '$common';

export const PREFIX = 'startJob';

export type Response = boolean;

export type Variables = GraphQlInput<{
  offerId: string;
}>;

export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}($input: OfferIdInput!) {
    ${DEFAULT_RESPONSE_NAME}: startJob(input: $input)
  }
`;
