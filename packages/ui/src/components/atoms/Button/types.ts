import { Button } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

import { Size } from '$theme';

export type ButtonSize = Extract<Size, 'sm' | 'md' | 'lg'>;

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

export type GluestackButtonProps = Pick<
  ComponentProps<typeof Button>,
  'isDisabled' | 'onPress'
>;
