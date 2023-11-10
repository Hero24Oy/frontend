import { FC, PropsWithChildren } from 'react';

import { CardStyles, GluestackCardProps } from './types';

import { StyledCard } from '$styled';
import { LayoutStyles } from '$types';

type Props = PropsWithChildren<{ style?: LayoutStyles & CardStyles }> &
  GluestackCardProps;

export const Card: FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return <StyledCard {...restProps}>{children}</StyledCard>;
};
