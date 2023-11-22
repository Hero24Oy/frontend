import { TypePolicies } from '@apollo/client';

// * Follow this import syntax because of possible cycle imports, in some files we use types from apollo
// * but in apollo we import type policies from modules
import { offersTypePolicies } from '../../../modules/Offers/graphql/typePolicies';
import { userTypePolicies } from '../../../modules/User/graphql/typePolicies';
import { mergeObjects } from '../../utils/mergeObjects';

const typePoliciesToMerge: TypePolicies[] = [
  offersTypePolicies,
  userTypePolicies,
];

export const defaultTypePolicies =
  mergeObjects<TypePolicies>(typePoliciesToMerge);
