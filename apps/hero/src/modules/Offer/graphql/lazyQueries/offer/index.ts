import { Data, PREFIX, QUERY, Variables } from '../../queries/offer/query';

import { useCustomLazyQuery, UseLazyQueryWrapper } from '@hero24/common';

type UseLazyGetOffer = UseLazyQueryWrapper<typeof PREFIX, Data, Variables>;

export const useLazyGetOffer: UseLazyGetOffer = (...args) =>
  useCustomLazyQuery(PREFIX, QUERY, ...args);
