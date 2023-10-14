import { gql } from '@apollo/client';

import { Maybe } from '../../../../core';

export type UserDataActiveRoute = {
  chatId?: Maybe<string>;
};

export const USER_DATA_ACTIVE_ROUTE_FRAGMENT = gql`
  fragment UserDataActiveRouteFragment on UserDataActiveRouteDto {
    chatId
  }
`;
