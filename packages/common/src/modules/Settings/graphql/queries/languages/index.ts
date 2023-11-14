import { PREFIX, QUERY } from './query';
import { Data } from './types';

import { useCustomQuery, UseQueryWrapper } from '$core';

export type UseGetLanguages = UseQueryWrapper<typeof PREFIX, Data, never>;

export const useGetLanguages: UseGetLanguages = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
