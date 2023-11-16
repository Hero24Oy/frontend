import { Control, FieldValues } from 'react-hook-form';

import { JsxElement } from '@hero24/ui';

import { InputSection, InputSectionProps } from './InputSection';

type BusinessCustomerSectionProps<Type extends FieldValues> = {
  control: Control<Type>;
} & Pick<InputSectionProps<Type>, 'inputFields'>;

// TODO add logic of hiding
export const BusinessCustomerSection = <Type extends FieldValues>(
  props: BusinessCustomerSectionProps<Type>,
): JsxElement => {
  const { inputFields, control } = props;

  return <InputSection control={control} inputFields={inputFields} />;
};
