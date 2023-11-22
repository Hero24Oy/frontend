import * as yup from 'yup';

import { dateStringValidator } from './dateStringValidator';

import { ValidationHints } from '$core/validation';

export const dateSchema = (dateMask: string) =>
  yup.object({
    dateString: yup
      .string()
      .length(dateMask.length, ValidationHints.INVALID_DATE)
      .test(
        'is-valid-date',
        ValidationHints.INVALID_DATE,
        dateStringValidator(dateMask),
      )
      .required(ValidationHints.REQUIRED),
  });
