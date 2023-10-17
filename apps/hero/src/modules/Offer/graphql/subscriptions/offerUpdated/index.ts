import { useCustomSubscription, UseSubscriptionWrapper } from '@hero24/common';

import { PREFIX, Response, SUBSCRIPTION, Variables } from './subscription';

export type UseSubscribeToOffers = UseSubscriptionWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useSubscribeToOffers: UseSubscribeToOffers = (...args) =>
  useCustomSubscription(PREFIX, SUBSCRIPTION, ...args);
