import { useCustomQuery, UseQueryWrapper } from '../../../../../core';

import { Data, PREFIX, QUERY, Variables } from './query';

export type UseGetUsers = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useGetUsers: UseGetUsers = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
