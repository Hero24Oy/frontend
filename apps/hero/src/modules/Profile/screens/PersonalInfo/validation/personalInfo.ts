import * as yup from 'yup';

import { emailValidationSchema, ValidationHints } from '@hero24/common';

export const personalInfoSchema = yup.object({
  email: emailValidationSchema.required(ValidationHints.REQUIRED),
  name: yup.string().required(ValidationHints.REQUIRED),
  birthday: yup.date().required(ValidationHints.REQUIRED),
  displayedName: yup.string().required(ValidationHints.REQUIRED),
  lastName: yup.string().required(ValidationHints.REQUIRED),
  socialId: yup.string().required(ValidationHints.REQUIRED),
});
