import * as yup from 'yup';

import { Maybe } from '$common';

export const passwordValidationSchema: yup.StringSchema<Maybe<string>> =
  yup.string();
