import * as yup from 'yup';

import { Maybe } from '$common';

export const passwordSignInValidationSchema: yup.StringSchema<Maybe<string>> =
  yup.string();
