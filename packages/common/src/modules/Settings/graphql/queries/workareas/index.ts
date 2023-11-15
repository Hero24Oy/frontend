import { PREFIX, QUERY } from './query';
import { Data } from './types';

import { useCustomQuery, UseQueryWrapper } from '$core';

export type UseGetWorkareas = UseQueryWrapper<typeof PREFIX, Data, never>;

export const useGetWorkareasQuery: UseGetWorkareas = () =>
  useCustomQuery(PREFIX, QUERY);
