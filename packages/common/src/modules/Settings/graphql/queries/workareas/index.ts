import { Data, PREFIX, QUERY } from './query';

import { useCustomQuery, UseQueryWrapper } from '$core';

export type UseGetWorkareas = UseQueryWrapper<typeof PREFIX, Data, never>;

export const useGetWorkareas: UseGetWorkareas = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
