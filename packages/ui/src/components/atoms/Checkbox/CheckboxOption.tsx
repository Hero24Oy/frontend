import {
  Checkbox as GluestackCheckbox,
  CheckboxLabel,
} from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { CheckboxIndicator } from './CheckboxIndicator';

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

  return (
    <GluestackCheckbox
      style={wrapperStyle}
      isChecked={isChecked || isIndeterminate}
      isIndeterminate={isIndeterminate}
      aria-label={label}
      value={value}
      {...restProps}
    >
      <CheckboxIndicator isIndeterminate={isIndeterminate} />
      <CheckboxLabel style={[labelStyle, styles.label]}>{label}</CheckboxLabel>
    </GluestackCheckbox>
  );
};

const styles = StyleSheet.create({
  label: { marginLeft: 4 },
});
