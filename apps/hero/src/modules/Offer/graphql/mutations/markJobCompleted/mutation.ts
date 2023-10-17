import { gql } from '@apollo/client';
import { WorkTime } from 'hero24-types';

import {
  capitalize,
  DEFAULT_RESPONSE_NAME,
  GraphQlInput,
} from '@hero24/common';

export const PREFIX = 'markJobCompleted';

export type Response = boolean;

export type Variables = GraphQlInput<{
  actualCompletedTime: Date;
  actualStartTime: Date;
  offerId: string;
  workTime: WorkTime[];
}>;

export const MUTATION = gql`
  mutation ${capitalize(PREFIX)}($input: OfferCompletedInput!) {
    ${DEFAULT_RESPONSE_NAME}: markJobCompleted(input: $input)
  }
`;
