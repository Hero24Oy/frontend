import { gql } from '@apollo/client';

import { DEFAULT_RESPONSE_NAME, OfferIdInput } from '$common';

export type Response = boolean;

export type Variables = OfferIdInput;

export const MUTATION = gql`
  mutation CancelRequestToExtend($input: OfferIdInput!) {
   ${DEFAULT_RESPONSE_NAME}: cancelRequestToExtend(input: $input)
  }
`;
