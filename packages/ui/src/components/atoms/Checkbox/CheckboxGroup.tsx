import {
  Checkbox as GluestackCheckbox,
  CheckboxGroup as GluestackCheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  RemoveIcon,
} from '@gluestack-ui/themed';
import React, { FC, useMemo, useState } from 'react';
import { Size } from 'types';

import { VStack } from '../VStack';

export type CheckboxOption = {
  label: string;
  value: string;
};

type GluestackCheckboxProps = Parameters<typeof GluestackCheckbox>[0];

type PickedProps = Pick<
  GluestackCheckboxProps,
  'isDisabled' | 'isInvalid' | 'isRequired'
>;

export type CustomProps = {
  label: string;
  options: CheckboxOption[];
} & Partial<Size>;

const SELECT_ALL = 'selectAll';

export type CheckboxProps = PickedProps & CustomProps;

export const CheckboxGroup: FC<CheckboxProps> = (props) => {
  const { options, label } = props;

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Check if every option is checked, if not - upper option is indeterminate

  const isIndeterminate = useMemo(
    () =>
      Boolean(
        selectedValues.length && selectedValues.length !== options.length,
      ),
    [selectedValues],
  );

  const isEverythingChecked = useMemo(
    () => selectedValues.length === options.length,
    [selectedValues],
  );

  // * this is a stub, will be dealt with
  // TODO fix this
  const IconMemoized = isIndeterminate ? RemoveIcon : (CheckIcon as unknown);

  // TODO better naming
  const handleChange = (chosenOptions: string[]): void => {
    if (chosenOptions.includes(SELECT_ALL)) {
      if (!selectedValues.length) {
        const optionsToSelect = options.map((option) => option.value);

        setSelectedValues(optionsToSelect);
      } else {
        setSelectedValues([]);
      }

      return;
    }

    setSelectedValues(chosenOptions);
  };

  // TODO why do we need restPRops
  // TODO handle check all or uncheck all
  return (
    <GluestackCheckboxGroup value={selectedValues} onChange={handleChange}>
      <GluestackCheckbox
        isChecked={isEverythingChecked || isIndeterminate}
        aria-label={label}
        value={SELECT_ALL}
      >
        <CheckboxIndicator>
          <CheckboxIcon as={IconMemoized} />
        </CheckboxIndicator>
        <CheckboxLabel>{label}</CheckboxLabel>
      </GluestackCheckbox>

      <VStack>
        {options.map((option) => (
          <GluestackCheckbox
            aria-label={option.label}
            value={option.value}
            key={option.label}
          >
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>

            <CheckboxLabel>{option.label}</CheckboxLabel>
          </GluestackCheckbox>
        ))}
      </VStack>
    </GluestackCheckboxGroup>
  );
};
