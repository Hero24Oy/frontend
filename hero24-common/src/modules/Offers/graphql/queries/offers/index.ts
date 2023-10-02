import { useCustomQuery, UseQueryWrapper } from '../../../../../core';

import { Data, PREFIX, QUERY, Variables } from './query';

type UseGetOffers = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useGetOffers: UseGetOffers = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
