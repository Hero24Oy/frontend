import * as yup from 'yup';

import { Range } from '$types';

export const range: yup.ISchema<Range> = yup
  .object({
    min: yup.number().required(),
    max: yup.number().required(),
  })
  .required('This field is required');
