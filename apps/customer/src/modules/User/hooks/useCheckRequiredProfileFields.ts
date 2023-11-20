import { useCachedGraphQlUser } from '@hero24/common';

import { GqlCustomerType, useCachedGqlCustomer } from '$modules/Customer';

// TODO think about moving to common
export const useCheckRequiredProfileFields = () => {
  const { user } = useCachedGraphQlUser();
  const { customer } = useCachedGqlCustomer();

  const hasBusinessCustomerRequiredFields =
    customer?.data?.type === GqlCustomerType.PROFESSIONAL &&
    customer?.data?.businessId &&
    customer?.data?.displayName;

  const hasIndividualCustomerRequiredFields =
    customer?.data?.type === GqlCustomerType.INDIVIDUAL &&
    customer?.data.displayName;

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
