import { Data, MUTATION, PREFIX, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$core';

export type UseEditUser = UseMutationWrapper<typeof PREFIX, Data, Variables>;

export const useEditUser: UseEditUser = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
