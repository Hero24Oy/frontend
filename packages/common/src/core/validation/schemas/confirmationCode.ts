import * as yup from 'yup';

import { Maybe } from '$core/types';

export const codeValidationSchema = (
  codeLength: number,
): yup.StringSchema<Maybe<string>> => yup.string().length(codeLength);
