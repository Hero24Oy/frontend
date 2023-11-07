import { styled } from '@gluestack-style/react';
import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { Badge as GluestackBadge } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { BadgeAction, BadgeSize } from '$components/atoms';
import { DescendantStyleName } from '$theme';

type Variants = {
  action: Record<`${BadgeAction}`, Partial<SxProps<StyleProp<ViewStyle>>>>;
  size: Record<`${BadgeSize}`, Partial<SxProps<StyleProp<ViewStyle>>>>;
};

export const StyledSolidBadge = styled<
  ComponentProps<typeof GluestackBadge>,
  Variants,
  string
>(
  GluestackBadge,
  {},
  {
    componentName: 'SolidBadge',
    descendantStyle: [DescendantStyleName.TEXT, DescendantStyleName.ICON],
  },
);
