import {
  useCustomMutation,
  UseMutationWrapper,
} from '../../../../../core/apollo/hooks';

import { MUTATION, Variables } from './mutation';

const PREFIX = 'updateOfferStatus';

export type UseUpdateOfferStatus = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useUpdateOfferStatus: UseUpdateOfferStatus = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);

export type UseLazyGetOffer = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;
