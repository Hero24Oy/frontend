import { Button } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export type GluestackIconButtonProps = Pick<
  ComponentProps<typeof Button>,
  'isDisabled' | 'onPress'
>;
