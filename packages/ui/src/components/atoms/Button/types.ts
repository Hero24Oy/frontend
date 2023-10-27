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

type ButtonProps = ComponentProps<typeof Button>;

type PickedFields = 'isDisabled' | 'onPress';

export type GluestackButtonProps = Pick<ButtonProps, PickedFields>;
