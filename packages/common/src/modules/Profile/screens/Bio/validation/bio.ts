import * as yup from 'yup';

import { defaultLanguages } from './constants';

import { multiSelectArraySchema } from '$core';

const stringMultiSelectArraySchema = multiSelectArraySchema<string>(false).of(
  yup.string().required(),
);

export const bioSchema = yup.object({
  info: yup.string().notRequired(),
  languages: stringMultiSelectArraySchema
    .default(defaultLanguages)
    .notRequired(),
});
