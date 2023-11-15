import { useCustomQuery, UseQueryWrapper } from '@hero24/common';

import { Data, PREFIX, QUERY } from './query';

export type UseGetLanguages = UseQueryWrapper<typeof PREFIX, Data, never>;

export const useGetLanguages: UseGetLanguages = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
