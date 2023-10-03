import {
  useCustomLazyQuery,
  useCustomQuery,
  UseLazyQueryWrapper,
  UseQueryWrapper,
} from '../../../../../core';

import { Data, PREFIX, QUERY, Variables } from './query';

export type UsePhone = UseQueryWrapper<typeof PREFIX, Data, Variables>;

export const usePhone: UsePhone = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);

// TODO to lazy query folder
type UseLazyGetOffer = UseLazyQueryWrapper<typeof PREFIX, Data, Variables>;

export const useLazyGetOffer: UseLazyGetOffer = (...args) =>
  useCustomLazyQuery(PREFIX, QUERY, ...args);
