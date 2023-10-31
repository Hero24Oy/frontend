import {
  Checkbox as GluestackCheckbox,
  CheckboxGroup as GluestackCheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  RemoveIcon,
  Text,
} from '@gluestack-ui/themed';
import React, { ReactElement, useCallback, useMemo } from 'react';
import {
  FieldValues,
  useController,
  UseControllerReturn,
} from 'react-hook-form';

import { VStack } from '../VStack';

import { CheckboxProps } from './types';

const ROOT_VALUE = 'rootValue';

export const CheckboxGroup = <Type extends FieldValues>(
  props: CheckboxProps<Type>,
): ReactElement => {
  const { options, label, control, name, ...restProps } = props;

  const {
    field,
    formState: { errors },
  } = useController({ name, control }) as unknown as UseControllerReturn<
    Record<string, string[]>
  >;

  const isEverythingChecked = field.value.length === options.length;

  // Check if every option is checked, if not - upper option is indeterminate
  const isIndeterminate =
    !!field.value.length && field.value.length !== options.length;

  // * this is a stub, will be dealt with
  // TODO fix this
  const IconMemoized = isIndeterminate ? RemoveIcon : (CheckIcon as unknown);

  // TODO better naming
  const handleChange = useCallback(
    (newSelectedValues: string[]): void => {
      let valuesToUpdate: string[] = [];

      // If we click on main checkbox, then either check or uncheck everything
      if (newSelectedValues.includes(ROOT_VALUE)) {
        if (!field.value.length) {
          valuesToUpdate = options.map((option) => option.value);
        } else {
          valuesToUpdate = [];
        }
      } else {
        valuesToUpdate = newSelectedValues;
      }

      field.onChange(valuesToUpdate);
    },
    [options, field.value],
  );

  // TODO extract to a component
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
    <GluestackCheckboxGroup
      value={field.value}
      ref={field.ref}
      onChange={handleChange}
    >
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

      {errors[name]?.message && (
        <Text>{errors[name]?.message?.toString()}</Text>
      )}
      <VStack>{optionsToRender}</VStack>
    </GluestackCheckboxGroup>
  );
};
