import { Control, FieldValues, Path } from 'react-hook-form';

import { JsxElement } from '@hero24/ui';

import { InputSection, InputSectionProps } from '../InputSection';

import { useLogic } from './useLogic';

type BusinessCustomerSectionProps<Type extends FieldValues> = {
  control: Control<Type>;
  isBusinessCustomerControllerName: Path<Type>;
} & Pick<InputSectionProps<Type>, 'inputFields'>;

export const BusinessCustomerSection = <Type extends FieldValues>(
  props: BusinessCustomerSectionProps<Type>,
): JsxElement | null => {
  const { inputFields, control, isBusinessCustomerControllerName } = props;

  const { isBusinessCustomer } = useLogic({
    control,
    name: isBusinessCustomerControllerName,
  });

  if (!isBusinessCustomer) {
    return null;
  }

  return <InputSection control={control} inputFields={inputFields} />;
};
