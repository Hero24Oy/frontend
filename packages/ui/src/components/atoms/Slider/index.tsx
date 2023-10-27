import { VStack } from '@gluestack-ui/themed';
import React, { useCallback, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { LayoutChangeEvent } from 'react-native';

import { Marks } from './components/Marks';
import { SliderBase } from './components/SliderBase';
import { useSliderMarks } from './hooks/useSliderMarks';
import { styles } from './styles';
import { SliderMarksBasedProps, SliderValuesBasedProps } from './types';

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
    withMarks = false,
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
    <VStack style={styles.mainContainer} onLayout={onLayout}>
      <SliderBase marks={sliderMarks} control={control} name={name} />
      {withMarks ? <Marks marks={sliderMarks} parentWidth={width} /> : null}
    </VStack>
  );
};
