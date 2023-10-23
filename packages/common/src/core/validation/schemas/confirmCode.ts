import * as yup from 'yup';

export const confirmCodeValidationShape = (
  codeLength: number,
): yup.ISchema<string> =>
  yup.string().length(codeLength).nonNullable().required('Required field');
