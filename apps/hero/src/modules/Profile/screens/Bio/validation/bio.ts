import * as yup from 'yup';

import { DEFAULT_LANGUAGES, multiSelectArraySchema } from '@hero24/common';

const languagesMultiSelectArraySchema = multiSelectArraySchema<string>(
  false,
).of(yup.string().required());

export const bioSchema = yup.object({
  info: yup.string().notRequired(),
  languages: languagesMultiSelectArraySchema
    .default(DEFAULT_LANGUAGES)
    .required(),
});
