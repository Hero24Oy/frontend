import { Data, PREFIX, QUERY, Variables } from './query';

import { useCustomQuery, UseQueryWrapper } from '$common/core';

export type UseGetUsers = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useGetUsers: UseGetUsers = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
