import { VStack } from '@gluestack-ui/themed';
import { useCallback, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { LayoutChangeEvent } from 'react-native';

import { Marks, SimpleSlider } from './components';
import { MarksProp, SliderProps } from './types';

type Props<Type extends FieldValues> = SliderProps<Type> & {
  marks?: MarksProp;
};

export const Slider = <Type extends FieldValues>(
  props: Props<Type>,
): JSX.Element => {
  const { control, name, marks, size, ...restProps } = props;

  const [width, setWidth] = useState(0);

  const onLayout = useCallback(
    (event: LayoutChangeEvent): void => {
      setWidth(event.nativeEvent.layout.width);
    },
    [setWidth],
  );

  return (
    <VStack onLayout={onLayout}>
      <SimpleSlider size={size} control={control} name={name} {...restProps} />
      {marks ? <Marks marks={marks} parentWidth={width} size={size} /> : null}
    </VStack>
  );
};
