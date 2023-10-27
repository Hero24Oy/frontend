import {
  Checkbox as GluestackCheckbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  RemoveIcon,
} from '@gluestack-ui/themed';
import React, { FC, useCallback } from 'react';
import { Size } from 'types';

export type CheckboxOption = {
  label: string;
  value: string;
};

type GluestackCheckboxProps = Parameters<typeof GluestackCheckbox>[0];

type PickedProps = Pick<
  GluestackCheckboxProps,
  | 'value'
  | 'defaultIsChecked'
  | 'isChecked'
  | 'isDisabled'
  | 'isIndeterminate'
  | 'isInvalid'
  | 'isRequired'
  | 'onChange'
>;

export type CustomProps = {
  label: string;
} & Size;

export type CheckboxProps = PickedProps & CustomProps;

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { value, label, isIndeterminate, ...restProps } = props;

  // * this is a stub, will be dealt with
  // TODO fix this
  const IconMemoized = useCallback(
    () => (isIndeterminate ? RemoveIcon : (CheckIcon as unknown)),
    [isIndeterminate],
  );

  return (
    <GluestackCheckbox aria-label={label} value={value} {...restProps}>
      <CheckboxIndicator>
        <CheckboxIcon as={IconMemoized} />
      </CheckboxIndicator>
      <CheckboxLabel>{label}</CheckboxLabel>
    </GluestackCheckbox>
  );
};
