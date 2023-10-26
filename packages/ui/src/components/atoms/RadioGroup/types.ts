import { RadioGroup } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

export enum RadioVariant {
  BUTTON = 'button',
  DEFAULT = 'default',
}

type GluestackRadio = ComponentProps<typeof RadioGroup>;

export type GluestackProps = Omit<GluestackRadio, 'children'>;
