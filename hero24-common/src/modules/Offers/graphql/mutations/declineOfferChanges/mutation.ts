import { gql } from '@apollo/client';

import { DEFAULT_RESPONSE_NAME, OfferIdInput } from '../../../../../core';

export type Response = boolean;

export type Variables = OfferIdInput;

export const MUTATION = gql`
  mutation DeclineOfferChanges($input: OfferIdInput!) {
    ${DEFAULT_RESPONSE_NAME}: declineOfferChanges(input: $input)
  }
`;
