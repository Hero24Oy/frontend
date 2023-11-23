import { isValid } from 'date-fns';
import * as yup from 'yup';

import { parseDate } from '../utils';

import { ValidationHints } from '$core/validation';

export const dateSchema = (dateMask: string) =>
  yup.object({
    dateString: yup
      .string()
      .length(dateMask.length, ValidationHints.INVALID_DATE)
      .test(
        'is-valid-date',
        ValidationHints.INVALID_DATE,
        (value: string | undefined) => {
          if (!value) {
            return false;
          }

          const parsedDate = parseDate(value, dateMask);

          return isValid(parsedDate);
        },
      )
      .required(ValidationHints.REQUIRED),
  });
