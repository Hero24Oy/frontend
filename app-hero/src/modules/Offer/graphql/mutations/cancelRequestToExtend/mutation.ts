import { gql } from '@apollo/client';

import { capitalize, DEFAULT_RESPONSE_NAME, OfferIdInput } from '$common';

export const PREFIX = 'cancelRequestToExtend';

export type Response = boolean;

export type Variables = OfferIdInput;

export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}($input: OfferIdInput!) {
   ${DEFAULT_RESPONSE_NAME}: cancelRequestToExtend(input: $input)
  }
`;