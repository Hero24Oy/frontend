import { TypePolicies } from '@apollo/client';

import { mergeObjects } from '$common/core';
import { offersTypePolicies, userTypePolicies } from '$common/modules';

// * Follow this import syntax because of possible cycle imports, in some files we use types from apollo
// * but in apollo we import type policies from modules

const typePoliciesToMerge: TypePolicies[] = [
  offersTypePolicies,
  userTypePolicies,
];

export const typePolicies = mergeObjects<TypePolicies>(typePoliciesToMerge);
