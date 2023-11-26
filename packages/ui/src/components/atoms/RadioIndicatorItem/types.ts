import { Radio } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export type GluestackRadioIndicatorItemProps = Pick<
  ComponentProps<typeof Radio>,
  'style' | 'isDisabled'
>;
