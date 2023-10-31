import {
  CheckboxGroup as GluestackCheckboxGroup,
  Text,
} from '@gluestack-ui/themed';
import React, { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';

import { CheckboxOption } from './CheckboxOption';
import { CheckboxOptions } from './CheckboxOptions';
import { CheckboxGroupProps } from './types';
import { CHECKBOX_ROOT_VALUE, useCheckbox } from './useCheckbox';

export const CheckboxGroup = <Type extends FieldValues>(
  props: CheckboxGroupProps<Type>,
): ReactElement => {
  const { options, label, control, name, ...restProps } = props;

  const {
    isIndeterminate,
    isEverythingChecked,
    value,
    errorMessage,
    ref,
    onChange,
  } = useCheckbox({
    control,
    name,
    options,
  });

  return (
    <GluestackCheckboxGroup value={value} ref={ref} onChange={onChange}>
      <CheckboxOption
        label={label}
        value={CHECKBOX_ROOT_VALUE}
        isIndeterminate={isIndeterminate}
        isChecked={isEverythingChecked}
      />

      {errorMessage && <Text>{errorMessage}</Text>}
      <CheckboxOptions options={options} {...restProps} />
    </GluestackCheckboxGroup>
  );
};
