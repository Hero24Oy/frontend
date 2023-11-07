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
  const { control, name, isDisabled, ...restProps } = props;

  const { field } = useController({ control, name });

  return (
    <VStack>
      <GluestackSlider
        isReadOnly={isDisabled}
        isDisabled={isDisabled}
        {...field}
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
