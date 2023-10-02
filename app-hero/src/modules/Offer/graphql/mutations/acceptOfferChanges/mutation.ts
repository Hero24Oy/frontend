import { gql } from '@apollo/client';
import { Maybe } from 'yup';

import { capitalize, DEFAULT_RESPONSE_NAME, OfferIdInput } from '$common';

export const PREFIX = 'acceptOfferChanges';

export type Response = boolean;

export type Variables = OfferIdInput & {
  agreedStartTime?: Maybe<Date>;
};

export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}($input: OfferChangeInput!) {
    ${DEFAULT_RESPONSE_NAME}: acceptOfferChanges(input: $input)
  }
`;
