import { Radio } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export type GluestackChipProps = Pick<
  ComponentProps<typeof Radio>,
  'style' | 'isDisabled'
>;
