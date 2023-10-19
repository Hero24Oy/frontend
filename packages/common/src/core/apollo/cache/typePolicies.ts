import { TypePolicies } from '@apollo/client';

// ! IMPORTANT
// * Follow this import syntax because of possible cycle imports, in some files we use types from apollo
// * but in apollo we import type policies from modules
import { offersTypePolicies } from '../../../modules/Offers/graphql/typePolicies';
import { userTypePolicies } from '../../../modules/User/graphql/typePolicies';
import { mergeObjects } from '../../utils';

const typePoliciesToMerge: TypePolicies[] = [
  offersTypePolicies,
  userTypePolicies,
];

export const typePolicies = mergeObjects<TypePolicies>(typePoliciesToMerge);
