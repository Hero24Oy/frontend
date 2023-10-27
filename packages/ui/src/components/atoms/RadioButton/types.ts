import { Radio } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export type GluestackRadioButtonProps = Pick<
  ComponentProps<typeof Radio>,
  'value' | 'style'
>;
