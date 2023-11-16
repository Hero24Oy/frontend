import { createUserQuery, USER_QUERY_PREFIX, Variables } from './query';

import { InferSelection, useCustomQuery, UseQueryWrapper } from '$core';

const query = createUserQuery({
  id: true,
  data: {
    email: true,
    firstName: true,
    lastName: true,
  },
});

type Response = InferSelection<typeof query>;

export type UseGetUser = UseQueryWrapper<
  typeof USER_QUERY_PREFIX,
  Response,
  Variables,
  true
>;

export const useGetUser: UseGetUser = (...args) =>
  useCustomQuery(USER_QUERY_PREFIX, query, ...args) as ReturnType<UseGetUser>;
