import { gql } from '@apollo/client';

import { capitalize } from '../../../../../core';

export const PREFIX = 'phone';

export type Data = {
  phone: string;
};

export type Variables = {
  userId: string;
};

export const QUERY = gql`
  query ${capitalize(PREFIX)}($userId: String!) {
    phone(userId: $userId)
  }
`;
