import { Slider } from '@gluestack-ui/themed';
import {
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { MarkItems } from '../types';

type Params<Type extends FieldValues> = {
  control: Control<Type>;
  marks: MarkItems;
  name: Path<Type>;
};

type OnChange = Pick<ComponentProps<typeof Slider>, 'onChange'>;

type RangeProps = Pick<ComponentProps<typeof Slider>, 'maxValue' | 'minValue'>;

type Value = Pick<ComponentProps<typeof Slider>, 'value'>;

type ReturnType = OnChange & Value & { rangeProps: RangeProps };

export const useSimpleSlider = <Type extends FieldValues>(
  params: Params<Type>,
): ReturnType => {
  const { control, name, marks } = params;
  const [sliderValue, setSliderValue] = useState(0);

  const rangeProps = useMemo(() => {
    const maxValue = marks.length - 1;
    const minValue = 0;

    return { maxValue, minValue };
  }, [marks.length]);

  const {
    field: { value, onChange },
  } = useController({ control, name });

  const onSliderChange = useCallback(
    (index: number): void => {
      onChange(marks[index].value);
    },
    [onChange, marks],
  );

  useEffect(() => {
    const index = marks.findIndex((mark) => mark.value === value);

    setSliderValue(index);
  }, [value]);

  return { rangeProps, onChange: onSliderChange, value: sliderValue };
};
