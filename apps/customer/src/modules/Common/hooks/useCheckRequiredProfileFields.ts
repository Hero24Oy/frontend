import { GqlCustomerType, useCachedGraphQlUser } from '@hero24/common';

import { useCachedGqlCustomer } from '$modules/Customer';

export const useCheckRequiredProfileFields = () => {
  const { user } = useCachedGraphQlUser();
  const { customer } = useCachedGqlCustomer();

  const hasBusinessCustomerRequiredFields = Boolean(
    customer?.data?.type === GqlCustomerType.PROFESSIONAL &&
      customer?.data?.businessId &&
      customer?.data?.displayName,
  );

  const hasIndividualCustomerRequiredFields = Boolean(
    customer?.data?.type === GqlCustomerType.INDIVIDUAL &&
      customer?.data.displayName,
  );

  const hasUserRequiredFields = Boolean(
    user?.data?.email && user?.data?.firstName && user?.data?.lastName,
  );

  const hasRequiredFields =
    hasUserRequiredFields &&
    (hasBusinessCustomerRequiredFields || hasIndividualCustomerRequiredFields);

  return {
    hasRequiredFields,
  };
};
