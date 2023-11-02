import {
  Slider as GluestackSlider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
} from '@gluestack-ui/themed';
import { FieldValues, useController } from 'react-hook-form';

import { SliderProps } from '../types';

export const SimpleSlider = <Type extends FieldValues>(
  props: SliderProps<Type>,
): JSX.Element => {
  const { control, name, maxValue, minValue, step, isDisabled, ...restProps } =
    props;

  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <VStack>
      <GluestackSlider
        maxValue={maxValue}
        minValue={minValue}
        step={step}
        isReadOnly={isDisabled}
        isDisabled={isDisabled}
        value={value}
        onChange={onChange}
        {...restProps}
      >
        <SliderTrack {...restProps}>
          <SliderFilledTrack {...restProps} />
        </SliderTrack>
        <SliderThumb {...restProps} />
      </GluestackSlider>
    </VStack>
  );
};
