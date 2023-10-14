import { Data, PREFIX, QUERY, Variables } from './query';

import { useCustomQuery, UseQueryWrapper } from '@hero24/common';

export type UseGetOffer = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useGetOffer: UseGetOffer = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
