import { useCustomQuery, UseQueryWrapper } from '../../../../../core';

import { Data, PREFIX, QUERY, Variables } from './query';

export type UseGetUser = UseQueryWrapper<typeof PREFIX, Data, Variables, true>;

export const useGetUser: UseGetUser = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args) as ReturnType<UseGetUser>;
