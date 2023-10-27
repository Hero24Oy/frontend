import { RadioGroup } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export enum RadioVariant {
  BUTTON = 'button',
  DEFAULT = 'default',
}

type GluestackRadioGroup = ComponentProps<typeof RadioGroup>;

type PickedFields = 'onChange' | 'value';

export type GluestackRadioGroupProps = Pick<GluestackRadioGroup, PickedFields>;
