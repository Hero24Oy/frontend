import { gql } from '@apollo/client';

import { capitalize, DEFAULT_RESPONSE_NAME } from '$core';

export const PREFIX = 'phone';

export type Data = string;

export type Variables = {
  userId: string;
};

// TODO here is userId but in <user> resolver  it's just id
export const QUERY = gql`
  query ${capitalize(PREFIX)}($userId: String!) {
    ${DEFAULT_RESPONSE_NAME}: phone(userId: $userId)
  }
`;
