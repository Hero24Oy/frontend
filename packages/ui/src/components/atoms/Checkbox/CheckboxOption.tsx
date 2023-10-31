import {
  Checkbox as GluestackCheckbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  RemoveIcon,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type CheckboxOptionProps = {
  label: string;
  value: string;
  isChecked?: boolean;
  isIndeterminate?: boolean;
  labelStyle?: TextStyle;
  wrapperStyle?: ViewStyle;
};

export const CheckboxOption: FC<CheckboxOptionProps> = (props) => {
  const {
    isChecked,
    label,
    value,
    isIndeterminate,
    labelStyle,
    wrapperStyle,
    ...restProps
  } = props;

  // * this is a stub, will be dealt with
  // TODO fix this
  const IconMemoized = isIndeterminate ? RemoveIcon : (CheckIcon as unknown);

  return (
    <GluestackCheckbox
      style={wrapperStyle}
      isChecked={isChecked || isIndeterminate}
      isIndeterminate={isIndeterminate}
      aria-label={label}
      value={value}
      {...restProps}
    >
      <CheckboxIndicator>
        <CheckboxIcon as={IconMemoized} />
      </CheckboxIndicator>
      <CheckboxLabel style={[labelStyle, styles.label]}>{label}</CheckboxLabel>
    </GluestackCheckbox>
  );
};

const styles = StyleSheet.create({
  label: { marginLeft: 4 },
});
