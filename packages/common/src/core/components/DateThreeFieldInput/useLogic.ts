import { yupResolver } from '@hookform/resolvers/yup';
import { isValid } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import {
  ErrorOption,
  FieldValues,
  Path,
  PathValue,
  useForm,
} from 'react-hook-form';

import { birthdayFormInitialState, fieldValidationError } from './constants';
import { DateForm, DateThreeFieldInputUseLogicParams } from './types';
import { parseDate } from './utils';
import { DateSchema } from './validation';

type SetNewDate = (args: DateForm) => void;

export const useLogic = <FormType extends FieldValues>(
  params: DateThreeFieldInputUseLogicParams<FormType>,
) => {
  const { name, setValue } = params;

  const [inputError, setInputError] = useState<ErrorOption | undefined>(
    undefined,
  );

  const { control, setError, watch, clearErrors } = useForm<DateForm>({
    resolver: yupResolver<DateForm>(DateSchema),
    defaultValues: birthdayFormInitialState,
    mode: 'onTouched',
  });

  useEffect(() => {
    const subscription = watch(setNewDate);

    return () => subscription.unsubscribe();
  }, [watch]);

  const setNewDate: SetNewDate = (args) => {
    const date = parseDate(args);

    const isDateValid = isValid(date);

    setAllFieldsError(isDateValid);

    setValue(
      name,
      (isDateValid ? date : null) as PathValue<FormType, Path<FormType>>,
      { shouldDirty: true, shouldValidate: true },
    );
  };

  const setAllFieldsError = useMemo(
    () => (isDateValid: boolean) => {
      if (isDateValid) {
        setInputError(undefined);
        clearErrors();
      } else {
        setInputError(fieldValidationError);
        Object.keys(birthdayFormInitialState).forEach((key) =>
          setError(key as keyof DateForm, fieldValidationError),
        );
      }
    },
    [birthdayFormInitialState, clearErrors, setError],
  );

  return { control, error: inputError };
};
