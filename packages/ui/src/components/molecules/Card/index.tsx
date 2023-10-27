import { styled } from '@gluestack-style/react';
import { View as GluestackView } from '@gluestack-ui/themed';
import React, { ComponentProps, FC, PropsWithChildren } from 'react';

import { LayoutStyles } from '$types';

type ViewProps = ComponentProps<typeof GluestackView>;

type PropsForPick =
  | 'backgroundColor'
  | 'borderColor'
  | 'borderRadius'
  | 'maxWidth';

type Props = PropsWithChildren<LayoutStyles & Pick<ViewProps, PropsForPick>>;

export const GluestackCard = styled(
  GluestackView,
  {},
  { componentName: 'Card' },
);

export const Card: FC<Props> = ({ children, ...restProps }) => (
  <GluestackCard {...restProps}>{children}</GluestackCard>
);
