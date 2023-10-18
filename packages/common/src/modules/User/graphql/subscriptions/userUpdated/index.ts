import { PREFIX, Response, SUBSCRIPTION, Variables } from './subscription';

import { useCustomSubscription, UseSubscriptionWrapper } from '$common/core';

// TODO this should be done when User module is migrated and subscription to userUpdate is available
export type UseSubscribeToUser = UseSubscriptionWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

/**
 * @deprecated until is subscription to user update available
 */
export const useSubscribeToUser: UseSubscribeToUser = (...args) =>
  useCustomSubscription(PREFIX, SUBSCRIPTION, ...args);
