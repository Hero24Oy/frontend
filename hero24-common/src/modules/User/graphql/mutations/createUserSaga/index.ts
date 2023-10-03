import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { MUTATION, PREFIX, Response, Variables } from './mutation';
// TODO Now all this logic uses one single editUser mutation, but in the future we should create separate mutations for each hook
export type UseCreateUser = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useCreateUser: UseCreateUser = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
