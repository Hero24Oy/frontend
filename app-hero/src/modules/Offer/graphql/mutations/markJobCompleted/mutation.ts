import { gql } from '@apollo/client';
import { WorkTime } from 'hero24-types';

import { DEFAULT_RESPONSE_NAME, OfferIdInput } from '$common';

export type Response = boolean;

export type Variables = {
  actualCompletedTime: Date;
  actualStartTime: Date;
  workTime: WorkTime[];
} & OfferIdInput;

export const MUTATION = gql`
  mutation MarkJobCompleted($input: OfferCompletedInput!) {
    ${DEFAULT_RESPONSE_NAME}: markJobCompleted(input: $input)
  }
`;
