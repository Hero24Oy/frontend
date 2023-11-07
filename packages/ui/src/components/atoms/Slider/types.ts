import { Slider } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

import { Size } from '$theme';

type GluestackSliderProps = Pick<
  ComponentProps<typeof Slider>,
  'orientation' | 'maxValue' | 'minValue' | 'step' | 'isDisabled'
>;

export type MarksProp = string[];

export type SliderProps<Type extends FieldValues> = GluestackSliderProps & {
  control: Control<Type>;
  name: Path<Type>;
  size?: SliderSize;
};

export type SliderSize = Extract<Size, 'sm' | 'md' | 'lg'>;

export enum SliderOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

export enum SliderMarkArrangement {
  FIRST = 'first',
  INNER = 'inner',
  LAST = 'last',
}
