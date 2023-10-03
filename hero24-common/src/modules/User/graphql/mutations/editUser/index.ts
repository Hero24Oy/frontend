import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { Data, MUTATION, PREFIX, Variables } from './mutation';
// TODO Now all this logic uses one single editUser mutation, but in the future we should create separate mutations for each hook
export type UseEditUser = UseMutationWrapper<typeof PREFIX, Data, Variables>;

export const useEditUser: UseEditUser = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
