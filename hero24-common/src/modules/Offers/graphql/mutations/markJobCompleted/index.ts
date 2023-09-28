import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { MUTATION, Response, Variables } from './mutation';

const PREFIX = 'markJobCompleted';

export type UseMarkJobCompleted = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useMarkJobCompleted: UseMarkJobCompleted = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
