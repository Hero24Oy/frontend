import * as yup from 'yup';

import { Range } from '$core';

export const rangeSchema: yup.ObjectSchema<Range> = yup.object({
  min: yup.number().required(),
  max: yup.number().required(),
});
