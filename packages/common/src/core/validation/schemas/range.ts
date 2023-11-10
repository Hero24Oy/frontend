import * as yup from 'yup';

import { RadioRange } from '@hero24/ui';

export const rangeSchema: yup.ObjectSchema<RadioRange> = yup.object({
  min: yup.number().required(),
  max: yup.number().required(),
});
