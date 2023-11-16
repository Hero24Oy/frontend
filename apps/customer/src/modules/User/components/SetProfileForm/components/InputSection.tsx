import { useMemo } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

import { Input, InputProps, JsxElement, VStack } from '@hero24/ui';

export type InputField<FieldName> = {
  name: FieldName;
} & Pick<InputProps<never>, 'placeholder' | 'isDisabled' | 'title'>;

export type InputSectionProps<Type extends FieldValues> = {
  control: Control<Type>;
  inputFields: InputField<Path<Type>>[];
};

export const InputSection = <Type extends FieldValues>(
  props: InputSectionProps<Type>,
): JsxElement => {
  const { inputFields, control } = props;

  const inputFieldsComponents = useMemo(
    () =>
      inputFields.map((restProps) => (
        <Input key={restProps.title} {...restProps} control={control} />
      )),
    [],
  );

  return <VStack>{inputFieldsComponents}</VStack>;
};
