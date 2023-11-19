import { FieldError, FieldValues } from 'react-hook-form';

import { InputHelper, InputTitle, VStack } from '@hero24/ui';

import { InputFields } from './components';
import { DateThreeFieldInputProps } from './types';
import { useLogic } from './useLogic';

import { JsxElement } from '$core/types';

export const DateThreeFieldInput = <FormType extends FieldValues>(
  props: DateThreeFieldInputProps<FormType>,
): JsxElement => {
  const { title, ...restProps } = props;
  const { control, error } = useLogic(restProps);

  return (
    <VStack>
      <InputTitle value={title} />
      <InputFields control={control} />
      <InputHelper error={error as FieldError} />
    </VStack>
  );
};
