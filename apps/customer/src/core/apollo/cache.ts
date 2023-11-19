import { InMemoryCacheConfig, TypePolicies } from '@apollo/client';

import { mergeObjects } from '@hero24/common';

import { customerTypePolicies } from '$modules';

const typePoliciesToMerge: TypePolicies[] = [customerTypePolicies];

export const typePolicies = mergeObjects<TypePolicies>(typePoliciesToMerge);

// * All custom cache configs go here
export const cache: InMemoryCacheConfig = {
  typePolicies,
};
