import { styled } from '@gluestack-style/react';
import React, { ComponentProps, FC, PropsWithChildren } from 'react';

import { Box } from '$atoms';
import { CommonStyles } from '$types';

type BoxProps = ComponentProps<typeof Box>;

type PropsForPick =
  | 'backgroundColor'
  | 'borderColor'
  | 'borderRadius'
  | 'maxWidth';

type Props = PropsWithChildren<
  Pick<BoxProps, PropsForPick> & {
    style: CommonStyles;
  }
>;

export const GluestackCard = styled(Box, {}, { componentName: 'Card' });

export const Card: FC<Props> = (props) => {
  const { children, ...rest } = props;

  return <GluestackCard {...rest}>{children}</GluestackCard>;
};
