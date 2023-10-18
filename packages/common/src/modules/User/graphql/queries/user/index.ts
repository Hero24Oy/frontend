import { Data, PREFIX, QUERY, Variables } from './query';

import { useCustomQuery, UseQueryWrapper } from '$common/core';

export type UseGetUser = UseQueryWrapper<typeof PREFIX, Data, Variables, true>;

export const useGetUser: UseGetUser = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args) as ReturnType<UseGetUser>;
