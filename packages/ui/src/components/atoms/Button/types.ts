import { Button } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

import { Size } from '$theme';

export type ButtonSize = Extract<Size, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
}

export enum ButtonVariant {
  SOLID = 'solid',
  OUTLINE = 'outline',
  LINK = 'link',
}

export enum ButtonAction {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
}

export type GluestackButtonProps = Pick<
  ComponentProps<typeof Button>,
  'isDisabled' | 'onPress'
>;
