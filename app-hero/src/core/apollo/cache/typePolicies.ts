import { TypePolicies } from '@apollo/client';

import { mergeObjects } from '$/core/utils';
// import { offersTypePolicies } from '$/modules/Offers/graphql/typePolicies'; // TODO update imports when module is migrated

// const typePoliciesToMerge: TypePolicies[] = [offersTypePolicies].flat();
const typePoliciesToMerge: TypePolicies[] = [].flat();

export const typePolicies = mergeObjects<TypePolicies>(typePoliciesToMerge);
