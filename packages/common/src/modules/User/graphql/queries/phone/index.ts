import { useCustomQuery, UseQueryWrapper } from '../../../../../core';

import { Data, PREFIX, QUERY, Variables } from './query';

export type UseGetPhone = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useGetPhone: UseGetPhone = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
