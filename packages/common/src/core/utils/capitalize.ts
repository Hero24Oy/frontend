export const capitalize = <Type extends string>(str: Type): Capitalize<Type> =>
  (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<Type>;
