import { Slider } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

type MarkItem = {
  label: string;
  value: unknown;
};

export type MarkItems = MarkItem[];

type OrientationProp = Pick<ComponentProps<typeof Slider>, 'orientation'>;

export type CommonProps<Type extends FieldValues> = OrientationProp & {
  control: Control<Type>;
  name: Path<Type>;
  isDisabled?: boolean;
  size?: `${SliderSize}`;
  withMarks?: boolean;
};

export type MarksBasedProps = {
  marks: MarkItems;
  maxValue?: undefined;
  minValue?: undefined;
  step?: undefined;
};

type SliderPickedProps = 'maxValue' | 'minValue' | 'step';

export type ValuesBasedProps = Required<
  Pick<ComponentProps<typeof Slider>, SliderPickedProps>
> & {
  marks?: undefined;
};

export type SliderMarksBasedProps<Type extends FieldValues> =
  CommonProps<Type> & MarksBasedProps;

export type SliderValuesBasedProps<Type extends FieldValues> =
  CommonProps<Type> & ValuesBasedProps;

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
