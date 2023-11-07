import * as yup from 'yup';

export const multiSelectArray: yup.ISchema<string[]> = yup
  .array()
  .required('This field is required')
  .min(1, 'You need to select at least one');
