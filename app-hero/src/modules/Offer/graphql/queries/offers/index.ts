import { Data, PREFIX, QUERY, Variables } from './query';

import { useCustomQuery, UseQueryWrapper } from '$common';

type UseGetOffers = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useGetOffers: UseGetOffers = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);
