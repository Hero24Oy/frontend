import {
  createEditUserMutation,
  EDIT_USER_PREFIX,
  EditUserVariables,
  InferSelection,
  useCustomMutation,
  UseMutationWrapper,
} from '@hero24/common';

const mutation = createEditUserMutation({
  data: {
    email: true,
    firstName: true,
    lastName: true,
  },
});

type EditUserResponse = InferSelection<typeof mutation>;

export type UseEditUser = UseMutationWrapper<
  typeof EDIT_USER_PREFIX,
  EditUserResponse,
  EditUserVariables
>;

export const useEditUser: UseEditUser = (...args) =>
  useCustomMutation(EDIT_USER_PREFIX, mutation, ...args);
