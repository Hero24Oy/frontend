import { useCustomQuery, UseQueryWrapper } from '@hero24/common';

import { Data, PREFIX, QUERY } from './query';

export type UseGetWorkareas = UseQueryWrapper<typeof PREFIX, Data, never>;

export const useGetWorkareas: UseGetWorkareas = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
