import { gql } from '@apollo/client';

import { capitalize } from '../../../../../core/utils/capitalize';

import { DEFAULT_RESPONSE_NAME } from '$common/core';
import { User, USER_FRAGMENT } from '$common/modules';

export const PREFIX = 'user';

export type Data = User;

export type Variables = {
  id: string;
};

export const QUERY = gql`
  ${USER_FRAGMENT}

  query ${capitalize(PREFIX)}($id: String!) {
    ${DEFAULT_RESPONSE_NAME}: user(id: $id) {
      ...UserFragment
    }
  }
`;
