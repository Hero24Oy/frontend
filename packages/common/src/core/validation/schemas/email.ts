import * as yup from 'yup';

export const emailSchema: yup.StringSchema<string | undefined> = yup
  .string()
  .email('This field must be valid email');
