import { useCachedGraphQlUser } from '@hero24/common';

export const useCheckRequiredProfileFields = () => {
  const { user } = useCachedGraphQlUser();

  // TODO check customer type for undefined as well
  // do not set by default type at the server
  const hasRequiredFields = Boolean(
    user?.data?.email && user?.data?.firstName && user?.data?.lastName,
  );

  return {
    hasRequiredFields,
  };
};
