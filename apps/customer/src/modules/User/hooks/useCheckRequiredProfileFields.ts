import { useCachedGraphQlUser } from '@hero24/common';

export const useCheckRequiredProfileFields = () => {
  const { user: graphqlUser } = useCachedGraphQlUser();

  const hasRequiredFields =
    graphqlUser.data.email ||
    graphqlUser.data.firstName ||
    graphqlUser.data.lastName;

  return {
    hasRequiredFields,
  };
};
