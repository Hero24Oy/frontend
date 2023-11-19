import { yupResolver } from '@hookform/resolvers/yup';
import { isValid } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import {
  ErrorOption,
  FieldValues,
  useController,
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
  const { control: mainControl, name } = params;

  const {
    field: { onChange },
  } = useController({ control: mainControl, name });

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

  const setNewDate: SetNewDate = useMemo(
    () => (args) => {
      const date = parseDate(args);

      setAllFieldsError(isValid(date));
      onChange(date);
    },
    [onChange, watch],
  );

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
