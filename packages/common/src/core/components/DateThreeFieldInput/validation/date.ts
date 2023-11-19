import * as yup from 'yup';

import { ValidationHints } from '$core/validation';

export const DateSchema = yup.object({
  day: yup.string().required(ValidationHints.REQUIRED),
  month: yup.string().required(ValidationHints.REQUIRED),
  year: yup.string().required(ValidationHints.REQUIRED),
});
