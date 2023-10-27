import { Button } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
}

export enum ButtonSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export enum ButtonVariant {
  SOLID = 'solid',
  OUTLINE = 'outline',
  LINK = 'link',
}

export type GluestackButtonProps = Pick<
  ComponentProps<typeof Button>,
  'isDisabled' | 'onPress'
>;
