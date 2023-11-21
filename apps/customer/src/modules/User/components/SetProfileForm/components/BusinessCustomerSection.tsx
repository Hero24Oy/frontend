import { Control, FieldValues } from 'react-hook-form';

import { JsxElement } from '@hero24/ui';

import { InputSection, InputSectionProps } from './InputSection';

type BusinessCustomerSectionProps<Type extends FieldValues> = {
  control: Control<Type>;
  isShown?: boolean;
} & Pick<InputSectionProps<Type>, 'inputFields'>;

export const BusinessCustomerSection = <Type extends FieldValues>(
  props: BusinessCustomerSectionProps<Type>,
): JsxElement | null => {
  const { inputFields, control, isShown } = props;

  if (!isShown) {
    return null;
  }

  return <InputSection control={control} inputFields={inputFields} />;
};
