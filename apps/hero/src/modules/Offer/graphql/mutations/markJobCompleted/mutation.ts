import { gql } from '@apollo/client';
import {
  capitalize,
  DEFAULT_RESPONSE_NAME,
  GraphQlInput,
} from '@hero24/common';
import { WorkTime } from 'hero24-types';

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
