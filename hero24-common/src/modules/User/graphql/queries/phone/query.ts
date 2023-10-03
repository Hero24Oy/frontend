import { gql } from '@apollo/client';

import { capitalize, DEFAULT_RESPONSE_NAME } from '../../../../../core';

export const PREFIX = 'phone';

export type Data = {
  phone: string;
};

export type Variables = {
  userId: string;
};

export const QUERY = gql`
  query ${capitalize(PREFIX)}($userId: String!) {
    ${DEFAULT_RESPONSE_NAME}: phone(userId: $userId)
  }
`;
