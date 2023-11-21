import { useCachedGraphQlUser } from '@hero24/common';

export const useCheckRequiredProfileFields = () => {
  const { user } = useCachedGraphQlUser();

  const hasRequiredFields = Boolean(
    user?.data?.email && user?.data?.firstName && user?.data?.lastName,
  );

  return {
    hasRequiredFields,
  };
};
