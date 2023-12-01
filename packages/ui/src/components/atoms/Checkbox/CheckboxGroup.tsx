import {
  CheckboxGroup as GluestackCheckboxGroup,
  Text,
} from '@gluestack-ui/themed';
import { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { CheckboxOption } from './CheckboxOption';
import { CheckboxOptions } from './CheckboxOptions';
import { CheckboxGroupProps } from './types';
import { CHECKBOX_ROOT_VALUE, useCheckbox } from './useCheckbox';

import { Color } from '$theme';

// * To add label, we need explicitly set hasRootCheck to true
export const CheckboxGroup = <Type extends FieldValues>(
  props: CheckboxGroupProps<Type>,
): ReactElement => {
  const {
    options,
    label,
    control,
    name,
    hasRootCheck,
    style,
    onChangeAction,
    ...restProps
  } = props;

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
    onChangeAction,
  });

  return (
    <GluestackCheckboxGroup
      value={value}
      ref={ref}
      onChange={onChange}
      style={style}
      {...restProps}
    >
      {hasRootCheck && (
        <CheckboxOption
          wrapperStyle={styles.mainWrapper}
          label={label}
          value={CHECKBOX_ROOT_VALUE}
          isIndeterminate={isIndeterminate}
          isChecked={isEverythingChecked}
          {...restProps}
        />
      )}
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

      <CheckboxOptions
        options={options}
        hasRootCheck={hasRootCheck}
        {...restProps}
      />
    </GluestackCheckboxGroup>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  error: {
    paddingLeft: 6,
    paddingTop: 4,
    color: Color.GREY_01,
  },
});
