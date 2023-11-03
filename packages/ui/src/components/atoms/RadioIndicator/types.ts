import { Radio } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export type GluestackRadioIndicatorProps = Pick<
  ComponentProps<typeof Radio>,
  'value' | 'style' | 'isDisabled'
>;