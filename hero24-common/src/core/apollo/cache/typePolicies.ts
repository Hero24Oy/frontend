import { TypePolicies } from '@apollo/client';
import { mergeObjects } from 'core/utils';

// const typePoliciesToMerge: TypePolicies[] = [offersTypePolicies].flat();
const typePoliciesToMerge: TypePolicies[] = [].flat();

export const typePolicies = mergeObjects<TypePolicies>(typePoliciesToMerge); // TODO create factory
