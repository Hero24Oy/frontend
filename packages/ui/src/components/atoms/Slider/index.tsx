import { VStack } from '@gluestack-ui/themed';
import { useCallback, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { LayoutChangeEvent } from 'react-native';

import { Marks, SimpleSlider } from './components';
import { useSliderMarks } from './hooks';
import {
  SliderMarksBasedProps,
  SliderOrientation,
  SliderSize,
  SliderValuesBasedProps,
} from './types';

type Props<Type extends FieldValues> =
  | SliderMarksBasedProps<Type>
  | SliderValuesBasedProps<Type>;

export const Slider = <Type extends FieldValues>(
  props: Props<Type>,
): JSX.Element => {
  const {
    control,
    name,
    marks,
    minValue,
    maxValue,
    step,
    orientation = SliderOrientation.HORIZONTAL,
    isDisabled = false,
    size = SliderSize.SM,
    withMarks,
  } = props;

  const [width, setWidth] = useState(0);

  const onLayout = useCallback(
    (event: LayoutChangeEvent): void => {
      setWidth(event.nativeEvent.layout.width);
    },
    [setWidth],
  );

  const sliderMarks = useSliderMarks({ minValue, maxValue, step, marks });

  return (
    <VStack onLayout={onLayout}>
      <SimpleSlider
        isDisabled={isDisabled}
        orientation={orientation}
        size={size}
        marks={sliderMarks}
        control={control}
        name={name}
      />
      {withMarks && orientation === SliderOrientation.HORIZONTAL ? (
        <Marks marks={sliderMarks} parentWidth={width} size={size} />
      ) : null}
    </VStack>
  );
};
