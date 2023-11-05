import * as yup from 'yup';

export const confirmationCodeValidationShape = (
  codeLength: number,
): yup.ISchema<string> => yup.string().required().length(codeLength);
