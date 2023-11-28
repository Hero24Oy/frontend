import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo } from 'react';
import { FieldValues, useController, useForm } from 'react-hook-form';

import { DIGIT_MASK, WORD_CHARACTER_REGEX } from './constants';
import { DateForm, DateInputProps } from './types';
import { parseDate } from './utils';
import { dateSchema } from './validation';

type Params<FormType extends FieldValues> = Pick<
  DateInputProps<FormType>,
  'control' | 'name' | 'dateMask'
>;

export const useLogic = <FormType extends FieldValues>(
  params: Params<FormType>,
) => {
  const { name, control, dateMask } = params;

  const {
    field: { onChange },
  } = useController({ control, name });

  const { control: innerControl, watch } = useForm<DateForm>({
    resolver: yupResolver<DateForm>(dateSchema(dateMask)),
    defaultValues: {
      dateString: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    const subscription = watch(setDate);

    return () => subscription.unsubscribe();
  }, [watch]);

  const setDate = (args: DateForm) => {
    const { dateString } = args;

    if (dateString) {
      const parsedDate = parseDate(dateString, dateMask);

      onChange(parsedDate);
    }
  };

  const mask = useMemo(
    () => dateMask.replace(WORD_CHARACTER_REGEX, DIGIT_MASK),
    [dateMask],
  );

  return { innerControl, mask };
};
