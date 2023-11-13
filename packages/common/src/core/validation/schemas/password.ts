import * as yup from 'yup';

import { Maybe } from '$core/types';

export const passwordValidationSchema: yup.StringSchema<Maybe<string>> =
  yup.string();
