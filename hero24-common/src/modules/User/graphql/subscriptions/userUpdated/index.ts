import {
  useCustomSubscription,
  UseSubscriptionWrapper,
} from '../../../../../core';

import { PREFIX, Response, SUBSCRIPTION, Variables } from './subscription';

// TODO this should be done when User module is migrated and subscription to userUpdate is available
export type UseSubscribeToUser = UseSubscriptionWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useSubscribeToUser: UseSubscribeToUser = (...args) =>
  useCustomSubscription(PREFIX, SUBSCRIPTION, ...args);
