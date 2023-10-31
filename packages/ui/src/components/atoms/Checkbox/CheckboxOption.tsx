import {
  Checkbox as GluestackCheckbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  RemoveIcon,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';

export type CheckboxOptionProps = {
  label: string;
  value: string;
  isChecked?: boolean;
  isIndeterminate?: boolean;
};

export const CheckboxOption: FC<CheckboxOptionProps> = (props) => {
  const { isChecked, label, value, isIndeterminate, ...restProps } = props;

  // * this is a stub, will be dealt with
  // TODO fix this
  const IconMemoized = isIndeterminate ? RemoveIcon : (CheckIcon as unknown);

  return (
    <GluestackCheckbox
      isChecked={isChecked || isIndeterminate}
      isIndeterminate={isIndeterminate}
      aria-label={label}
      value={value}
      {...restProps}
    >
      <CheckboxIndicator>
        <CheckboxIcon as={IconMemoized} />
      </CheckboxIndicator>
      <CheckboxLabel>{label}</CheckboxLabel>
    </GluestackCheckbox>
  );
};
