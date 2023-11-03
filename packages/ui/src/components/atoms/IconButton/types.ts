import { Button } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

import { SizeKeys } from '$theme';

export type IconSize = Extract<SizeKeys, 'sm' | 'md' | 'lg'>;

export type GluestackIconButtonProps = Pick<
  ComponentProps<typeof Button>,
  'isDisabled' | 'onPress'
>;
