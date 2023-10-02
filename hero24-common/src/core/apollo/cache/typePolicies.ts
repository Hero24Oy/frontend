import { TypePolicies } from '@apollo/client';

import { mergeObjects } from '../../utils/mergeObjects';

const typePoliciesToMerge: TypePolicies[] = [].flat(); // here goes policies from modules

export const typePolicies = mergeObjects<TypePolicies>(typePoliciesToMerge);
