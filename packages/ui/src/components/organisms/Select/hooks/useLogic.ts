import { FieldValues, useController } from 'react-hook-form';

import { handleSelectedValues } from '../helpers';

import { Params, UseLogicReturnType } from './types';

export const useLogic = <Type extends FieldValues>(
  props: Params<Type>,
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
