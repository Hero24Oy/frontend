import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { Data, MUTATION, PREFIX, Variables } from './mutation';

export type UseEditUser = UseMutationWrapper<typeof PREFIX, Data, Variables>;

export const useEditUser: UseEditUser = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
