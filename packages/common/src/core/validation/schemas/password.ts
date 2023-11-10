import * as yup from 'yup';

import { Maybe } from '$core';

export const passwordValidationSchema: yup.StringSchema<Maybe<string>> =
  yup.string();
