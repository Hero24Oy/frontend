import { useCustomQuery, UseQueryWrapper } from '../../../../../core';

import { Data, PREFIX, QUERY, Variables } from './query';

export type UseUser = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useUser: UseUser = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
