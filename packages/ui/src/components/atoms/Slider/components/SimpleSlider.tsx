import {
  Slider as GluestackSlider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
} from '@gluestack-ui/themed';
import { FieldValues } from 'react-hook-form';

import { useSimpleSlider } from '../hooks';
import { CommonProps, MarkItems, SliderSize } from '../types';

type Props<Type extends FieldValues> = Omit<CommonProps<Type>, 'withMarks'> & {
  marks: MarkItems;
  isDisabled?: boolean;
  size?: `${SliderSize}`;
};

export const SimpleSlider = <Type extends FieldValues>(
  props: Props<Type>,
): JSX.Element => {
  const { control, name, marks, isDisabled, ...restProps } = props;

  const { onChange, rangeProps, value } = useSimpleSlider({
    control,
    marks,
    name,
  });

  return (
    <VStack>
      <GluestackSlider
        isDisabled={isDisabled}
        isReadOnly={isDisabled}
        value={value}
        onChange={onChange}
        {...rangeProps}
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
