import * as yup from 'yup';

import {
  fileSchema,
  multiSelectArraySchema,
  rangeSchema,
  ValidationHints,
} from '@hero24/common';

const stringMultiSelectArraySchema = multiSelectArraySchema<string>(false).of(
  yup.string().required(),
);

export const workDataSchema = yup.object({
  certificate: fileSchema.notRequired(),
  insurance: fileSchema.notRequired(),
  experience: rangeSchema.required(ValidationHints.REQUIRED),
  expertise: stringMultiSelectArraySchema.required(ValidationHints.REQUIRED),
  places: stringMultiSelectArraySchema.required(ValidationHints.REQUIRED),
});
