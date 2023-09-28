import {
  useCustomSubscription,
  UseSubscriptionWrapper,
} from '../../../../../core';

import { Response, SUBSCRIPTION, Variables } from './subscription';

const PREFIX = 'subscribeToOffers';

export type UseSubscribeToOffers = UseSubscriptionWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useSubscribeToOffers: UseSubscribeToOffers = (...args) =>
  useCustomSubscription(PREFIX, SUBSCRIPTION, ...args);
