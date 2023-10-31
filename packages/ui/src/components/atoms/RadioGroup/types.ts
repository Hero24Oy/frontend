import { RadioGroup } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export enum RadioVariant {
  BUTTON = 'button',
  DEFAULT = 'default',
}

export type GluestackRadioGroupProps = Pick<
  ComponentProps<typeof RadioGroup>,
  'onChange' | 'value'
>;
