const NUMBER_OF_SPACE = 2;

export const stringifyPretty = (...args: unknown[]): string =>
  JSON.stringify(args, null, NUMBER_OF_SPACE);
