import { Button } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

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

export enum ButtonSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
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
