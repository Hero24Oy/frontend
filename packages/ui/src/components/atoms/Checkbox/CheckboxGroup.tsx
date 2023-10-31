import {
  Checkbox as GluestackCheckbox,
  CheckboxGroup as GluestackCheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  RemoveIcon,
} from '@gluestack-ui/themed';
import React, { FC, useCallback, useMemo, useState } from 'react';

import { VStack } from '../VStack';

import { CheckboxProps } from './types';

const ROOT_VALUE = 'rootValue';

export const CheckboxGroup: FC<CheckboxProps> = (props) => {
  const { options, label, ...restProps } = props;

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const isEverythingChecked = selectedValues.length === options.length;

  // Check if every option is checked, if not - upper option is indeterminate
  const isIndeterminate =
    selectedValues.length !== 0 && selectedValues.length !== options.length;

  // * this is a stub, will be dealt with
  // TODO fix this
  const IconMemoized = isIndeterminate ? RemoveIcon : (CheckIcon as unknown);

  // TODO better naming
  const handleChange = useCallback(
    (newSelectedValues: string[]): void => {
      // If we click on main checkbox, then either check or uncheck everything
      if (newSelectedValues.includes(ROOT_VALUE)) {
        if (!selectedValues.length) {
          const optionsToSelect = options.map((option) => option.value);

          setSelectedValues(optionsToSelect);
        } else {
          setSelectedValues([]);
        }

        return;
      }

      setSelectedValues(newSelectedValues);
    },
    [options, selectedValues],
  );

  const optionsToRender = useMemo(() => {
    return options.map((option) => (
      <GluestackCheckbox
        aria-label={option.label}
        value={option.value}
        key={option.label}
        {...restProps}
      >
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>

        <CheckboxLabel>{option.label}</CheckboxLabel>
      </GluestackCheckbox>
    ));
  }, [options]);

  return (
    <GluestackCheckboxGroup value={selectedValues} onChange={handleChange}>
      <GluestackCheckbox
        isChecked={isEverythingChecked || isIndeterminate}
        aria-label={label}
        value={ROOT_VALUE}
        {...restProps}
      >
        <CheckboxIndicator>
          <CheckboxIcon as={IconMemoized} />
        </CheckboxIndicator>
        <CheckboxLabel>{label}</CheckboxLabel>
      </GluestackCheckbox>

      <VStack>{optionsToRender}</VStack>
    </GluestackCheckboxGroup>
  );
};
