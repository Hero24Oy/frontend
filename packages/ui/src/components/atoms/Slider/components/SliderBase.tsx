import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  View,
} from '@gluestack-ui/themed';
import React, { useCallback, useEffect, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { styles } from '../styles';
import { CommonProps, MarkItems } from '../types';

type Props<Type extends FieldValues> = CommonProps<Type> & {
  marks: MarkItems;
};

export const SliderBase = <Type extends FieldValues>(
  props: Props<Type>,
): JSX.Element => {
  const { control, name, marks } = props;
  const [sliderValue, setSliderValue] = useState(0);

  const maxValue = marks.length - 1;
  const minValue = 0;
  const step = 1;

  const {
    field: { value, onChange },
  } = useController({ control, name });

  const onSliderChange = useCallback(
    (index: number): void => onChange(marks[index].value),
    [onChange],
  );

  useEffect(() => {
    setSliderValue(marks.findIndex((mark) => mark.value === value));
  }, [value]);

  return (
    <View style={styles.sliderContainer}>
      <Slider
        sliderTrackHeight={5}
        maxValue={maxValue}
        minValue={minValue}
        step={step}
        value={sliderValue}
        onChange={onSliderChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </View>
  );
};
