import { gql } from '@apollo/client';

import { capitalize, DEFAULT_RESPONSE_NAME, OfferIdInput } from '$common';

export const PREFIX = 'extendOfferDuration';

export type Response = boolean;

export type Variables = OfferIdInput & {
  reasonToExtend: string;
  timeToExtend: number;
};

export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}($input: OfferExtendInput!) {
    ${DEFAULT_RESPONSE_NAME}: extendOfferDuration(input: $input)
  }
`;
