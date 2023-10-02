import { gql } from '@apollo/client';

import {
  capitalize,
  DEFAULT_RESPONSE_NAME,
  OfferIdInput,
  OfferStatusInput,
} from '$common';

export const PREFIX = 'updateOfferStatus';

export type Response = boolean;

export type Variables = OfferIdInput & {
  status: OfferStatusInput;
};

// TODO lib to make it easier
export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}($input: OfferStatusInput!) {
    ${DEFAULT_RESPONSE_NAME}: updateOfferStatus(input: $input)
  }
`;
