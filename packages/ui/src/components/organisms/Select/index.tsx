import { SelectIcon as GluestackSelectIcon } from '@gluestack-ui/themed';
import { FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { SelectInput } from './components';
import { useLogic } from './hooks';
import { SelectProps } from './types';

import { HStack } from '$atoms';
import { RightIcon } from '$icons';
import { StyledSelect, StyledSelectDivider } from '$styled';
import { JsxElement } from '$types';

export const Select = <Type extends FieldValues>(
  props: SelectProps<Type>,
): JsxElement => {
  const { control, name, hasDivider, label, ...restProps } = props;

  const { inputText, badgeValue } = useLogic({ control, name });

  return (
    <StyledSelect {...restProps}>
      <HStack style={styles.input}>
        <SelectInput
          label={label}
          size={restProps.size}
          text={inputText}
          badgeValue={badgeValue}
        />
        <GluestackSelectIcon as={RightIcon} style={styles.icon} />
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
  icon: {
    marginLeft: 'auto',
  },
});
