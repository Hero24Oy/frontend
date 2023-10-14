import { MUTATION, PREFIX, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

export type UseMarkJobCompleted = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useMarkJobCompleted: UseMarkJobCompleted = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
