import { Data, PREFIX, QUERY, Variables } from './query';

import {
  useCustomLazyQuery,
  useCustomQuery,
  UseLazyQueryWrapper,
  UseQueryWrapper,
} from '$common';

export type UseGetOffer = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useGetOffer: UseGetOffer = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);

// TODO to lazy query folder
type UseLazyGetOffer = UseLazyQueryWrapper<typeof PREFIX, Data, Variables>;

export const useLazyGetOffer: UseLazyGetOffer = (...args) =>
  useCustomLazyQuery(PREFIX, QUERY, ...args);
