import { FC, useMemo } from 'react';
import { Control } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { HStack, Input, View } from '@hero24/ui';

import { DateForm } from '../../types';

import { inputFieldsProps } from './constants';
import { CommonInputFieldProps } from './types';

type Props = {
  control: Control<DateForm>;
};

export const InputFields: FC<Props> = (props) => {
  const { control } = props;

  const commonInputFieldProps: CommonInputFieldProps = useMemo(
    () => ({
      control,
      keyboardType: 'number-pad',
      isHelperEnabled: false,
    }),
    [control],
  );

  const inputs = useMemo(
    () =>
      inputFieldsProps.map((inputProps) => (
        <View key={inputProps.name} style={styles.inputFieldContainer}>
          <Input {...commonInputFieldProps} {...inputProps} />
        </View>
      )),
    [commonInputFieldProps],
  );

  return <HStack style={styles.wrapper}>{inputs}</HStack>;
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    gap: 8,
  },
  inputFieldContainer: {
    flex: 1,
  },
});
