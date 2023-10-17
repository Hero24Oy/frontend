import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

import { MUTATION, PREFIX, Response, Variables } from './mutation';

export type UseMarkJobCompleted = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useMarkJobCompleted: UseMarkJobCompleted = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
