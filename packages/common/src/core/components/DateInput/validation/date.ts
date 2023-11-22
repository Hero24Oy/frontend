import { isPast, isValid, parse } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import * as yup from 'yup';

import { DATE_PARSE_LOCALE } from '../constants';

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

          const parsedDate = zonedTimeToUtc(
            parse(value, dateMask, new Date()),
            DATE_PARSE_LOCALE,
          );

          return isValid(parsedDate) && isPast(parsedDate);
        },
      )
      .required(ValidationHints.REQUIRED),
  });
