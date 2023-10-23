import { gql } from '@apollo/client';

import {
  capitalize,
  DEFAULT_RESPONSE_NAME,
  GraphQlInput,
  Maybe,
} from '@hero24/common';

export const PREFIX = 'acceptOfferChanges';

export type Response = boolean;

export type Variables = GraphQlInput<{
  offerId: string;
  agreedStartTime?: Maybe<Date>;
}>;

export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}($input: OfferChangeInput!) {
    ${DEFAULT_RESPONSE_NAME}: acceptOfferChanges(input: $input)
  }
`;
