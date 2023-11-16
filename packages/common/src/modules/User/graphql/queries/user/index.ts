import { createUserQuery, Data, USER_QUERY_PREFIX, Variables } from './query';

import { useCustomQuery, UseQueryWrapper } from '$core';

const query = createUserQuery({
  id: true,
  data: {
    email: true,
    firstName: true,
    lastName: true,
  },
});

export type UseGetUser = UseQueryWrapper<
  typeof USER_QUERY_PREFIX,
  Data,
  Variables,
  true
>;

export const useGetUser: UseGetUser = (...args) =>
  useCustomQuery(USER_QUERY_PREFIX, query, ...args) as ReturnType<UseGetUser>;
