import { Radio } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export type GluestackRadioProps = Pick<
  ComponentProps<typeof Radio>,
  'value' | 'style' | 'isDisabled'
>;
