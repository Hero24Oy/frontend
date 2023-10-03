import { TypePolicies } from '@apollo/client';

import { mergeObjects } from '../../utils';

/**
 *
 * @description Function to merge type policies into one police
 * @param policies Array of type policies
 * @example
 // file with graphql policy
 export const Query: TypePolicy = {
    fields: {
        offer: {
            keyArgs: false,
            read,
        },
    },
};

 // file aggregating policies for offers resolver
 export const offersTypePolicy: TypePolicies[] = [{ Query }];

 // file aggregating all policies for module
 export const offersTypePolicies: TypePolicies[] = [offerTypePolicy, offersTypePolicy].flat();
 */
export const mergeTypePolicies = (policies: TypePolicies[]): TypePolicies =>
  mergeObjects<TypePolicies>(policies.flat());
