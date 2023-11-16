import {
  createEditUserMutation,
  EDIT_USER_PREFIX,
  EditUserMutationVariables,
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

type Data = InferSelection<typeof mutation>;

export type UseSetRequiredProfileFields = UseMutationWrapper<
  typeof EDIT_USER_PREFIX,
  Data,
  EditUserMutationVariables
>;

export const useSetRequiredProfileFields: UseSetRequiredProfileFields = (
  ...args
) => useCustomMutation(EDIT_USER_PREFIX, mutation, ...args);
