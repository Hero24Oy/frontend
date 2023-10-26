import { RadioGroup } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export enum RadioVariant {
  BUTTON = 'button',
  DEFAULT = 'default',
}

type GluestackRadioGroup = ComponentProps<typeof RadioGroup>;

export type GluestackRadioGroupProps = Omit<GluestackRadioGroup, 'children'>;
