import { FieldValues, useController } from 'react-hook-form';

import { handleSelectedValues } from '../helpers';

import { Props, UseLogicReturnType } from './types';

export const useLogic = <Type extends FieldValues>(
  props: Props<Type>,
): UseLogicReturnType => {
  const { name, control } = props;

  const {
    field: { value },
  } = useController({
    name,
    control,
  });

  const inputValues = handleSelectedValues(value);

  return inputValues;
};
