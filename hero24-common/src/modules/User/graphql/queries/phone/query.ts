import { gql } from '@apollo/client';

export const QUERY = gql`
  query GetPhone($userId: String!) {
    phone(userId: $userId)
  }
`;
