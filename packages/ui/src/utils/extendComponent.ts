type Component = (props: never) => unknown;

type Props<Element extends Component> = Parameters<Element>[0];

type ExtendComponent<
  Element extends Component,
  Variants extends Record<string, unknown>,
> = (
  props: Omit<Props<Element>, keyof Variants> & Variants,
) => ReturnType<Element>;

export const extendComponent = <
  Element extends Component,
  ExtendProps extends Record<string, unknown>,
>(
  component: Component,
): ExtendComponent<Element, ExtendProps> => {
  return component as ExtendComponent<Element, ExtendProps>;
};
