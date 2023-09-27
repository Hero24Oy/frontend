import { capitalize } from '$/core/utils';

export type GetGraphqlRequestKeyReturnType<Type extends string> =
  `get${Capitalize<Type>}`;

export const getGraphqlRequestKey = <Type extends string>(
  prefix: Type,
): GetGraphqlRequestKeyReturnType<Type> => `get${capitalize(prefix)}`;
