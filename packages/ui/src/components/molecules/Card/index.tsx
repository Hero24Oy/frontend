import { View as GluestackView } from '@gluestack-ui/themed';
import { ComponentProps, FC, PropsWithChildren } from 'react';

import { StyledCard } from '$styled';
import { LayoutStyles } from '$types';

type ViewProps = ComponentProps<typeof GluestackView>;

type PropsForPick =
  | 'backgroundColor'
  | 'borderColor'
  | 'borderRadius'
  | 'maxWidth';

type Props = PropsWithChildren<LayoutStyles & Pick<ViewProps, PropsForPick>>;

export const Card: FC<Props> = ({ children, ...restProps }) => (
  <StyledCard {...restProps}>{children}</StyledCard>
);
