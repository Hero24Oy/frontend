import * as yup from 'yup';

import { multiSelectArraySchema } from '@hero24/common';

import { defaultLanguages } from './constants';

const stringMultiSelectArraySchema = multiSelectArraySchema<string>(false).of(
  yup.string().required(),
);

export const bioSchema = yup.object({
  info: yup.string().notRequired(),
  languages: stringMultiSelectArraySchema
    .default(defaultLanguages)
    .notRequired(),
});
