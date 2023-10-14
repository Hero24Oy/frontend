import { PREFIX, Response, SUBSCRIPTION, Variables } from './subscription';

import { useCustomSubscription, UseSubscriptionWrapper } from '$common';

export type UseSubscribeToOffers = UseSubscriptionWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useSubscribeToOffers: UseSubscribeToOffers = (...args) =>
  useCustomSubscription(PREFIX, SUBSCRIPTION, ...args);
