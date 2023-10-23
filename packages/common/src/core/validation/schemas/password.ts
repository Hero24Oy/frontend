import * as yup from 'yup';

export const passwordSignInValidationSchema: yup.ISchema<string> = yup
  .string()
  .required('Required field');
