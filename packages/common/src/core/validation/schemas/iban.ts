import { isValidIBAN } from 'ibantools';
import * as yup from 'yup';

import { Maybe } from '$core/types';
import { ValidationHints } from '$core/validation/enums';

export const ibanValidationSchema: yup.StringSchema<Maybe<string>> = yup
  .string()
  .test('iban', ValidationHints.INVALID_IBAN, (value) =>
    Boolean(isValidIBAN(value ?? '')),
  );
