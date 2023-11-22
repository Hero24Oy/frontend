import { FieldValues } from 'react-hook-form';

import { Input } from '@hero24/ui';

import { DateInputProps } from './types';
import { useLogic } from './useLogic';

import { JsxElement } from '$core/types';

/**
 * Description
 * @param {DateInputProps<FormType>['dateMask']} props.dateMask - must be date-fns format string pattern like 'dd.MM.yyyy'
 */
export const DateInput = <FormType extends FieldValues>(
  props: DateInputProps<FormType>,
): JsxElement => {
  const { control, name, dateMask, ...restProps } = props;
  const { innerControl, mask } = useLogic({ control, name, dateMask });

  return (
    <Input
      control={innerControl}
      name="dateString"
      keyboardType="number-pad"
      mask={mask}
      {...restProps}
    />
  );
};
