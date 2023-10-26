type Component = (props: never) => unknown;

type Args<FunctionComponent extends Component> =
  Parameters<FunctionComponent>[0];

type ExtendProps<
  FunctionComponent extends Component,
  Props extends Record<string, unknown>,
> = (
  props: Omit<Args<FunctionComponent>, keyof Props> & Props,
) => ReturnType<FunctionComponent>;

export const extendProps = <
  FunctionComponent extends Component,
  Props extends Record<string, unknown>,
>(
  component: Component,
): ExtendProps<FunctionComponent, Props> => {
  return component as ExtendProps<FunctionComponent, Props>;
};
