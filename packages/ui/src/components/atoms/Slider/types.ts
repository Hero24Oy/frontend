import { Slider } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

type MarkItem = {
  label: string;
  value: unknown;
};

export type MarkItems = MarkItem[];

export type CommonProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  withMarks?: boolean;
};

export type MarksBasedProps = {
  marks: MarkItems;
  maxValue?: undefined;
  minValue?: undefined;
  step?: undefined;
};

export type ValuesBasedProps = Pick<
  ComponentProps<typeof Slider>,
  'maxValue' | 'minValue' | 'step'
> & {
  marks?: undefined;
};

export type SliderMarksBasedProps<Type extends FieldValues> =
  CommonProps<Type> & MarksBasedProps;

export type SliderValuesBasedProps<Type extends FieldValues> =
  CommonProps<Type> & ValuesBasedProps;

export type OuterMarksStylesKeys = 'leftMark' | 'rightMark';
