import * as yup from 'yup';

import { confirmCodeValidationShape } from './confirmCode';

type Schema = yup.ObjectSchema<
  {
    code: string;
  },
  yup.AnyObject,
  {
    code: string;
  },
  ''
>;

export const confirmCodeFormValidationSchema = (codeLength: number): Schema =>
  yup.object().shape({
    code: confirmCodeValidationShape(codeLength),
  });
