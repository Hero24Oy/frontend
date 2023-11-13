import { SelectIcon as GluestackSelectIcon } from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { SelectInput } from './components';
import { handleSelectedValues } from './helpers';
import { SelectSize } from './types';

import { HStack } from '$components/atoms';
import { RightIcon } from '$icons';
import { StyledSelect, StyledSelectDivider } from '$styled';

export type SelectProps = {
  onPress: () => void;
  size: SelectSize;
  isDivider?: boolean;
  label?: string;
  selectedValues?: string[];
};

export const Select: FC<SelectProps> = (props) => {
  const { onPress, isDivider, label, selectedValues, ...restProps } = props;

  const { inputText, badgeValue } = handleSelectedValues(selectedValues);

  return (
    <StyledSelect {...restProps} onPress={onPress}>
      <HStack style={styles.componentKit}>
        <SelectInput
          label={label}
          size={restProps.size}
          text={inputText}
          badgeValue={badgeValue}
        />
        <GluestackSelectIcon as={RightIcon} />
      </HStack>
      {isDivider && <StyledSelectDivider />}
    </StyledSelect>
  );
};

const styles = StyleSheet.create({
  componentKit: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
});

export * from './types';
