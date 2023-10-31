import { View as GluestackView } from '@gluestack-ui/themed';
import { ComponentProps, FC, PropsWithChildren } from 'react';

import { StyledCard } from '$styled';
import { LayoutStyles } from '$types';

type ViewProps = ComponentProps<typeof GluestackView>;

type PickedProps = Pick<
  ViewProps,
  'backgroundColor' | 'borderColor' | 'borderRadius' | 'maxWidth'
>;
type Props = PropsWithChildren<LayoutStyles & PickedProps>;

export const Card: FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return <StyledCard {...restProps}>{children}</StyledCard>;
};
