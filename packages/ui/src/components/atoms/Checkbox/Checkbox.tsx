import {
  Checkbox as GluestackCheckbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  RemoveIcon,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';
import { Size } from 'types';

export type CheckboxOption = {
  label: string;
  value: string;
};

export type CheckboxProps = {
  label: string;
  value: string;
  defaultIsChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  onChange?: (isSelected: boolean) => void;
} & Size;

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { value, label, isIndeterminate, ...restProps } = props;

  return (
    <GluestackCheckbox aria-label={label} value={value} {...restProps}>
      <CheckboxIndicator>
        <CheckboxIcon as={isIndeterminate ? RemoveIcon : CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>{label}</CheckboxLabel>
    </GluestackCheckbox>
  );
};
