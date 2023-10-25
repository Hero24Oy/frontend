type Props<Element extends (args: never) => unknown> = Parameters<Element>[0];

export type ExtendProps<
  Element extends (args: never) => unknown,
  Variants extends Record<string, unknown>,
> = (props: Props<Element> & Variants) => ReturnType<Element>;
