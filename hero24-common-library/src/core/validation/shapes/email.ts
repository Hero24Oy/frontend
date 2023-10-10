import * as yup from 'yup';

export const emailValidationShape: yup.ISchema<string> = yup
  .string()
  .required('Required field')
  .email('This field must be valid email');
