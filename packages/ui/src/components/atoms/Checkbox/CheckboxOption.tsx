import {
  Checkbox as GluestackCheckbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@gluestack-ui/themed';
import { Check, Minus } from 'lucide-react-native';
import { FC } from 'react';
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
        <CheckboxIcon as={isIndeterminate ? Minus : Check} />
      </CheckboxIndicator>
      <CheckboxLabel style={[labelStyle, styles.label]}>{label}</CheckboxLabel>
    </GluestackCheckbox>
  );
};

const styles = StyleSheet.create({
  label: { marginLeft: 4 },
});
