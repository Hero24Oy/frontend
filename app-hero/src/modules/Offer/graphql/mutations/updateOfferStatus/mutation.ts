import { gql } from '@apollo/client';

import { DEFAULT_RESPONSE_NAME, OfferIdInput, OfferStatusInput } from '$common';

export type Response = boolean;

export type Variables = {
  status: OfferStatusInput;
} & OfferIdInput;

// TODO lib to make it easier
export const MUTATION = gql`
  mutation UpdateOfferStatus($input: OfferStatusInput!) {
    ${DEFAULT_RESPONSE_NAME}: updateOfferStatus(input: $input)
  }
`;
