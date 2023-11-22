import { InMemoryCacheConfig, TypePolicies } from '@apollo/client';

import { customerTypePolicies, mergeObjects } from '@hero24/common';

// * Follow this import syntax because of possible cycle imports, in some files we use code from core
// * but in apollo we import type policies from modules

const typePoliciesToMerge: TypePolicies[] = [customerTypePolicies];

export const typePolicies = mergeObjects<TypePolicies>(typePoliciesToMerge);

// * All custom cache configs go here
export const cache: InMemoryCacheConfig = {
  typePolicies,
};
