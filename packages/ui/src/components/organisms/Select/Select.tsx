import { SelectIcon as GluestackSelectIcon } from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { SelectInput } from './components';
import { handleSelectedValues } from './helpers';
import { SelectProps } from './types';

import { HStack } from '$atoms';
import { RightIcon } from '$icons';
import { StyledSelect, StyledSelectDivider } from '$styled';

export const Select: FC<SelectProps> = (props) => {
  const { hasDivider, label, selectedValues, ...restProps } = props;

  const { inputText, badgeValue } = handleSelectedValues(selectedValues);

  return (
    <StyledSelect {...restProps}>
      <HStack style={styles.input}>
        <SelectInput
          label={label}
          size={restProps.size}
          text={inputText}
          badgeValue={badgeValue}
        />
        <GluestackSelectIcon as={RightIcon} />
      </HStack>
      {hasDivider && <StyledSelectDivider />}
    </StyledSelect>
  );
};

const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
});
