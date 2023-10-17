import { useCustomQuery, UseQueryWrapper } from '@hero24/common';

import { Data, PREFIX, QUERY, Variables } from './query';

type UseGetOffers = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useGetOffers: UseGetOffers = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
