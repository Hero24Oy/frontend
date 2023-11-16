import { useMemo } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { Input, JsxElement } from '@hero24/ui';

export type InputField<FieldName> = {
  name: FieldName;
} & Pick<Parameters<typeof Input>[0], 'placeholder' | 'isDisabled' | 'title'>;

export type InputSectionProps<Type extends FieldValues> = {
  control: Control<Type>;
  inputFields: InputField<Path<Type>>[];
};

export const InputSection = <Type extends FieldValues>(
  props: InputSectionProps<Type>,
): JsxElement[] => {
  const { inputFields, control } = props;

  const inputFieldsComponents = useMemo(
    () =>
      inputFields.map((restProps) => (
        <View key={restProps.title} style={styles.inputFieldContainer}>
          <Input {...restProps} control={control} />
        </View>
      )),
    [],
  );

  return inputFieldsComponents;
};

const styles = StyleSheet.create({
  inputFieldContainer: {
    height: 65,
  },
});
