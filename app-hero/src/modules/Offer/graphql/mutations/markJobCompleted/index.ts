import { MUTATION, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

const PREFIX = 'markJobCompleted';

export type UseMarkJobCompleted = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useMarkJobCompleted: UseMarkJobCompleted = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
