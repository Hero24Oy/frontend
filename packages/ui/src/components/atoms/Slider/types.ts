import { Slider } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

type MarkItem = {
  label: string;
  value: unknown;
};

export type MarkItems = MarkItem[];

type SliderPickedProps =
  | 'orientation'
  | 'maxValue'
  | 'minValue'
  | 'step'
  | 'isDisabled';

type CommonProps = Pick<ComponentProps<typeof Slider>, SliderPickedProps>;

export type MarksProp = string[];

export type SliderProps<Type extends FieldValues> = CommonProps & {
  control: Control<Type>;
  name: Path<Type>;
  size?: `${SliderSize}`;
};

export enum SliderSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export enum SliderOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

export enum MarkArrangement {
  FIRST = 'first',
  INNER = 'inner',
  LAST = 'last',
}
