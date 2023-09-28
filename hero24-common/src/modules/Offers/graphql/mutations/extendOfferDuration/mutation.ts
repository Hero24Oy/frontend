import { gql } from '@apollo/client';

import { DEFAULT_RESPONSE_NAME, OfferIdInput } from '../../../../../core';

export type Response = boolean;

export type Variables = {
  reasonToExtend: string;
  timeToExtend: number;
} & OfferIdInput;

export const MUTATION = gql`
  mutation ExtendOfferDuration($input: OfferExtendInput!) {
    ${DEFAULT_RESPONSE_NAME}: extendOfferDuration(input: $input)
  }
`;
