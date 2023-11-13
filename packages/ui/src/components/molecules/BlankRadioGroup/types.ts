import { RadioGroup } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

import { RadioOption, RadioSize, RadioVariant } from '$atoms';
import { LayoutStyles } from '$types';

type GluestackRadioGroup = Pick<
  ComponentProps<typeof RadioGroup>,
  'value' | 'onChange'
>;

export type BlankRadioGroupProps = {
  options: RadioOption[];
  variant: `${RadioVariant}`;
  childrenStyle?: LayoutStyles;
  isGloballyDisabled?: boolean;
  size?: RadioSize;
  style?: LayoutStyles;
  title?: string;
} & GluestackRadioGroup;
