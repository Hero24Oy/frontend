import { VStack } from '@gluestack-ui/themed';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { LayoutChangeEvent } from 'react-native';

import { Marks, SimpleSlider } from './components';
import { MarksProp, SliderOrientation, SliderProps } from './types';

import { JsxElement } from '$types';

type Props<Type extends FieldValues> = SliderProps<Type> & {
  marks?: MarksProp;
};

export const Slider = <Type extends FieldValues>(
  props: Props<Type>,
): JsxElement => {
  const { control, name, marks, size, ...restProps } = props;

  const isVertical = restProps.orientation === SliderOrientation.VERTICAL;

  const [width, setWidth] = useState(0);

  const onLayout = (event: LayoutChangeEvent): void => {
    setWidth(event.nativeEvent.layout.width);
  };

  return (
    <VStack onLayout={onLayout}>
      <SimpleSlider size={size} control={control} name={name} {...restProps} />
      {marks && !isVertical ? (
        <Marks marks={marks} parentWidth={width} size={size} />
      ) : null}
    </VStack>
  );
};
