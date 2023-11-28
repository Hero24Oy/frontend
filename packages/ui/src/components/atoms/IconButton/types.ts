import { Button } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

import { Size } from '$theme';

export type IconButtonSize = Extract<Size, 'sm' | 'md' | 'lg'>;

export type GluestackIconButtonProps = Pick<
  ComponentProps<typeof Button>,
  'isDisabled' | 'onPress' | 'style'
>;
