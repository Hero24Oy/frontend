import * as yup from 'yup';

import { confirmationCodeValidationShape } from './confirmationCode';

export const confirmationCodeFormValidationSchema = (
  codeLength: number,
): yup.ObjectSchema<
  {
    code: string;
  },
  yup.AnyObject,
  unknown,
  ''
> =>
  yup.object().shape({
    code: confirmationCodeValidationShape(codeLength),
  });
