import { gql } from '@apollo/client';

export const PREFIX = 'subscribeToOffers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- // TODO Dummy type, when subscription is available, this should be updated
export type Response = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- // TODO Dummy type, when subscription is available, this should be updated
export type Variables = any;

// TODO this should be done when User module is migrated and subscription to userUpdate is available
export const SUBSCRIPTION = gql``;
