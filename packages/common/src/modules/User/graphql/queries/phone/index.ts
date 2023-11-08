import { Data, PREFIX, QUERY, Variables } from './query';

import { useCustomQuery, UseQueryWrapper } from '$core';

export type UseGetPhone = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useGetPhone: UseGetPhone = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
