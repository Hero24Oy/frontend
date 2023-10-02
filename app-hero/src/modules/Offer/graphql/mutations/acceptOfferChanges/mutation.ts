import { gql } from '@apollo/client';
import { Maybe } from 'yup';

import { DEFAULT_RESPONSE_NAME, OfferIdInput } from '$common';

export type Response = boolean;

export type Variables = {
  agreedStartTime?: Maybe<Date>;
} & OfferIdInput;

export const MUTATION = gql`
  mutation AcceptOfferChanges($input: OfferChangeInput!) {
    ${DEFAULT_RESPONSE_NAME}: acceptOfferChanges(input: $input)
  }
`;
