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

const arraySchema = yup.array().required();

const expertiseStoreSchema = yup.object().shape({
  categoriesNames: arraySchema,
  expertiseCategories: yup
    .object()
    .shape(
      Object.fromEntries(
        Object.keys({}).map((category) => [category, arraySchema]),
      ),
    ),
});

export const workDataSchema = yup.object({
  certificate: fileSchema.notRequired(),
  insurance: fileSchema.notRequired(),
  experience: rangeSchema.required(ValidationHints.REQUIRED),
  expertise: expertiseStoreSchema.required(ValidationHints.REQUIRED),
  places: stringMultiSelectArraySchema.required(ValidationHints.REQUIRED),
});
