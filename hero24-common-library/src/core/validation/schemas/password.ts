import * as yup from 'yup';

export const passwordValidationShape: yup.ISchema<string> = yup
  .string()
  .required('Required field');
