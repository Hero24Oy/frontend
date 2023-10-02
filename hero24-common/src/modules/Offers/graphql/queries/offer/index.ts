import {
  useCustomLazyQuery,
  useCustomQuery,
  UseLazyQueryWrapper,
  UseQueryWrapper,
} from '../../../../../core';

import { Data, PREFIX, QUERY, Variables } from './query';

export type UseGetOffer = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const useGetOffer: UseGetOffer = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);

type UseLazyGetOffer = UseLazyQueryWrapper<typeof PREFIX, Data, Variables>;

export const useLazyGetOffer: UseLazyGetOffer = (...args) =>
  useCustomLazyQuery(PREFIX, QUERY, ...args);
