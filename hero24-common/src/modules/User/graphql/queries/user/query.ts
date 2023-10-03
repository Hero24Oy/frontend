import { gql } from '@apollo/client';

import { capitalize, DEFAULT_RESPONSE_NAME } from '../../../../../core';
import { User, USER_FRAGMENT } from '../../fragments';

export const PREFIX = 'user';

export type Variables = {
  id: string;
};

export type Data = {
  user: User | null;
};

export const QUERY = gql`
  ${USER_FRAGMENT}

  query ${capitalize(PREFIX)}($id: String!) {
    ${DEFAULT_RESPONSE_NAME}: user(id: $id) {
      ...UserFragment
    }
  }
`;
